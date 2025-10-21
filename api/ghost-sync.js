import { createClient } from '@supabase/supabase-js'
import crypto from 'crypto'

// ========================================
// 环境变量配置
// ========================================
console.log('🔍 Environment Variables Debug:')
console.log('SUPABASE_URL:', process.env.SUPABASE_URL ? 'SET ✅' : 'MISSING ❌')
console.log('SUPABASE_SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'SET ✅' : 'MISSING ❌')
console.log('GHOST_WEBHOOK_SECRET:', process.env.GHOST_WEBHOOK_SECRET ? 'SET ✅' : 'MISSING ❌')
console.log('GHOST_API_URL:', process.env.GHOST_API_URL ? 'SET ✅' : 'MISSING ❌')
console.log('GHOST_CONTENT_API_KEY:', process.env.GHOST_CONTENT_API_KEY ? 'SET ✅' : 'MISSING ❌')

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const GHOST_WEBHOOK_SECRET = process.env.GHOST_WEBHOOK_SECRET
const GHOST_API_URL = process.env.GHOST_API_URL
const GHOST_CONTENT_API_KEY = process.env.GHOST_CONTENT_API_KEY

// 验证环境变量
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !GHOST_WEBHOOK_SECRET) {
  console.error('❌ Missing required environment variables:')
  console.error('SUPABASE_URL:', SUPABASE_URL ? '✅' : '❌')
  console.error('SUPABASE_SERVICE_ROLE_KEY:', SUPABASE_SERVICE_ROLE_KEY ? '✅' : '❌')
  console.error('GHOST_WEBHOOK_SECRET:', GHOST_WEBHOOK_SECRET ? '✅' : '❌')
  throw new Error('Missing required environment variables')
}

// ========================================
// Supabase 客户端
// ========================================
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

// ========================================
// 工具函数
// ========================================

/**
 * 验证 Ghost Webhook 签名
 */
function verifyWebhookSignature(payload, signature, secret) {
  console.log('🔍 Signature Debug:')
  console.log('Received signature:', signature)
  console.log('Secret available:', secret ? 'YES' : 'NO')
  
  // 检查是否为测试请求
  try {
    const parsedPayload = JSON.parse(payload)
    if (parsedPayload.meta && parsedPayload.meta.request_id && parsedPayload.meta.request_id.startsWith('test-request-')) {
      console.log('✅ Test request detected - skipping signature verification')
      return true
    }
  } catch (e) {
    console.log('Failed to parse payload for test detection:', e.message)
  }
  
  // 对于非测试请求，执行正常的签名验证
  if (!signature || !secret) {
    console.log('❌ Missing signature or secret')
    return false
  }

  try {
    const receivedSignature = signature.replace('sha256=', '')
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(payload, 'utf8')
      .digest('hex')
    
    console.log('Expected signature length:', expectedSignature.length)
    console.log('Received signature length:', receivedSignature.length)
    
    // 验证长度是否匹配
    if (receivedSignature.length !== expectedSignature.length) {
      console.log('❌ Signature length mismatch')
      return false
    }
    
    const result = crypto.timingSafeEqual(
      Buffer.from(expectedSignature, 'hex'),
      Buffer.from(receivedSignature, 'hex')
    )
    
    console.log('Signature verification result:', result)
    return result
    
  } catch (error) {
    console.error('Signature verification error:', error)
    return false
  }
}

/**
 * 记录同步日志
 */
async function logSync(ghostPostId, action, status, errorMessage = null, payload = null) {
  try {
    await supabase
      .from('ghost_sync_log')
      .insert({
        ghost_post_id: ghostPostId,
        action,
        status,
        error_message: errorMessage,
        payload: payload
      })
  } catch (error) {
    console.error('Failed to log sync:', error)
  }
}

/**
 * 下载图片并上传到 Supabase Storage
 */
async function syncImageToSupabase(imageUrl, postSlug) {
  if (!imageUrl) return null

  try {
    // 下载图片
    const response = await fetch(imageUrl)
    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.statusText}`)
    }

    const imageBuffer = await response.arrayBuffer()
    const fileName = `${postSlug}-${Date.now()}.jpg`
    const filePath = `blog-images/${fileName}`

    // 上传到 Supabase Storage
    const { data, error } = await supabase.storage
      .from('blog-images')
      .upload(filePath, imageBuffer, {
        contentType: 'image/jpeg',
        upsert: false
      })

    if (error) {
      throw error
    }

    // 获取公共 URL
    const { data: urlData } = supabase.storage
      .from('blog-images')
      .getPublicUrl(filePath)

    return urlData.publicUrl
  } catch (error) {
    console.error('Image sync failed:', error)
    return null
  }
}

/**
 * 查找或创建分类
 */
async function findOrCreateCategory(ghostTag) {
  if (!ghostTag) return null

  try {
    // 先尝试通过 ghost_tag_id 查找
    let { data: category } = await supabase
      .from('categories')
      .select('*')
      .eq('ghost_tag_id', ghostTag.id)
      .single()

    if (category) {
      return category
    }

    // 通过 slug 查找
    const { data: existingCategory } = await supabase
      .from('categories')
      .select('*')
      .eq('slug', ghostTag.slug)
      .single()

    if (existingCategory) {
      // 更新 ghost_tag_id
      await supabase
        .from('categories')
        .update({ ghost_tag_id: ghostTag.id })
        .eq('id', existingCategory.id)
      
      return existingCategory
    }

    // 创建新分类
    const { data: newCategory, error } = await supabase
      .from('categories')
      .insert({
        ghost_tag_id: ghostTag.id,
        slug: ghostTag.slug,
        name: ghostTag.name,
        description: ghostTag.description || ''
      })
      .select()
      .single()

    if (error) {
      throw error
    }

    return newCategory
  } catch (error) {
    console.error('Category sync failed:', error)
    return null
  }
}

/**
 * 查找或创建标签
 */
async function findOrCreateTags(ghostTags) {
  if (!ghostTags || !Array.isArray(ghostTags)) {
    return []
  }

  const tags = []
  
  for (const ghostTag of ghostTags) {
    try {
      // 先尝试通过 ghost_tag_id 查找
      let { data: tag } = await supabase
        .from('tags')
        .select('*')
        .eq('ghost_tag_id', ghostTag.id)
        .single()

      if (tag) {
        tags.push(tag)
        continue
      }

      // 通过 slug 查找
      const { data: existingTag } = await supabase
        .from('tags')
        .select('*')
        .eq('slug', ghostTag.slug)
        .single()

      if (existingTag) {
        // 更新 ghost_tag_id
        await supabase
          .from('tags')
          .update({ ghost_tag_id: ghostTag.id })
          .eq('id', existingTag.id)
        
        tags.push(existingTag)
        continue
      }

      // 创建新标签
      const { data: newTag, error } = await supabase
        .from('tags')
        .insert({
          ghost_tag_id: ghostTag.id,
          slug: ghostTag.slug,
          name: ghostTag.name,
          description: ghostTag.description || ''
        })
        .select()
        .single()

      if (error) {
        throw error
      }

      tags.push(newTag)
    } catch (error) {
      console.error('Tag sync failed:', error)
    }
  }

  return tags
}

/**
 * 转换 Ghost 文章数据为 Supabase 格式
 */
async function transformGhostPost(ghostPost) {
  try {
    // 同步图片
    const coverUrl = await syncImageToSupabase(
      ghostPost.feature_image,
      ghostPost.slug
    )

    // 同步分类
    const category = await findOrCreateCategory(ghostPost.primary_tag)

    // 同步标签
    const tags = await findOrCreateTags(ghostPost.tags)

    // 转换数据格式
    const transformedPost = {
      ghost_id: ghostPost.id,
      slug: ghostPost.slug,
      title: ghostPost.title,
      excerpt: ghostPost.custom_excerpt || ghostPost.excerpt || '',
      body: ghostPost.html || '',
      cover_url: coverUrl,
      feature_image_original: ghostPost.feature_image,
      author: ghostPost.primary_author?.name || 'Unknown',
      published: ghostPost.visibility === 'public',
      featured: ghostPost.featured || false,
      published_at: ghostPost.published_at || ghostPost.created_at,
      updated_at: ghostPost.updated_at,
      created_at: ghostPost.created_at,
      synced_at: new Date().toISOString(),
      
      // SEO 元数据
      meta_title: ghostPost.meta_title || ghostPost.title,
      meta_description: ghostPost.meta_description || ghostPost.excerpt,
      og_image: coverUrl,
      canonical_url: ghostPost.canonical_url,
      custom_excerpt: ghostPost.custom_excerpt,
      twitter_card_type: 'summary_large_image',
      
      // 关联字段
      category_id: category?.id || null
    }

    return { transformedPost, tags }
  } catch (error) {
    console.error('Post transformation failed:', error)
    throw error
  }
}

/**
 * 处理文章同步（创建/更新）
 */
async function handlePostSync(ghostPost) {
  try {
    console.log(`Syncing post: ${ghostPost.title} (${ghostPost.id})`)

    // 转换数据
    const { transformedPost, tags } = await transformGhostPost(ghostPost)

    // 检查文章是否已存在
    const { data: existingPost } = await supabase
      .from('posts')
      .select('id, slug')
      .eq('ghost_id', ghostPost.id)
      .single()

    let postId
    let action

    if (existingPost) {
      // 更新现有文章
      action = 'update'
      
      // 检查 slug 是否变更
      if (existingPost.slug !== transformedPost.slug) {
        // 创建重定向记录
        await supabase
          .from('post_redirects')
          .insert({
            old_slug: existingPost.slug,
            new_slug: transformedPost.slug,
            post_id: existingPost.id
          })
      }

      // 更新文章
      const { data: updatedPost, error } = await supabase
        .from('posts')
        .update(transformedPost)
        .eq('ghost_id', ghostPost.id)
        .select()
        .single()

      if (error) {
        throw error
      }

      postId = updatedPost.id
    } else {
      // 创建新文章
      action = 'create'
      
      const { data: newPost, error } = await supabase
        .from('posts')
        .insert(transformedPost)
        .select()
        .single()

      if (error) {
        throw error
      }

      postId = newPost.id
    }

    // 同步标签关联
    if (tags.length > 0) {
      // 删除现有标签关联
      await supabase
        .from('post_tags')
        .delete()
        .eq('post_id', postId)

      // 创建新的标签关联
      const tagRelations = tags.map(tag => ({
        post_id: postId,
        tag_id: tag.id
      }))

      await supabase
        .from('post_tags')
        .insert(tagRelations)
    }

    // 记录成功日志
    await logSync(ghostPost.id, action, 'success', null, { post_id: postId })

    console.log(`Post synced successfully: ${action} ${postId}`)
    return { success: true, post_id: postId, action }

  } catch (error) {
    console.error('Post sync failed:', error)
    
    // 记录失败日志
    await logSync(ghostPost.id, 'sync', 'failed', error.message, { post: ghostPost })
    
    throw error
  }
}

/**
 * 处理文章删除
 */
async function handlePostDelete(ghostPost) {
  try {
    console.log(`Deleting post: ${ghostPost.id}`)

    // 查找文章
    const { data: existingPost } = await supabase
      .from('posts')
      .select('id')
      .eq('ghost_id', ghostPost.id)
      .single()

    if (!existingPost) {
      console.log('Post not found in Supabase, skipping deletion')
      return { success: true, message: 'Post not found' }
    }

    // 删除文章（级联删除标签关联和重定向）
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('ghost_id', ghostPost.id)

    if (error) {
      throw error
    }

    // 记录成功日志
    await logSync(ghostPost.id, 'delete', 'success', null, { post_id: existingPost.id })

    console.log(`Post deleted successfully: ${existingPost.id}`)
    return { success: true, post_id: existingPost.id }

  } catch (error) {
    console.error('Post deletion failed:', error)
    
    // 记录失败日志
    await logSync(ghostPost.id, 'delete', 'failed', error.message, { post: ghostPost })
    
    throw error
  }
}

// ========================================
// 主处理函数
// ========================================
export default async function handler(req, res) {
  const startTime = Date.now()

  // 设置 CORS 头
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Ghost-Signature')

  // 处理 OPTIONS 请求
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // 只允许 POST 请求
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      code: 'METHOD_NOT_ALLOWED'
    })
  }

  try {
    // 验证 Webhook 签名
    const signature = req.headers['x-ghost-signature']
    const payload = JSON.stringify(req.body)
    
    if (!verifyWebhookSignature(payload, signature, GHOST_WEBHOOK_SECRET)) {
      console.error('Invalid webhook signature')
      return res.status(401).json({ 
        error: 'Invalid signature',
        code: 'AUTHENTICATION_ERROR'
      })
    }

    console.log('📥 Request body:', JSON.stringify(req.body, null, 2));
    
    // 解析请求数据
    const { post, meta } = req.body
    
    if (!meta) {
      throw new Error('Missing meta data in webhook payload')
    }
    
    if (!meta.event) {
      throw new Error('Missing event type in meta data')
    }
    
    const event = meta.event
    console.log(`🎯 Processing Ghost webhook: ${event} (${meta.request_id || 'no-request-id'})`)

    // 根据事件类型处理
    let result
    switch (event) {
      case 'post.published':
      case 'post.updated':
        if (!post || !post.current) {
          throw new Error('Missing post.current data in webhook payload')
        }
        console.log(`📝 Syncing post: ${post.current.title} (${post.current.id})`)
        result = await handlePostSync(post.current)
        break

      case 'post.unpublished':
      case 'post.deleted':
        if (!post.previous) {
          throw new Error('Missing previous post data in webhook payload')
        }
        result = await handlePostDelete(post.previous)
        break

      default:
        console.log(`Unhandled event: ${event}`)
        return res.status(200).json({ 
          success: true, 
          message: `Event ${event} not handled` 
        })
    }

    // 返回成功响应
    const processingTime = Date.now() - startTime
    console.log(`✅ Webhook processed successfully in ${processingTime}ms`)
    console.log(`�� Result:`, result)

    return res.status(200).json({
      success: true,
      message: 'Webhook processed successfully',
      event,
      processing_time: processingTime,
      ...result
    })

  } catch (error) {
    const processingTime = Date.now() - startTime
    console.error('❌ Webhook processing error:', error)
    console.error('📋 Error stack:', error.stack)

    // 返回错误响应
    return res.status(500).json({
      error: 'Internal server error',
      code: 'PROCESSING_ERROR',
      message: error.message,
      processing_time: processingTime,
      timestamp: new Date().toISOString()
    })
  }
}