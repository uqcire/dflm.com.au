<script setup>
import { ref } from 'vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'

// Get current year for copyright
const currentYear = ref(new Date().getFullYear())

// Company information
const companyInfo = ref({
    name: 'E-Sunrise Australia',
    email: 'info@dflm.com.au',
    website: 'https://dflm.com.au',
    address: 'Melbourne, Australia'
})

// Last updated date
const lastUpdated = ref('January 2025')
</script>

<template>
    <ComponentSection spacing="sm">
        <ComponentContainer padding="responsive">

            <h1 class="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 pb-4">Terms of Service</h1>
            <p class="text-gray-600">Last updated: {{ lastUpdated }}</p>

        </ComponentContainer>

        <ComponentContainer padding="responsive" style="padding-top: 0px;" class="max-w-3xl mx-auto">

            <!-- Introduction -->
            <div class="prose prose-lg max-w-none mb-8">
                <p class="text-gray-600 leading-relaxed text-lg">
                    Welcome to {{ companyInfo.name }}. These Terms of Service ("Terms") govern your use of our website
                    <a :href="companyInfo.website"
                        class="text-monza-600 hover:text-monza-700 transition-colors duration-200">{{
                            companyInfo.website }}</a>
                    and the services we provide. By accessing or using our website, you agree to be bound by these
                    Terms.
                </p>
            </div>

            <!-- Minimal divider -->
            <hr class="my-8 border-gray-200" />

            <!-- Terms of Service Content - Multiple Paragraphs -->
            <div class="prose max-w-none flex flex-col gap-4">
                <p class="text-gray-600 leading-relaxed mb-4">
                    These Terms of Service constitute a legally binding agreement between you and {{ companyInfo.name
                    }}.
                    If you do not agree to these Terms, please do not use our website or services.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    We reserve the right to modify these Terms at any time. We will notify users of any material changes
                    by posting the updated Terms on our website and updating the "Last Updated" date.
                    Your continued use of our website after such modifications constitutes acceptance of the updated
                    Terms.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    Our website and services are intended for use by individuals and businesses seeking information
                    about
                    our agricultural products and services. You must be at least 18 years old to use our services,
                    or have the consent of a parent or legal guardian if you are under 18.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    You agree to use our website and services only for lawful purposes and in accordance with these
                    Terms.
                    You may not use our website in any way that could damage, disable, overburden, or impair our servers
                    or networks, or interfere with any other party's use of our website.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    You are prohibited from using our website to transmit, distribute, store, or destroy material that
                    is illegal, harmful, threatening, abusive, defamatory, vulgar, obscene, or otherwise objectionable.
                    You may not use our website to impersonate any person or entity or to misrepresent your affiliation
                    with any person or entity.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    All content on our website, including text, graphics, logos, images, and software, is the property
                    of {{ companyInfo.name }} or its content suppliers and is protected by copyright and other
                    intellectual
                    property laws. You may not reproduce, distribute, modify, or create derivative works from our
                    content
                    without our express written permission.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    Our website may contain links to third-party websites that are not owned or controlled by
                    {{ companyInfo.name }}. We have no control over and assume no responsibility for the content,
                    privacy policies, or practices of any third-party websites. You acknowledge and agree that
                    {{ companyInfo.name }} shall not be responsible for any damage or loss caused by your use of
                    any third-party website.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    The information provided on our website is for general informational purposes only. While we strive
                    to provide accurate and up-to-date information, we make no warranties or representations about the
                    completeness, accuracy, reliability, or suitability of the information for any particular purpose.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    Our services are provided on an "as is" and "as available" basis. We disclaim all warranties,
                    express or implied, including but not limited to warranties of merchantability, fitness for a
                    particular purpose, and non-infringement. We do not warrant that our website will be uninterrupted,
                    secure, or error-free.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    In no event shall {{ companyInfo.name }} be liable for any direct, indirect, incidental, special,
                    consequential, or punitive damages, including but not limited to loss of profits, data, or use,
                    arising out of or relating to your use of our website or services, even if we have been advised
                    of the possibility of such damages.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    You agree to indemnify and hold harmless {{ companyInfo.name }}, its officers, directors, employees,
                    and agents from any claims, damages, losses, or expenses (including reasonable attorneys' fees)
                    arising out of or relating to your use of our website, violation of these Terms, or violation of
                    any rights of another party.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    We reserve the right to terminate or suspend your access to our website immediately, without prior
                    notice or liability, for any reason whatsoever, including without limitation if you breach these
                    Terms.
                    Upon termination, your right to use our website will cease immediately.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    These Terms shall be governed by and construed in accordance with the laws of Australia, without
                    regard to its conflict of law provisions. Any disputes arising out of or relating to these Terms
                    shall be subject to the exclusive jurisdiction of the courts of Australia.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions
                    shall remain in full force and effect. Our failure to enforce any right or provision of these Terms
                    will not be considered a waiver of those rights.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    These Terms constitute the entire agreement between you and {{ companyInfo.name }} regarding the use
                    of our website and services, and supersede all prior and contemporaneous agreements,
                    representations,
                    and understandings.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us at
                    <a :href="`mailto:${companyInfo.email}`" class="text-monza-600 hover:text-monza-700">{{
                        companyInfo.email }}</a>.
                    {{ companyInfo.name }} is located at {{ companyInfo.address }}. You can also visit our website at
                    <a :href="companyInfo.website" class="text-monza-600 hover:text-monza-700">{{
                        companyInfo.website }}</a> for more information.
                </p>
            </div>

            <!-- Footer Note -->
            <div class="text-left text-gray-500 text-sm mt-8 pt-6 border-t border-gray-200">
                <p>
                    These Terms of Service are effective as of {{ lastUpdated }}.
                </p>
            </div>

        </ComponentContainer>
    </ComponentSection>
</template>
