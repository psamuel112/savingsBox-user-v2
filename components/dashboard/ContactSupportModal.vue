<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
    <div class="bg-white rounded-[20px] p-12 w-full max-w-md relative text-center">
      <button class="absolute w-12 h-12 top-4 right-4 text-gray-400 hover:text-gray-600" @click="$emit('close')">
        <span class="text-2xl">&times;</span>
      </button>
      <div class="flex justify-center mb-6 mt-8">
        <div class="bg-[#F5F7FB] rounded-full w-20 h-20 flex items-center justify-center">
          <svg width="48" height="48" fill="none" stroke="#4169E6"><circle cx="24" cy="24" r="22" stroke-width="4"/><path d="M16 32v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" stroke-width="4"/><rect x="16" y="16" width="16" height="8" rx="4" stroke-width="4"/></svg>
        </div>
      </div>
      <h2 class="text-[24px] font-bold mb-2">Contact Support</h2>
      <p class="text-[#565656] mb-6">To update your bank account, contact support via <a href="mailto:support@savingsbox.ng" class="text-[#4169E6] underline">support@savingsbox.ng</a></p>
      <button class="w-full bg-[#4169E6] text-white py-3 rounded-[8px] font-bold mb-3">Contact Support</button>
      <button class="w-full text-[#FF0000] py-3 rounded-[8px] font-bold" @click="$emit('close')">Cancel</button>
    </div>
  </div>
</template>

<script setup>
// Emits close
</script> 