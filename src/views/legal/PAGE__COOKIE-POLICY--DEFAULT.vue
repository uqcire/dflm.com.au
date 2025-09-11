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

            <h1 class="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 pb-4">Cookie Policy</h1>
            <p class="text-gray-600">Last updated: {{ lastUpdated }}</p>

        </ComponentContainer>

        <ComponentContainer padding="responsive" style="padding-top: 0px;" class="max-w-3xl mx-auto">

            <!-- Introduction -->
            <div class="prose prose-lg max-w-none mb-8">
                <p class="text-gray-600 leading-relaxed text-lg">
                    This Cookie Policy explains how {{ companyInfo.name }} uses cookies and similar technologies when
                    you visit our website
                    <a :href="companyInfo.website"
                        class="text-monza-600 hover:text-monza-700 transition-colors duration-200">{{
                            companyInfo.website }}</a>.
                    This policy explains what these technologies are and why we use them, as well as your rights to
                    control our use of them.
                </p>
            </div>

            <!-- Minimal divider -->
            <hr class="my-8 border-gray-200" />

            <!-- Cookie Policy Content - Multiple Paragraphs -->
            <div class="prose max-w-none flex flex-col gap-4">
                <p class="text-gray-600 leading-relaxed mb-4">
                    Cookies are small text files that are placed on your computer or mobile device when you visit a
                    website.
                    They are widely used by website owners to make their websites work, or to work more efficiently,
                    as well as to provide reporting information.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    Cookies set by the website owner (in this case, {{ companyInfo.name }}) are called "first-party
                    cookies."
                    Cookies set by parties other than the website owner are called "third-party cookies."
                    Third-party cookies enable third-party features or functionality to be provided on or through the
                    website.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    We use both session cookies and persistent cookies on our website. Session cookies are temporary
                    cookies
                    that expire when you close your browser or leave our website. Persistent cookies remain on your
                    device
                    for a set period of time or until you delete them.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    Essential cookies are necessary for the website to function and cannot be switched off in our
                    systems.
                    They are usually only set in response to actions made by you which amount to a request for services,
                    such as setting your privacy preferences, logging in, or filling in forms.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    Analytics cookies help us understand how visitors interact with our website by collecting and
                    reporting
                    information anonymously. These cookies allow us to count visits and traffic sources so we can
                    measure
                    and improve the performance of our site.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    Marketing cookies are used to track visitors across websites. The intention is to display ads that
                    are
                    relevant and engaging for the individual user and thereby more valuable for publishers and
                    third-party advertisers.
                    These cookies may be set through our site by our advertising partners.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    Preference cookies enable our website to remember information that changes the way the website
                    behaves
                    or looks, such as your preferred language or the region that you are in. These cookies may also be
                    used to remember changes you have made to text size, fonts, and other customizable parts of web
                    pages.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    We may use third-party services such as Google Analytics to help us analyze how users use our
                    website.
                    These services may use cookies to collect information about your use of our website and other
                    websites.
                    You can learn more about how Google uses data when you use our website by visiting Google's Privacy
                    Policy.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    You have the right to decide whether to accept or reject cookies. You can exercise your cookie
                    rights
                    by setting your preferences in the Cookie Settings or by using your browser settings to refuse
                    cookies.
                    However, if you choose to reject cookies, you may still use our website though your access to some
                    functionality and areas of our website may be restricted.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    Most web browsers allow some control of most cookies through the browser settings. To find out more
                    about cookies, including how to see what cookies have been set and how to manage and delete them,
                    visit www.aboutcookies.org or www.allaboutcookies.org.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    If you are using a mobile device, you can also control cookies through your device settings.
                    Please refer to your device's user manual for specific instructions on how to manage cookies
                    on your particular device.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other
                    operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
                    updated policy on our website and updating the "Last Updated" date.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    We may also use other tracking technologies such as web beacons, pixel tags, and local storage
                    objects. These technologies work similarly to cookies and allow us to analyze user behavior and
                    improve our website's functionality.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    Some of our pages may contain content from third-party websites, such as embedded videos or social
                    media feeds. These third parties may set their own cookies and tracking technologies. We do not
                    control these third-party cookies and recommend that you review the privacy policies of these
                    third-party websites.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    We take your privacy seriously and are committed to protecting your personal information. Our use
                    of cookies is designed to enhance your experience on our website while respecting your privacy
                    rights.
                    We do not use cookies to collect personally identifiable information without your consent.
                </p>

                <p class="text-gray-600 leading-relaxed mb-4">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us at
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
                    This Cookie Policy is effective as of {{ lastUpdated }}.
                </p>
            </div>

        </ComponentContainer>
    </ComponentSection>
</template>
