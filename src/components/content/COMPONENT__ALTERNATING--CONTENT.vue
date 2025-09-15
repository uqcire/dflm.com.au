<script setup>
import ComponentGrid from '@/components/layout/COMPONENT__GRID.vue'
import ComponentImageDisplay from '@/components/ui/COMPONENT__IMAGE--DISPLAY.vue'

// Props
const props = defineProps({
    sections: {
        type: Array,
        required: true,
        // Each section should have: title, description, image, linkText, linkUrl, imagePosition (left/right), id (optional)
        validator: (sections) => {
            return sections.every(section =>
                section.title &&
                section.description &&
                section.image &&
                section.linkText &&
                section.linkUrl
            )
        }
    },
    gap: {
        type: String,
        default: 'xl',
        validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].includes(value)
    },
    imageSize: {
        type: String,
        default: 'lg',
        validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'].includes(value)
    },
    imageClass: {
        type: String,
        default: ''
    },
    titleClass: {
        type: String,
        default: 'font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight'
    },
    descriptionClass: {
        type: String,
        default: 'font-body text-lg text-pickled-bluewood-700 leading-relaxed'
    },
    linkClass: {
        type: String,
        default: 'inline-flex items-center text-pickled-bluewood-800 underline font-medium hover:text-pickled-bluewood-900 transition-colors duration-200 group'
    },
    contentClass: {
        type: String,
        default: 'space-y-6'
    },
    sectionClass: {
        type: String,
        default: 'mb-16 last:mb-0'
    }
})
</script>

<template>
    <div v-for="(section, index) in sections" :key="index" :class="sectionClass" :id="section.id">
        <ComponentGrid :columns="{ base: 1, lg: 2 }" :gap="gap" align="center">
            <!-- Image Column -->
            <div :class="[
                section.imagePosition === 'right' ? 'order-1 lg:order-2' : 'order-1',
                imageClass
            ]">
                <ComponentImageDisplay :src="section.image" :alt="section.title" :size="imageSize || section.imageSize"
                    variant="plain" :object-fit="'fill'" :class="section.imageClass || ''" />
            </div>

            <!-- Content Column -->
            <div :class="[
                section.imagePosition === 'right' ? 'order-2 lg:order-1' : 'order-2',
                contentClass
            ]">
                <h3 :class="titleClass" class="pb-8">
                    {{ section.title }}
                </h3>
                <p :class="descriptionClass" class="pb-8">
                    {{ section.description }}
                </p>

                <router-link :to="section.linkUrl" :class="linkClass">
                    {{ section.linkText }}
                    <svg class="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                        </path>
                    </svg>
                </router-link>
            </div>
        </ComponentGrid>
    </div>
</template>