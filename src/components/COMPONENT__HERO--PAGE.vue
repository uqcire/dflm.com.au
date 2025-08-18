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
    },
    ctaText: {
        type: String,
        default: ''
    },
    ctaLink: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <section class="page-hero"
        style="padding: var(--space-layout-md) var(--space-6); background: var(--color-bg-accent-subtle);">
        <div style="max-width: var(--container-xl); margin: 0 auto;">
            <div class="text-center">
                <h1 style="font-family: var(--font-family-heading); 
                          font-size: var(--font-size-4xl); 
                          font-weight: var(--font-weight-bold); 
                          color: var(--color-text-primary); 
                          margin-bottom: var(--space-4);
                          line-height: var(--line-height-tight);" class="md:text-5xl lg:text-6xl">
                    {{ title }}
                </h1>
                <p v-if="subtitle" style="font-family: var(--font-family-body);
                          font-size: var(--font-size-lg); 
                          color: var(--color-text-secondary); 
                          max-width: var(--container-md); 
                          margin: 0 auto var(--space-6);
                          line-height: var(--line-height-relaxed);" class="md:text-xl">
                    {{ subtitle }}
                </p>
                <div v-if="ctaText && ctaLink" style="margin-top: var(--space-6);">
                    <a :href="ctaLink" style="display: inline-flex;
                              align-items: center;
                              padding: var(--space-3) var(--space-6);
                              font-family: var(--font-family-body);
                              font-size: var(--font-size-base);
                              font-weight: var(--font-weight-medium);
                              color: var(--color-text-inverse);
                              background-color: var(--color-primary);
                              border: none;
                              border-radius: var(--radius-lg);
                              box-shadow: var(--shadow-sm);
                              transition: all var(--duration-200) var(--ease-out);
                              text-decoration: none;
                              letter-spacing: var(--letter-spacing-wide);" @mouseenter="$event.target.style.backgroundColor = 'var(--color-monza-700)';
                            $event.target.style.boxShadow = 'var(--shadow-md)'" @mouseleave="$event.target.style.backgroundColor = 'var(--color-primary)';
                                $event.target.style.boxShadow = 'var(--shadow-sm)'" @focus="$event.target.style.outline = 'none';
                                    $event.target.style.boxShadow = 'var(--shadow-focus-primary)'"
                        @blur="$event.target.style.boxShadow = 'var(--shadow-sm)'">
                        {{ ctaText }}
                    </a>
                </div>
            </div>
            <div v-if="image" style="margin-top: var(--space-8); display: flex; justify-content: center;">
                <div style="width: var(--space-32); 
                           height: var(--space-32); 
                           border-radius: var(--radius-full); 
                           overflow: hidden; 
                           background-color: var(--color-bg-primary); 
                           box-shadow: var(--shadow-lg); 
                           display: flex; 
                           align-items: center; 
                           justify-content: center;" class="md:w-40 md:h-40">
                    <img :src="image" :alt="title" style="width: var(--space-20); 
                               height: var(--space-20); 
                               object-fit: contain;" class="md:w-24 md:h-24" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Responsive typography scaling using design tokens */
@media (min-width: 768px) {
    .page-hero h1 {
        font-size: var(--font-size-5xl);
    }

    .page-hero p {
        font-size: var(--font-size-xl);
    }
}

@media (min-width: 1024px) {
    .page-hero h1 {
        font-size: var(--font-size-6xl);
    }

    .page-hero {
        padding: var(--space-layout-lg) var(--space-8);
    }
}

@media (min-width: 1280px) {
    .page-hero {
        padding: var(--space-layout-xl) var(--space-12);
    }
}
</style>