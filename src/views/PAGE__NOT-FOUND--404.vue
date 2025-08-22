<script setup>
import { useRouter } from 'vue-router'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentStack from '@/components/layout/COMPONENT__STACK.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'

const router = useRouter()

// Navigation actions following the CTA component pattern
const primaryAction = {
    text: 'Return Home',
    href: '/',
    type: 'button'
}

</script>

<template>
    <ComponentContainer tag="main" size="lg" padding="responsive" class="page-404">

        <!-- Main Error Section -->
        <ComponentSection spacing="lg">
            <ComponentStack space="lg" align="center">
                <!-- Error Code -->
                <div class="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight text-monza-600 opacity-80"
                    aria-hidden="true">
                    404
                </div>
                <!-- Header Content -->
                <header class="text-center max-w-2xl mx-auto">
                    <ComponentStack space="md" align="center">
                        <h1
                            class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 mb-6 tracking-tight">
                            Oops! Page Not Found
                        </h1>

                        <p class="text-lg md:text-xl leading-relaxed text-slate-600 m-0 max-w-lg">
                            The page you're looking for doesn't exist or may have been moved.
                        </p>

                        <p class="text-base leading-relaxed text-slate-500 m-0">
                            Don't worry - let's get you back on track.
                        </p>
                    </ComponentStack>
                </header>

                <!-- Action Button -->
                <div class="flex flex-col gap-4 items-center mt-8">
                    <!-- Primary Action - Return Home -->
                    <a :href="primaryAction.href"
                        class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-monza-600 border-2 border-monza-600 rounded-xl shadow-sm transition-all duration-200 ease-out tracking-wide min-w-[200px] hover:-translate-y-0.5 hover:shadow-lg hover:bg-monza-700"
                        :aria-label="`${primaryAction.text} - Return to homepage`">
                        <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        {{ primaryAction.text }}
                    </a>
                </div>
            </ComponentStack>
        </ComponentSection>

    </ComponentContainer>
</template>

<style scoped>
/* Ensure proper text selection */
.page-404 {
    user-select: text;
}

/* Animation for smooth interactions */
.page-404 * {
    box-sizing: border-box;
}
</style>