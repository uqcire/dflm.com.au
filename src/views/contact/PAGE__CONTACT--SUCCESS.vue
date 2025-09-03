<template>
    <div class="min-h-screen bg-white">
        <!-- Main Content Area -->
        <div class="flex flex-col items-center justify-center min-h-screen px-4 py-16">
            <!-- Success Message Container -->
            <div class="text-center max-w-2xl mx-auto">
                <!-- Success Icon -->
                <div class="mb-8">
                    <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                    </div>
                </div>

                <!-- Success Heading -->
                <h1 class="text-4xl md:text-5xl font-bold text-pickled-bluewood-800 mb-6 pb-8">
                    We got your message!
                </h1>

                <!-- Success Description -->
                <p class="text-lg md:text-xl text-pickled-bluewood-700 mb-12 leading-relaxed pb-8">
                    Thank you for getting in touch with us. Our team will get back to you as soon as possible.
                </p>

                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <!-- Go Back to Homepage Button -->
                    <CustomButton variant="primary" size="lg" @click="goToHomepage" class="w-full sm:w-auto">
                        Go back to homepage
                    </CustomButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import CustomButton from '@/components/ui/COMPONENT__BUTTON--CUSTOM.vue'

const router = useRouter()

// Navigation functions
const goToHomepage = () => {
    router.push('/')
}

const goToContact = () => {
    router.push('/contact')
}
</script>

<style scoped>
@reference "tailwindcss";

/* Custom animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.text-center {
    animation: fadeInUp 0.6s ease-out;
}
</style>