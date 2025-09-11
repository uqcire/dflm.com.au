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
    <!-- Page Header (minimal) -->
    <ComponentSection spacing="sm">
        <ComponentContainer padding="responsive">

            <h1 class="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 pb-4">Privacy Policy</h1>
            <p class="text-gray-600">Last updated: {{ lastUpdated }}</p>

        </ComponentContainer>

        <ComponentContainer padding="responsive" style="padding-top: 0px;" class="max-w-3xl mx-auto">

            <!-- Introduction -->
            <div class="prose prose-lg max-w-none mb-8">
                <p class="text-gray-600 leading-relaxed text-lg">
                    At {{ companyInfo.name }}, we are committed to protecting your privacy and ensuring the security
                    of your personal information.
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                    you visit our website
                    <a :href="companyInfo.website"
                        class="text-monza-600 hover:text-monza-700 transition-colors duration-200">{{
                            companyInfo.website }}</a>
                    or use our services.
                </p>
            </div>

            <!-- Minimal divider -->
            <hr class="my-8 border-gray-200" />

            <!-- Privacy Policy Content - Multiple Paragraphs -->
            <div class="prose max-w-none flex flex-col gap-4">
                <p class="text-gray-600 leading-relaxed mb-4">
                    At {{ companyInfo.name }}, we are committed to protecting your privacy and ensuring the security
                    of your personal information.
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                    you visit our website
                    <a :href="companyInfo.website" class="text-monza-600 hover:text-monza-700">{{
                        companyInfo.website }}</a>
                    or use our services.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    We may collect personal information that you voluntarily provide to us when you contact us
                    through our website forms,
                    subscribe to our newsletter, request information about our products or services, participate in
                    surveys or promotions,
                    or create an account on our website.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    When you visit our website, we may automatically collect certain information,
                    including your IP address and location data, browser type and version, operating system, pages
                    visited and time spent on our site,
                    referring website information, and device information.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    We use the information we collect for various purposes, including providing and improving our
                    products and services,
                    responding to your inquiries and requests, sending you marketing communications (with your
                    consent), analyzing website usage and trends,
                    preventing fraud and ensuring security, complying with legal obligations, and personalizing your
                    experience on our website.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your
                    information with your explicit consent,
                    with service providers who assist us in operating our website and business, when required by law
                    or to protect our rights,
                    in connection with a business transfer or merger, or to prevent fraud or illegal activities.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    We implement appropriate technical and organizational measures to protect your personal
                    information against unauthorized access,
                    alteration, disclosure, or destruction. These measures include SSL encryption for data
                    transmission, secure servers and databases,
                    regular security assessments, access controls and authentication, and employee training on data
                    protection.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to enhance your experience on our website.
                    Cookies are small text files
                    that are stored on your device when you visit our website.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    We use essential cookies necessary for the website to function properly,
                    analytics cookies to help us understand how visitors use our website, marketing cookies to
                    deliver relevant advertisements,
                    and preference cookies to remember your settings and preferences. You can control cookies
                    through your browser settings.
                    However, disabling certain cookies may affect the functionality of our website.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    Depending on your location, you may have the following rights regarding your personal
                    information: access to your personal information,
                    correction of inaccurate information, deletion of your personal information, transfer of your
                    data to another service,
                    objection to processing of your personal information, and restriction of processing.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    To exercise these rights, please contact us using the information provided below.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    We retain your personal information only for as long as necessary to fulfill the purposes
                    outlined in this Privacy Policy,
                    unless a longer retention period is required or permitted by law. When we no longer need your
                    information, we will securely
                    delete or anonymize it.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    Your personal information may be transferred to and processed in countries other than your
                    country of residence.
                    We ensure that such transfers comply with applicable data protection laws and implement
                    appropriate safeguards to protect your information.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    Our website is not intended for children under the age of 13. We do not knowingly collect
                    personal information from children under 13.
                    If we become aware that we have collected personal information from a child under 13, we will
                    take steps to delete such information promptly.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or
                    applicable laws.
                    We will notify you of any material changes by posting the updated policy on our website and
                    updating the "Last Updated" date.
                    We encourage you to review this policy periodically.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us at
                    <a :href="`mailto:${companyInfo.email}`" class="text-monza-600 hover:text-monza-700">{{
                        companyInfo.email }}</a>.
                    {{ companyInfo.name }} is located at {{ companyInfo.address }}. You can also visit our website
                    at
                    <a :href="companyInfo.website" class="text-monza-600 hover:text-monza-700">{{
                        companyInfo.website }}</a> for more information.
                </p>
            </div>

            <!-- Footer Note -->
            <div class="text-left text-gray-500 text-sm mt-8 pt-6 border-t border-gray-200">
                <p>
                    This Privacy Policy is effective as of {{ lastUpdated }}.
                </p>
            </div>

        </ComponentContainer>
    </ComponentSection>
</template>
