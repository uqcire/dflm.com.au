<script setup>
defineProps({
    message: {
        type: String,
        default: 'Error loading data'
    },
    fullScreen: {
        type: Boolean,
        default: true
    },
    showRetry: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['retry'])
</script>

<template>
    <div :class="fullScreen ? 'flex justify-center items-center h-screen' : 'flex justify-center items-center py-12'">
        <div class="text-center max-w-md">
            <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
                <svg class="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">Something went wrong</h3>
            <p class="text-sm text-gray-500 mb-6">{{ message }}</p>
            <button v-if="showRetry" @click="emit('retry')"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Try again
            </button>
        </div>
    </div>
</template>