<script setup>
</script>

<template>
    <section class="page-contact">
        <header class="page-contact__header">
            <h1 class="page-contact__title">Contact</h1>
        </header>
        <div class="page-contact__content">
            <p class="page-contact__text">Email us at
                <a href="mailto:info@dflm.com.au" data-umami-event="contact_mailto"
                    class="page-contact__link">info@dflm.com.au</a>
            </p>
        </div>
    </section>
</template>

<style scoped>
.page-contact {
    padding: var(--space-8, 2rem) var(--space-6, 1.5rem);
}

.page-contact__title {
    margin: 0 0 var(--space-4, 1rem) 0;
    font-size: var(--font-size-2xl, 1.5rem);
    font-weight: 600;
}

.page-contact__text {
    color: var(--color-text-secondary, #6b7280);
}

.page-contact__link {
    color: var(--color-primary, #3b82f6);
}
</style>