<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
    <div class="bg-white rounded-[20px] p-12 w-full max-w-md relative text-center">
      <button class="absolute w-12 h-12 top-4 right-4 text-gray-400 hover:text-gray-600" @click="$emit('close')">
        <span class="text-2xl">&times;</span>
      </button>
      <h2 class="text-[24px] font-bold mb-6 mt-8">Insufficient Funds</h2>
      <div class="flex justify-center mb-6">
        <div class="bg-[#FDEDED] rounded-full w-24 h-24 flex items-center justify-center">
          <svg width="60" height="60" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#FF5A5A"/><path d="M8 8l8 8M16 8l-8 8" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>
        </div>
      </div>
      <p class="mb-8">You do not have sufficient funds to complete this transaction</p>
      <button class="w-full bg-[#4169E6] text-white py-3 rounded-[8px] font-bold" @click="$emit('close')">View My Savings</button>
    </div>
  </div>
</template>

<script setup>
// Emits close
</script> 