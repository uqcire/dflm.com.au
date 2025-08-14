<script setup>
defineProps({
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: Object,
        required: true,
        validator: (value) => {
            return typeof value.line1 === 'string' &&
                typeof value.city === 'string' &&
                typeof value.region === 'string' &&
                typeof value.country === 'string' &&
                typeof value.postcode === 'string'
        }
    },
    showTitle: {
        type: Boolean,
        default: true
    },
    title: {
        type: String,
        default: 'Contact Us'
    }
})
</script>

<template>
    <div class="contact-info bg-white rounded-lg shadow-md p-6">
        <h2 v-if="showTitle" class="text-2xl font-bold text-gray-900 mb-6">{{ title }}</h2>

        <div class="space-y-4">
            <!-- Email -->
            <div class="flex items-start">
                <div class="flex-shrink-0">
                    <svg class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <div class="ml-3">
                    <h3 class="text-sm font-medium text-gray-900">Email</h3>
                    <div class="mt-1">
                        <a :href="`mailto:${email}`" data-umami-event="contact_mailto"
                            class="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                            {{ email }}
                        </a>
                    </div>
                </div>
            </div>

            <!-- Phone -->
            <div class="flex items-start">
                <div class="flex-shrink-0">
                    <svg class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </div>
                <div class="ml-3">
                    <h3 class="text-sm font-medium text-gray-900">Phone</h3>
                    <div class="mt-1">
                        <a :href="`tel:${phone}`"
                            class="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                            {{ phone }}
                        </a>
                    </div>
                </div>
            </div>

            <!-- Address -->
            <div class="flex items-start">
                <div class="flex-shrink-0">
                    <svg class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <div class="ml-3">
                    <h3 class="text-sm font-medium text-gray-900">Address</h3>
                    <div class="mt-1 text-gray-600">
                        <p>{{ address.line1 }}</p>
                        <p>{{ address.city }}, {{ address.region }} {{ address.postcode }}</p>
                        <p>{{ address.country }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>