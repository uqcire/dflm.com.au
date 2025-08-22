<script setup>
defineProps({
    message: {
        type: String,
        default: 'Loading...'
    },
    fullScreen: {
        type: Boolean,
        default: true
    }
})
</script>

<template>
    <div :class="fullScreen ? 'flex justify-center items-center h-screen' : 'flex justify-center items-center py-12'">
        <div class="text-center">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4">
            </div>
            <p class="text-lg text-gray-600">{{ message }}</p>
        </div>
    </div>
</template>