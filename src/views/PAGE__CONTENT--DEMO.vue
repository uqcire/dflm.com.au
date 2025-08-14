<script setup>
import COMPONENT__CONTENT__SECTION from '../components/COMPONENT__CONTENT--SECTION.vue'

const sampleContent = `
    <p>E-Sunrise Australia is a leading importer and distributor of premium food products, serving the Australian market with excellence and integrity. Our commitment to quality is unwavering, and we take pride in sourcing only the finest products from trusted suppliers around the world.</p>
    <p>With years of experience in the industry, we have built strong relationships with both producers and retailers, ensuring a seamless supply chain that delivers exceptional value to our partners. Our comprehensive range of products includes garlic, dehydrated vegetables, sauces, spices, dried fruits, and herbs.</p>
    <p>At E-Sunrise Australia, we understand the importance of reliability, consistency, and quality in the food industry. That's why we implement rigorous quality control measures at every stage of the supply chain, from sourcing to delivery.</p>
`
</script>

<template>
    <div class="container mx-auto px-4 py-12">
        <h1 class="text-3xl font-bold mb-8">Content Section Component Demo</h1>

        <div class="space-y-12">
            <!-- Default Variant -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Default Variant</h2>
                <COMPONENT__CONTENT__SECTION title="About E-Sunrise Australia" :content="sampleContent"
                    subtitle="Our Story" variant="default" />
            </section>

            <!-- Featured Variant -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Featured Variant</h2>
                <COMPONENT__CONTENT__SECTION title="Our Commitment to Quality" :content="sampleContent"
                    subtitle="Quality Assurance" variant="featured" />
            </section>

            <!-- Minimal Variant -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Minimal Variant</h2>
                <COMPONENT__CONTENT__SECTION title="Our Mission" :content="sampleContent" variant="minimal" />
            </section>

            <!-- Card Variant -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Card Variant</h2>
                <COMPONENT__CONTENT__SECTION title="Our Values" :content="sampleContent" subtitle="What We Stand For"
                    variant="card" />
            </section>

            <!-- Left Image Position -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Left Image Position</h2>
                <COMPONENT__CONTENT__SECTION title="Our Products" :content="sampleContent" subtitle="Premium Quality"
                    image="/src/assets/brand__logo--icon.png" image-position="left" />
            </section>

            <!-- Right Image Position -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Right Image Position</h2>
                <COMPONENT__CONTENT__SECTION title="Our Services" :content="sampleContent" subtitle="What We Offer"
                    image="/src/assets/brand__logo--icon.png" image-position="right" />
            </section>

            <!-- Top Image Position -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Top Image Position</h2>
                <COMPONENT__CONTENT__SECTION title="Our Facilities" :content="sampleContent" subtitle="State-of-the-Art"
                    image="/src/assets/brand__logo--icon.png" image-position="top" />
            </section>

            <!-- Background Image Position -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Background Image Position</h2>
                <COMPONENT__CONTENT__SECTION title="Our Heritage" :content="sampleContent"
                    subtitle="A Legacy of Excellence" image="/src/assets/brand__logo--icon.png"
                    image-position="background" />
            </section>

            <!-- Center Alignment -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Center Alignment</h2>
                <COMPONENT__CONTENT__SECTION title="Our Vision" :content="sampleContent" alignment="center" />
            </section>

            <!-- Right Alignment -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Right Alignment</h2>
                <COMPONENT__CONTENT__SECTION title="Our Achievements" :content="sampleContent" alignment="right" />
            </section>

            <!-- With CTA Button -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">With CTA Button</h2>
                <COMPONENT__CONTENT__SECTION title="Join Our Network" :content="sampleContent"
                    subtitle="Partner With Us" :show-cta="true" cta-text="Get In Touch" cta-url="/contact" />
            </section>

            <!-- Gray Background -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Gray Background</h2>
                <COMPONENT__CONTENT__SECTION title="Our Process" :content="sampleContent" background-color="gray" />
            </section>

            <!-- Monza Background -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Monza Background</h2>
                <COMPONENT__CONTENT__SECTION title="Our Expertise" :content="sampleContent" background-color="monza" />
            </section>
        </div>
    </div>
</template>