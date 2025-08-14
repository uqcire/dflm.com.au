<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <section class="page-hero py-12 md:py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div class="max-w-7xl mx-auto">
            <div class="text-center">
                <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    {{ title }}
                </h1>
                <p v-if="subtitle" class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    {{ subtitle }}
                </p>
            </div>
            <div v-if="image" class="mt-8 flex justify-center">
                <div
                    class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-white shadow-lg flex items-center justify-center">
                    <img :src="image" :alt="title" class="w-20 h-20 md:w-24 md:h-24 object-contain" />
                </div>
            </div>
        </div>
    </section>
</template>