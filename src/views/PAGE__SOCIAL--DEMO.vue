<script setup>
import COMPONENT__SOCIAL__LINKS from '../components/COMPONENT__SOCIAL--LINKS.vue'

const socialLinks = [
    { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
    { name: 'Twitter', icon: 'x', url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' }
]
</script>

<template>
    <div class="container mx-auto px-4 py-12">
        <h1 class="text-3xl font-bold mb-8">Social Links Component Demo</h1>

        <div class="space-y-12">
            <!-- Default Variant -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Default Variant</h2>
                <COMPONENT__SOCIAL__LINKS :links="socialLinks" title="Follow Us (Default)" />
            </section>

            <!-- Footer Variant -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Footer Variant</h2>
                <div class="bg-monza-500 p-6 rounded-lg">
                    <COMPONENT__SOCIAL__LINKS :links="socialLinks" title="Follow Us (Footer)" variant="footer" />
                </div>
            </section>

            <!-- Standalone Variant -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Standalone Variant</h2>
                <COMPONENT__SOCIAL__LINKS :links="socialLinks" title="Follow Us (Standalone)" variant="standalone" />
            </section>

            <!-- Size Variations -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Size Variations</h2>
                <div class="space-y-6">
                    <div>
                        <h3 class="text-lg font-medium mb-2">Small Size</h3>
                        <COMPONENT__SOCIAL__LINKS :links="socialLinks" title="Follow Us (Small)" size="small" />
                    </div>

                    <div>
                        <h3 class="text-lg font-medium mb-2">Medium Size (Default)</h3>
                        <COMPONENT__SOCIAL__LINKS :links="socialLinks" title="Follow Us (Medium)" size="medium" />
                    </div>

                    <div>
                        <h3 class="text-lg font-medium mb-2">Large Size</h3>
                        <COMPONENT__SOCIAL__LINKS :links="socialLinks" title="Follow Us (Large)" size="large" />
                    </div>
                </div>
            </section>

            <!-- Without Title -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Without Title</h2>
                <COMPONENT__SOCIAL__LINKS :links="socialLinks" :show-title="false" />
            </section>
        </div>
    </div>
</template>