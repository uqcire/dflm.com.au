<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElButton, ElMessage } from 'element-plus'
import CustomButton from '@/components/ui/COMPONENT__BUTTON--CUSTOM.vue'

const router = useRouter()

const formRef = ref()
const loading = ref(false)

const formData = reactive({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: ''
})

const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'product', label: 'Product Information' },
    { value: 'business', label: 'Business Partnership' },
    { value: 'quote', label: 'Request Quote' },
    { value: 'support', label: 'Technical Support' }
]

const rules = {
    name: [
        { required: true, message: 'Please enter your name', trigger: 'blur' },
        { min: 2, max: 50, message: 'Name must be between 2 and 50 characters', trigger: 'blur' }
    ],
    email: [
        { required: true, message: 'Please enter your email address', trigger: 'blur' },
        { type: 'email', message: 'Please enter a valid email address', trigger: 'blur' }
    ],
    company: [
        { required: true, message: 'Please enter your company name', trigger: 'blur' }
    ],
    phone: [
        // Phone is optional, no validation required
    ],
    subject: [
        { required: true, message: 'Please enter a subject', trigger: 'blur' }
    ],
    message: [
        { required: true, message: 'Please enter your message', trigger: 'blur' },
        { min: 10, max: 1000, message: 'Message must be between 10 and 1000 characters', trigger: 'blur' }
    ],
    inquiryType: [
        { required: true, message: 'Please select an inquiry type', trigger: 'change' }
    ]
}

const handleSubmit = async () => {
    if (!formRef.value) {
        return
    }

    try {
        await formRef.value.validate()
        loading.value = true

        // Send to Vercel API function
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })

        if (!response.ok) {
            throw new Error('Failed to send message')
        }

        // Redirect to success page
        router.push('/contact/success')

    } catch (error) {
        console.error('Contact form error:', error)
        ElMessage.error('Failed to send message. Please try again.')
    } finally {
        loading.value = false
    }
}

const handleReset = () => {
    formRef.value?.resetFields()
}
</script>

<template>

    <div class="contact-form">
        <el-form ref="formRef" :model="formData" :rules="rules" label-position="top" class="max-w-2xl mx-auto"
            @submit.prevent>
            <!-- Personal Information -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <el-form-item label="Full Name" prop="name">
                    <el-input v-model="formData.name" placeholder="Enter your full name *" size="large" />
                </el-form-item>

                <el-form-item label="Email Address" prop="email">
                    <el-input v-model="formData.email" type="email" placeholder="Enter your email address *"
                        size="large" />
                </el-form-item>
            </div>

            <!-- Company Information -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <el-form-item label="Company Name" prop="company">
                    <el-input v-model="formData.company" placeholder="Enter your company name *" size="large" />
                </el-form-item>

                <el-form-item label="Phone Number" prop="phone">
                    <el-input v-model="formData.phone" placeholder="Enter your phone number (optional)" size="large" />
                </el-form-item>
            </div>

            <!-- Inquiry Details -->
            <div class="mb-6 w-full">
                <el-form-item label="Inquiry Type" prop="inquiryType" class="w-full">
                    <select v-model="formData.inquiryType"
                        class="w-full px-4 py-3 rounded-lg transition-all duration-200 text-base"
                        :class="{ 'border-[hsl(var(--monza-500))]': formData.inquiryType === '' && formData.inquiryType !== undefined }">
                        <option value="" disabled>Select inquiry type *</option>
                        <option v-for="type in inquiryTypes" :key="type.value" :value="type.value" class="py-2">
                            {{ type.label }}
                        </option>
                    </select>
                </el-form-item>
            </div>

            <div class="mb-6">
                <el-form-item label="Subject" prop="subject">
                    <el-input v-model="formData.subject" placeholder="Enter subject of your inquiry *" size="large" />
                </el-form-item>
            </div>

            <div class="mb-8">
                <el-form-item label="Message" prop="message">
                    <el-input v-model="formData.message" type="textarea" :rows="6"
                        placeholder="Please provide details about your inquiry *" size="large" />
                </el-form-item>
            </div>

            <!-- Form Actions -->
            <div class="flex flex-col sm:flex-row gap-4 justify-end">
                <CustomButton type="button" variant="primary" size="lg" @click="handleSubmit" :loading="loading"
                    :full-width="false" class="w-full sm:w-auto">
                    {{ loading ? 'Sending...' : 'Send Message' }}
                </CustomButton>
            </div>
        </el-form>
    </div>
</template>

<style scoped>
@reference "tailwindcss";

.contact-form {
    @apply bg-white rounded-lg shadow-lg p-8;
}

/* Form Item Labels */
:deep(.el-form-item__label) {
    @apply font-semibold text-[hsl(var(--pickled-bluewood-700))] mb-2;
}

/* Form Items */
:deep(.el-form-item) {
    @apply w-full mb-6;
}

:deep(.el-form-item__content) {
    @apply w-full;
}

/* Form Container */
:deep(.el-form) {
    @apply w-full;
}

/* Input Fields */
:deep(.el-input) {
    @apply w-full mt-2;
}

:deep(.el-input__wrapper) {
    @apply w-full min-w-0 border border-[hsl(var(--pickled-bluewood-500))] rounded-lg h-12 px-4 py-3;
    @apply transition-all duration-200;
}

:deep(.el-input__inner) {
    @apply w-full min-w-0 h-full text-base;
    @apply focus:outline-none;
}

/* Textarea */
:deep(.el-textarea__inner) {
    @apply w-full min-w-0 border border-[hsl(var(--pickled-bluewood-500))] rounded-lg mt-2 px-4 py-4;
    @apply transition-all duration-200;
    @apply min-h-30 text-base resize-y;
}

/* Select Dropdown - Using native HTML select instead of Element Plus */
select {
    @apply w-full px-4 py-3 border border-[hsl(var(--pickled-bluewood-500))] rounded-lg h-12 text-base bg-white;
    @apply hover:border-[hsl(var(--pickled-bluewood-400))] transition-all duration-200;
}

/* Select options styling */
select option {
    @apply py-4 px-2 text-base text-[hsl(var(--pickled-bluewood-700))];
    @apply hover:bg-[hsl(var(--pickled-bluewood-100))] transition-all duration-200;
}

select option:disabled {
    @apply text-gray-400;
}

/* Error Messages */
:deep(.el-form-item.is-error .el-form-item__error) {
    @apply text-sm font-medium text-[hsl(var(--monza-500))] mt-2;
}

/* Hover States */
:deep(.el-input__wrapper:hover),
:deep(.el-textarea__inner:hover) {
    @apply border-[hsl(var(--pickled-bluewood-400))];
}
</style>