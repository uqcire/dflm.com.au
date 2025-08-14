<script setup>
import { ref } from 'vue'
import COMPONENT__SOCIAL__LINKS from './COMPONENT__SOCIAL--LINKS.vue'

const currentYear = ref(new Date().getFullYear())

const footerLinks = [
    {
        title: 'Quick Links',
        links: [
            { text: 'Home', path: '/' },
            { text: 'About Us', path: '/about' },
            { text: 'Industries', path: '/industries' },
            { text: 'Certifications', path: '/certifications' },
            { text: 'Blog', path: '/blog' },
            { text: 'Contact', path: '/contact' }
        ]
    },
    {
        title: 'Services',
        links: [
            { text: 'Import & Distribution', path: '/services/import-distribution' },
            { text: 'OEM / Private Label', path: '/services/oem' }
        ]
    },
    {
        title: 'Products',
        links: [
            { text: 'Garlic', path: '/' },
            { text: 'Dehaydrated Vegetables', path: '/' },
            { text: 'Sauces', path: '/' },
            { text: 'Spices', path: '/' },
            { text: 'Dried Fruits', path: '/' },
            { text: 'Dried Herbs', path: '/' },
        ]
    },
    {
        title: 'Contact Info',
        links: [
            { text: 'Email: hello@dflm.com.au', path: 'mailto:hello@dflm.com.au' },
            { text: 'Phone: +61 03 1234 5678', path: 'tel:+61212345678' },
            { text: 'Address: Melbourne, Australia', path: '#' }
        ]
    }
]

const socialLinks = [
    { name: 'Facebook', icon: 'facebook', url: '#' },
    { name: 'Twitter', icon: 'x', url: '#' },
    { name: 'LinkedIn', icon: 'linkedin', url: '#' },
    { name: 'Instagram', icon: 'instagram', url: '#' }
]
</script>

<template>
    <footer class="footer footer--site w-full bg-monza-500 text-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pt-16 lg:pb-0 py-4">
            <div class="footer__top pb-8">
                <el-row :gutter="24" justify="space-between">
                    <el-col :span="24" :lg="6">
                        <!-- Company Info -->
                        <div class="footer__section flex flex-col gap-4">
                            <div class="footer__brand flex items-center gap-4">
                                <img src="/src/assets/brand__logo--icon.png" alt="E‑Sunrise Australia"
                                    class="footer__logo h-10 w-auto" />
                                <div class="footer__brand-text flex flex-col gap-2">
                                    <span class="footer__title text-xl font-semibold font-playfair">E‑Sunrise
                                        Australia</span>
                                </div>
                            </div>
                            <p class="footer__description text-white text-sm leading-relaxed pb-2">
                                Your trusted partner for premium products and exceptional service in the Australian
                                market.
                            </p>
                            <COMPONENT__SOCIAL__LINKS :links="socialLinks" variant="footer" class="mb-6" />
                        </div>
                    </el-col>

                    <el-col :span="24" :lg="16">
                        <!-- Footer Links Sections -->
                        <div class="footer__links-sections flex flex-col lg:flex-row lg:justify-between gap-4">
                            <div v-for="(section, index) in footerLinks" :key="index"
                                class="footer__section pb-4 border-b-2 border-tree-poppy-400 lg:border-b-0 lg:pb-0">
                                <h3 class="footer__heading text-lg font-bold font-playfair mb-4 pb-4">{{ section.title
                                }}
                                </h3>
                                <ul class="footer__links space-y-2">
                                    <li v-for="(link, linkIndex) in section.links" :key="linkIndex"
                                        class="footer__link-item">
                                        <a :href="link.path"
                                            class="footer__link text-white hover:text-monza-50 transition-colors duration-200 text-sm"
                                            :target="link.path.startsWith('mailto') || link.path.startsWith('tel') ? '_blank' : '_self'">
                                            {{ link.text }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </el-col>
                </el-row>
            </div>

            <div class="footer__middle ">
                <el-row :gutter="24">
                    <el-col :span="24" :lg="10">
                        <!-- Social Media -->
                        <div class="footer__newsletter flex flex-col gap-2">
                            <h4 class="footer__newsletter-title text-lg font-semibold mb-2">Subscribe to Newsletter</h4>
                            <p class="footer__newsletter-description text-white text-xs mb-3">Stay updated with our
                                latest news and offers</p>
                            <div class="footer__newsletter-form flex pt-2 gap-2">
                                <input type="email" placeholder="Your email"
                                    class="footer__newsletter-input flex-1 px-3 py-2 bg-monza-800 border border-monza-700 rounded text-white placeholder-monza-400 text-sm focus:outline-none focus:ring-2 focus:ring-tree-poppy-500 focus:border-transparent" />
                                <el-button type="primary" size="large"
                                    class="footer__newsletter-button px-4 py-2 bg-tree-poppy-600 hover:bg-tree-poppy-500 rounded text-white text-sm font-medium transition-colors duration-200">
                                    Subscribe
                                </el-button>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer__bottom m-4 py-4 lg:m-12 lg:p-8 border-t border-tree-poppy-400">
            <el-row :gutter="24" justify="space-between">
                <el-col :span="24" :lg="10">
                    <div class="footer__copyright text-white text-sm ">
                        © {{ currentYear }} E‑Sunrise Australia. All rights reserved.
                    </div>
                </el-col>
                <el-col :span="24" :lg="12">
                    <div
                        class="footer__legal-links flex flex-col gap-2 pt-2 lg:flex-row lg:flex-wrap lg:gap-4 lg:pt-0 text-sm justify-center ">
                        <a href="#"
                            class="footer__legal-link text-white hover:text-monza-50 transition-colors duration-200">Privacy
                            Policy</a>
                        <a href="#"
                            class="footer__legal-link text-white hover:text-monza-50 transition-colors duration-200">Terms
                            of Service</a>
                        <a href="#"
                            class="footer__legal-link text-white hover:text-monza-50 transition-colors duration-200">Cookie
                            Policy</a>
                    </div>
                </el-col>
            </el-row>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    margin-top: auto;
}
</style>