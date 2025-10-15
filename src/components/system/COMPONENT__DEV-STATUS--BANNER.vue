<template>
    <div v-if="showBanner" class="dev-status-banner">
        <div class="banner-content">
            <div class="status-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                        stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                </svg>
            </div>
            <div class="status-text">
                <strong>开发模式</strong> - {{ statusMessage }}
            </div>
            <button @click="dismiss" class="dismiss-btn" title="关闭提示">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { shouldUseMockData } from '../../api/fallbackData'

export default {
    name: 'DevStatusBanner',
    setup() {
        const isVisible = ref(true)
        const usingMockData = ref(false)

        onMounted(() => {
            usingMockData.value = shouldUseMockData()
        })

        const showBanner = computed(() => {
            return import.meta.env.DEV && isVisible.value && usingMockData.value
        })

        const statusMessage = computed(() => {
            if (usingMockData.value) {
                return '正在使用模拟数据，请配置 Supabase 以获取真实数据'
            }
            return '开发模式已启用'
        })

        const dismiss = () => {
            isVisible.value = false
        }

        return {
            showBanner,
            statusMessage,
            dismiss
        }
    }
}
</script>

<style scoped>
.dev-status-banner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-size: 14px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
}

.banner-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    max-width: 1200px;
    margin: 0 auto;
    gap: 12px;
}

.status-icon {
    display: flex;
    align-items: center;
    opacity: 0.9;
}

.status-text {
    flex: 1;
    text-align: center;
}

.status-text strong {
    font-weight: 600;
    margin-right: 8px;
}

.dismiss-btn {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    transition: opacity 0.2s ease;
}

.dismiss-btn:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
    .banner-content {
        padding: 6px 12px;
        font-size: 12px;
    }

    .status-icon {
        display: none;
    }
}
</style>

