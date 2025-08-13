<script setup>
</script>

<template>
    <section class="page-post">
        <header class="page-post__header">
            <h1 class="page-post__title">Post Title</h1>
        </header>
        <div class="page-post__content">
            <p class="page-post__text">Post content coming soon.</p>
        </div>
    </section>
</template>

<style scoped>
.page-post {
    padding: var(--space-8, 2rem) var(--space-6, 1.5rem);
}

.page-post__title {
    margin: 0 0 var(--space-4, 1rem) 0;
    font-size: var(--font-size-2xl, 1.5rem);
    font-weight: 600;
}

.page-post__text {
    color: var(--color-text-secondary, #6b7280);
}
</style>