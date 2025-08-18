/**
 * Blog Content Models
 * 
 * This file contains JavaScript models for blog content types
 * used with the Strapi CMS integration.
 */

import {
  SeoComponent
} from './ComponentModels.js';

/**
 * Post Model (Collection)
 * Used for blog posts
 */
export class Post {
  constructor(data = {}) {
    this.id = data.id || null;
    this.title = data.title || '';
    this.slug = data.slug || '';
    this.author = data.author || '';
    this.category = data.category || null;
    this.tags = data.tags || [];
    this.cover = data.cover || null;
    this.excerpt = data.excerpt || '';
    this.body = data.body || '';
    this.publishedAt = data.publishedAt || null;
    this.seo = data.seo ? new SeoComponent(data.seo) : new SeoComponent();
    this.createdAt = data.createdAt || null;
    this.updatedAt = data.updatedAt || null;
  }

  static fromApiResponse(data) {
    return new Post(data);
  }

  toApiFormat() {
    return {
      id: this.id,
      title: this.title,
      slug: this.slug,
      author: this.author,
      category: this.category,
      tags: this.tags,
      cover: this.cover,
      excerpt: this.excerpt,
      body: this.body,
      publishedAt: this.publishedAt,
      seo: this.seo.toApiFormat(),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

/**
 * Category Model (Collection)
 * Used for blog categories
 */
export class Category {
  constructor(data = {}) {
    this.id = data.id || null;
    this.name = data.name || '';
    this.slug = data.slug || '';
    this.createdAt = data.createdAt || null;
    this.updatedAt = data.updatedAt || null;
  }

  static fromApiResponse(data) {
    return new Category(data);
  }

  toApiFormat() {
    return {
      id: this.id,
      name: this.name,
      slug: this.slug,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

/**
 * Tag Model (Collection)
 * Used for blog tags
 */
export class Tag {
  constructor(data = {}) {
    this.id = data.id || null;
    this.name = data.name || '';
    this.slug = data.slug || '';
    this.createdAt = data.createdAt || null;
    this.updatedAt = data.updatedAt || null;
  }

  static fromApiResponse(data) {
    return new Tag(data);
  }

  toApiFormat() {
    return {
      id: this.id,
      name: this.name,
      slug: this.slug,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
} 