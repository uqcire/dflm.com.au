<script setup>
import COMPONENT__PRODUCT__CARD from '../components/COMPONENT__PRODUCT--CARD.vue'

const products = [
    {
        title: 'Premium Garlic',
        description: 'Our premium garlic is carefully selected for its exceptional flavor and quality, perfect for culinary applications.',
        image: '/src/assets/brand__logo--icon.png',
        category: 'Vegetables',
        price: '$12.99/kg',
        linkUrl: '/products/garlic',
        linkText: 'View Product'
    },
    {
        title: 'Dried Herbs Mix',
        description: 'A carefully crafted blend of dried herbs that adds depth and aroma to your dishes.',
        image: '/src/assets/brand__logo--icon.png',
        category: 'Herbs',
        price: '$8.99/pkg',
        linkUrl: '/products/dried-herbs',
        badge: 'Best Seller'
    },
    {
        title: 'Dehydrated Vegetables',
        description: 'Our dehydrated vegetables retain their nutritional value and flavor, perfect for long-term storage.',
        image: '/src/assets/brand__logo--icon.png',
        category: 'Vegetables',
        price: '$15.99/kg',
        featured: true
    },
    {
        title: 'Premium Spices Blend',
        description: 'A unique blend of premium spices that will elevate your culinary creations.',
        image: '/src/assets/brand__logo--icon.png',
        category: 'Spices',
        price: '$10.99/pkg',
        badge: 'New'
    },
    {
        title: 'Dried Fruits Assortment',
        description: 'A delicious assortment of dried fruits, perfect for snacking or baking.',
        image: '/src/assets/brand__logo--icon.png',
        category: 'Fruits',
        price: '$13.99/kg'
    },
    {
        title: 'Specialty Sauces',
        description: 'Our specialty sauces are crafted with authentic recipes and premium ingredients.',
        image: '/src/assets/brand__logo--icon.png',
        category: 'Sauces',
        price: '$7.99/bottle'
    }
]
</script>

<template>
    <div class="container mx-auto px-4 py-12">
        <h1 class="text-3xl font-bold mb-8">Product Card Component Demo</h1>

        <div class="space-y-12">
            <!-- Default Variant -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Default Variant</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <COMPONENT__PRODUCT__CARD v-for="(product, index) in products.slice(0, 3)" :key="index"
                        :product="product" variant="default" />
                </div>
            </section>

            <!-- Featured Variant -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Featured Variant</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <COMPONENT__PRODUCT__CARD :product="products[2]" variant="featured" />
                    <COMPONENT__PRODUCT__CARD :product="products[0]" variant="featured" />
                </div>
            </section>

            <!-- Minimal Variant -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Minimal Variant</h2>
                <div class="space-y-6">
                    <COMPONENT__PRODUCT__CARD v-for="(product, index) in products.slice(0, 2)" :key="index"
                        :product="product" variant="minimal" />
                </div>
            </section>

            <!-- With Badges -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">With Badges</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <COMPONENT__PRODUCT__CARD :product="products[1]" variant="default" />
                    <COMPONENT__PRODUCT__CARD :product="products[3]" variant="default" />
                </div>
            </section>

            <!-- Without Price -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Without Price</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <COMPONENT__PRODUCT__CARD v-for="(product, index) in products.slice(0, 3)" :key="index"
                        :product="product" :show-price="false" />
                </div>
            </section>

            <!-- Without Category -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Without Category</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <COMPONENT__PRODUCT__CARD v-for="(product, index) in products.slice(0, 3)" :key="index"
                        :product="product" :show-category="false" />
                </div>
            </section>

            <!-- Without Link -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Without Link</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <COMPONENT__PRODUCT__CARD v-for="(product, index) in products.slice(0, 3)" :key="index"
                        :product="product" :show-link="false" />
                </div>
            </section>

            <!-- Custom Link Text -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Custom Link Text</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <COMPONENT__PRODUCT__CARD v-for="(product, index) in products.slice(0, 3)" :key="index"
                        :product="product" link-text="Buy Now" />
                </div>
            </section>
        </div>
    </div>
</template>