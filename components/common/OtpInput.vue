<template>
  <div class="flex justify-center gap-2">
    <input
      v-for="(digit, idx) in digits"
      :key="idx"
      maxlength="1"
      type="text"
      inputmode="numeric"
      pattern="[0-9]*"
      class="w-12 h-12 text-center text-2xl border border-[#DDDDDD] rounded-[8px] bg-[#F5F7FB] focus:outline-none focus:border-[#4169E6]"
      v-model="digits[idx]"
      @input="onInput(idx, $event)"
      @keydown.backspace="onBackspace(idx, $event)"
      @paste="onPaste(idx, $event)"
      :ref="el => setRef(idx, el)"
    />
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  length: {
    type: Number,
    default: 6
  }
})
const emit = defineEmits(['update:modelValue'])

const digits = ref(Array.from({ length: props.length }, (_, i) => props.modelValue[i] || ''))
const inputRefs = ref([])

const setRef = (idx, el) => {
  if (el) inputRefs.value[idx] = el
}

watch(
  () => props.modelValue,
  (val) => {
    for (let i = 0; i < props.length; i++) {
      digits.value[i] = val[i] || ''
    }
  }
)

watch(digits, (val) => {
  emit('update:modelValue', val.join(''))
})

const onInput = (idx, e) => {
  let value = e.target.value.replace(/[^0-9]/g, '')
  if (value.length > 1) {
    // If user pastes or types multiple digits, fill in all
    for (let i = 0; i < value.length && idx + i < props.length; i++) {
      digits.value[idx + i] = value[i]
    }
    nextTick(() => {
      const nextIdx = Math.min(idx + value.length, props.length - 1)
      inputRefs.value[nextIdx]?.focus()
    })
  } else {
    digits.value[idx] = value
    if (value && idx < props.length - 1) {
      nextTick(() => inputRefs.value[idx + 1]?.focus())
    }
  }
}

const onBackspace = (idx, e) => {
  if (!digits.value[idx] && idx > 0) {
    nextTick(() => inputRefs.value[idx - 1]?.focus())
  }
}

const onPaste = (idx, e) => {
  const paste = (e.clipboardData || window.clipboardData).getData('text')
  if (/^\d+$/.test(paste)) {
    e.preventDefault()
    for (let i = 0; i < paste.length && idx + i < props.length; i++) {
      digits.value[idx + i] = paste[i]
    }
    nextTick(() => {
      const nextIdx = Math.min(idx + paste.length, props.length - 1)
      inputRefs.value[nextIdx]?.focus()
    })
  }
}
</script> 