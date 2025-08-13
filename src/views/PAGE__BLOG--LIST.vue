<script setup>
</script>

<template>
    <section class="page-blog">
        <header class="page-blog__header">
            <h1 class="page-blog__title">Blog</h1>
        </header>
        <div class="page-blog__content">
            <p class="page-blog__text">Blog posts coming soon.</p>
        </div>
    </section>
</template>

<style scoped>
.page-blog {
    padding: var(--space-8, 2rem) var(--space-6, 1.5rem);
}

.page-blog__title {
    margin: 0 0 var(--space-4, 1rem) 0;
    font-size: var(--font-size-2xl, 1.5rem);
    font-weight: 600;
}

.page-blog__text {
    color: var(--color-text-secondary, #6b7280);
}
</style>