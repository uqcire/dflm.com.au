<script setup>
</script>

<template>
    <section class="page-404">
        <header class="page-404__header">
            <h1 class="page-404__title">Page not found</h1>
        </header>
        <div class="page-404__content">
            <p class="page-404__text">The page you are looking for doesn’t exist.</p>
        </div>
    </section>
</template>

<style scoped>
.page-404 {
    padding: var(--space-8, 2rem) var(--space-6, 1.5rem);
}

.page-404__title {
    margin: 0 0 var(--space-4, 1rem) 0;
    font-size: var(--font-size-2xl, 1.5rem);
    font-weight: 600;
}

.page-404__text {
    color: var(--color-text-secondary, #6b7280);
}
</style>