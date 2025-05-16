<template>
  <div class="flex items-center bg-white rounded-[16px] p-6 shadow-sm min-h-[120px]">
    <div class="bg-[#F5F7FA] rounded-[12px] flex items-center justify-center w-[80px] h-[80px] mr-6">
      <img :src="icon" class="w-14 h-14 object-contain" alt="icon" />
    </div>
    <div class="flex-1">
      <div class="font-semibold text-[#232323] text-[18px] mb-1">{{ title }}</div>
      <div class="text-[#939393] text-[15px] mb-2">{{ desc }}</div>
      <div class="text-[13px]">
        ROI <span class="text-[#3CB371] font-semibold">{{ roi }}</span>
        <span class="text-[#939393] ml-2">Per Annum</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  desc: String,
  roi: String
})
</script>

<style scoped>
</style> 