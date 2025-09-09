<script setup>
defineProps({
    challenge: {
        type: Object,
        required: true,
        validator: (value) => {
            return value.title && value.description
        }
    }
})
</script>

<template>
    <el-card class="challenge-card h-full rounded-lg min-h-64 shadow-sm hover:shadow-md transition-shadow duration-200">
        <div class="flex flex-col gap-4 items-start text-left">
            <!-- Checkmark Icon -->
            <div class="flex-shrink-0 w-6 h-6 bg-monza-600 rounded-full flex items-center justify-center">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <h3 class="font-body text-md font-semibold text-pickled-bluewood-800 leading-tight flex-1">
                {{ challenge.title }}
            </h3>
            <div class="flex-1 flex flex-col">
                <p class="font-body text-sm text-pickled-bluewood-700 leading-relaxed flex-1">
                    {{ challenge.description }}
                </p>
            </div>
        </div>

    </el-card>
</template>

<style scoped>
.challenge-card {
    transition: all 0.3s ease-in-out;
}

.challenge-card:hover {
    transform: translateY(-1px);
}

.challenge-card:deep {
    background: transparent !important;
    border: none !important;
}
</style>