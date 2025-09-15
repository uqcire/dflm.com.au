<script setup>
import { ref } from 'vue'
import COMPONENT__SOCIAL__LINKS from './COMPONENT__SOCIAL--LINKS.vue'
import { footerLinks, socialLinks } from '@/data/index.js'

const currentYear = ref(new Date().getFullYear())
</script>

<template>
    <footer class="footer w-full bg-monza-500 text-white mt-auto">
        <div class="mx-auto max-w-7xl p-4 lg:pt-16 lg:pb-0">
            <div class="footer__top pb-8">
                <el-row :gutter="24" justify="space-between">
                    <el-col :span="24" :lg="6" class="sm:pt-8 lg:pt-0">
                        <!-- Company Info -->
                        <div class="footer__section flex flex-col gap-4">
                            <div class="footer__brand flex items-center gap-4">
                                <img src="/assets/brand__logo--icon.webp" alt="E‑Sunrise Australia"
                                    class="footer__logo h-10" width="40" height="40"
                                    style="height: 40px; width: 50px;" />
                                <div class="footer__brand-text flex flex-col gap-2">
                                    <span class="footer__title text-xl font-semibold font-heading">E‑Sunrise
                                        Australia</span>
                                </div>
                            </div>
                            <p class="footer__description text-white text-sm leading-relaxed pb-2">
                                Your trusted partner for premium products and exceptional service in the Australian
                                market.
                            </p>
                            <COMPONENT__SOCIAL__LINKS :links="socialLinks" variant="footer" size="medium"
                                class="mb-6" />
                        </div>
                    </el-col>

                    <el-col :span="24" :lg="16">
                        <!-- Footer Links Sections -->
                        <div class="footer__links-sections flex flex-col lg:flex-row lg:justify-between gap-4">
                            <div v-for="(section, index) in footerLinks" :key="index"
                                class="footer__section pb-4 border-b-2 border-tree-poppy-400 lg:border-b-0 lg:pb-0">
                                <h3 class="footer__heading text-lg font-bold font-playfair mb-4 pb-6">{{ section.title
                                    }}
                                </h3>
                                <ul class="footer__links space-y-2">
                                    <li v-for="(link, linkIndex) in section.links" :key="linkIndex"
                                        class="footer__link-item">
                                        <router-link
                                            v-if="!link.path.startsWith('mailto') && !link.path.startsWith('tel')"
                                            :to="link.path"
                                            class="footer__link text-white hover:text-monza-50 transition-colors duration-200 text-sm">
                                            {{ link.text }}
                                        </router-link>
                                        <a v-else :href="link.path"
                                            class="footer__link text-white hover:text-monza-50 transition-colors duration-200 text-sm"
                                            target="_blank">
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
                                    class="footer__newsletter-input flex-1 px-3 py-2 bg-white border border-tree-poppy-600 rounded placeholder-pickled-bluewood-600 text-pickled-bluewood-600 text-sm focus:outline-none focus:ring-2 focus:ring-tree-poppy-500 focus:border-transparent" />
                                <el-button size="large" class="footer__newsletter-button">
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
                    <div class="footer__copyright text-white  text-sm ">
                        © {{ currentYear }} E‑Sunrise Australia. All rights reserved.
                    </div>
                </el-col>
                <el-col :span="24" :lg="12">
                    <div
                        class="footer__legal-links flex flex-col gap-2 pt-2 lg:flex-row lg:flex-wrap lg:gap-4 lg:pt-0 text-sm justify-center ">
                        <router-link to="/privacy-policy"
                            class="footer__legal-link text-white hover:text-monza-50 transition-colors duration-200">Privacy
                            Policy</router-link>
                        <router-link to="/terms-of-service"
                            class="footer__legal-link text-white hover:text-monza-50 transition-colors duration-200">Terms
                            of Service</router-link>
                        <router-link to="/cookie-policy"
                            class="footer__legal-link text-white hover:text-monza-50 transition-colors duration-200">Cookie
                            Policy</router-link>
                        <router-link to="/sitemap"
                            class="footer__legal-link text-white hover:text-monza-50 transition-colors duration-200">Sitemap</router-link>
                    </div>
                </el-col>
            </el-row>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0 !important;
    padding-right: 0 !important;

    .el-footer {
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
}

/* Newsletter button styling */
.footer__newsletter-button {
    background-color: hsl(var(--tree-poppy-500)) !important;
    border-color: hsl(var(--tree-poppy-500)) !important;
    color: white !important;
    font-weight: 500 !important;
    transition: all 0.2s ease-in-out !important;
}

.footer__newsletter-button:hover {
    background-color: hsl(var(--tree-poppy-400)) !important;
    border-color: hsl(var(--tree-poppy-400)) !important;
    color: white !important;
}

.footer__newsletter-button:focus {
    background-color: hsl(var(--tree-poppy-500)) !important;
    border-color: hsl(var(--tree-poppy-500)) !important;
    color: white !important;
    box-shadow: 0 0 0 2px hsl(var(--tree-poppy-400) / 0.3) !important;
}

.footer__newsletter-button:active {
    background-color: hsl(var(--tree-poppy-600)) !important;
    border-color: hsl(var(--tree-poppy-600)) !important;
    color: white !important;
}
</style>