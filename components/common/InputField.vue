<template>
  <div>
    <label v-if="label" class="block text-sm text-[#565656] mb-2">{{ label }}</label>
    <div class="relative">
      <input
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        class="w-full bg-[#ECF0FC33]  px-3 py-2 border border-[#DDDDDD] rounded-[8px]  "
        :class="{ 'pr-10': showPasswordToggle }"
      />
      <button
        v-if="showPasswordToggle" 
        type="button"
        @click="$emit('togglePassword')"
        class="absolute right-3 top-1/2 transform -translate-y-1/2"
      >
        <i class="fas" :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
      </button>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  showPasswordToggle: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  }
})

defineEmits(['update:modelValue', 'togglePassword'])
</script> 