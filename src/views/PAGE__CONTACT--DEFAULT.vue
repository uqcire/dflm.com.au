<script setup>
import { contactPage } from '@/data/staticContent.js'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentContactInfo from '@/components/forms/COMPONENT__CONTACT--INFO.vue'
</script>

<template>
    <section class="page-contact">
        <ComponentHero :title="contactPage.hero.title" :subtitle="contactPage.hero.subtitle"
            :cta-text="contactPage.hero.ctaText" :cta-link="contactPage.hero.ctaLink" />
        <div class="max-w-4xl mx-auto py-8 px-6">
            <div class="page-contact__content">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ contactPage.content.title }}</h2>
                <div class="prose max-w-none mb-8" v-html="contactPage.content.text"></div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <ComponentContactInfo :email="contactPage.content.contactInfo.email"
                            :phone="contactPage.content.contactInfo.phone"
                            :address="contactPage.content.contactInfo.address" title="Get in Touch" />
                    </div>

                    <div>
                        <!-- Placeholder for a contact form in the future -->
                        <div class="bg-white rounded-lg shadow-md p-6">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
                            <p class="text-gray-600">Contact form coming soon.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>