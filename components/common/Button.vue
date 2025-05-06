<template>
  <button
    :type="type"
    :class="[
      'w-full py-3 rounded-[8px] font-bold transition-colors',
      variant === 'primary' ? 'bg-[#4169E6] text-[14px] md:text-[16px] text-white hover:bg-[#1D4ED8]' : '',
      variant === 'secondary' ? 'bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB]' : '',
      variant === 'outline' ? 'border border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF]' : '',
      fullWidth ? 'w-full' : '',
      className
    ]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
  },
  fullWidth: {
    type: Boolean,
    default: true
  },
  className: {
    type: String,
    default: ''
  }
})

defineEmits(['click'])
</script> 