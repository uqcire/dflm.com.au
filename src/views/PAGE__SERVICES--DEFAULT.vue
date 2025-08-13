<script setup>
</script>

<template>
    <section class="page-services">
        <header class="page-services__header">
            <h1 class="page-services__title">Services</h1>
        </header>
        <div class="page-services__content">
            <ul class="page-services__list">
                <li class="page-services__item">Import & Distribution</li>
                <li class="page-services__item">OEM / Private Label</li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.page-services {
    padding: var(--space-8, 2rem) var(--space-6, 1.5rem);
}

.page-services__title {
    margin: 0 0 var(--space-4, 1rem) 0;
    font-size: var(--font-size-2xl, 1.5rem);
    font-weight: 600;
}

.page-services__list {
    margin: 0;
    padding-left: 1rem;
}

.page-services__item {
    color: var(--color-text-secondary, #6b7280);
}
</style>