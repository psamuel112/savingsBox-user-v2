<template>
  <div
    class="flex items-center justify-between bg-white rounded-[8px] p-3 shadow-sm cursor-pointer transition hover:shadow-md">
    <div class="flex items-center gap-4">
      <img :src="icon" class="w-8 h-8" :class="logout ? 'filter grayscale-0' : ''" alt="icon" />
      <span class="text-[16px] text-[#6E6E6E]" :class="logout ? 'text-red' : ''">{{ label }}</span>
    </div>
    <div v-if="toggle">
      <button @click.stop="isToggled = !isToggled" class="relative w-10 h-6 focus:outline-none">
        <span :class="['absolute left-0 top-0 w-10 h-6 rounded-full transition', isToggled ? 'bg-[#4169E6]' : 'bg-[#E5E7EB]']"></span>
        <span :class="['absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow transition', isToggled ? 'translate-x-4' : '']"></span>
      </button>
    </div>
    <div v-else>
      <svg v-if="!logout" width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M8 5l4 5-4 5" stroke="#4169E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg v-else width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M8 5l4 5-4 5" stroke="#F04438" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  icon: String,
  label: String,
  toggle: Boolean,
  logout: Boolean
})
const isToggled = ref(false)
</script>

<style scoped>
</style> 