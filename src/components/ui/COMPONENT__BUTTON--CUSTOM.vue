<template>
    <button :type="type" :disabled="disabled || loading" :class="buttonClasses" @click="handleClick">
        <div v-if="loading" class="mr-2">
            <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg>
        </div>
        <slot />
    </button>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
    type: {
        type: String,
        default: 'button',
        validator: (value) => ['button', 'submit', 'reset'].includes(value)
    },
    variant: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'danger'].includes(value)
    },
    size: {
        type: String,
        default: 'md',
        validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    },
    fullWidth: {
        type: Boolean,
        default: false
    }
})

// Emits
const emit = defineEmits(['click'])

// Computed classes
const buttonClasses = computed(() => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105'

    const sizeClasses = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base'
    }

    const variantClasses = {
        primary: 'bg-pickled-bluewood-700 text-white border-2 border-pickled-bluewood-700 hover:bg-pickled-bluewood-800 hover:border-pickled-bluewood-800',
        secondary: 'bg-tree-poppy-500 text-white border-2 border-tree-poppy-500 hover:bg-tree-poppy-600 hover:border-tree-poppy-600',
        outline: 'bg-transparent text-pickled-bluewood-700 border-2 border-pickled-bluewood-700 hover:bg-pickled-bluewood-50',
        ghost: 'bg-transparent text-pickled-bluewood-700 border-2 border-transparent hover:border-pickled-bluewood-700 hover:bg-pickled-bluewood-50',
        danger: 'bg-monza-600 text-white border-2 border-monza-600 hover:bg-monza-700 hover:border-monza-700'
    }

    const widthClasses = props.fullWidth ? 'w-full' : ''
    const disabledClasses = (props.disabled || props.loading) ? 'opacity-50 cursor-not-allowed transform-none hover:scale-100' : ''

    return [
        baseClasses,
        sizeClasses[props.size],
        variantClasses[props.variant],
        widthClasses,
        disabledClasses
    ].filter(Boolean).join(' ')
})

// Click handler
const handleClick = (event) => {
    if (!props.disabled && !props.loading) {
        emit('click', event)
    }
}
</script>

<style scoped>
@reference "tailwindcss";

/* Custom focus styles */
button:focus {
    @apply outline-none ring-2 ring-[hsl(var(--pickled-bluewood-500))] ring-offset-2;
}

/* Disabled state */
button:disabled {
    @apply cursor-not-allowed;
}
</style>