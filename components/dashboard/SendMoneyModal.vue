<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
    <div class="bg-white rounded-[20px] p-12 w-full max-w-md relative">
      <button class="absolute w-12 h-12 top-4 right-4 text-gray-400 hover:text-gray-600" @click="$emit('close')">
        <span class="text-2xl">&times;</span>
      </button>
      <button class="absolute w-12 h-12 top-4 left-4 text-gray-400 hover:text-gray-600" @click="$emit('close')">
        <span class="text-2xl">&#8592;</span>
      </button>
      <h2 class="text-[24px] mt-8 font-bold text-center mb-8">Send Money</h2>
      <form @submit.prevent="$emit('verify')">
        <label class="block text-[#565656] mb-2">Recipient Wallet ID</label>
        <input type="text" class="w-full border border-[#C4C4C4] rounded-[8px] p-3 mb-8" placeholder="Enter Wallet ID" />
        <button type="submit" class="w-full bg-[#C4C4C4] text-[#565656] py-3 rounded-[8px] font-bold">Verify</button>
      </form>
    </div>
  </div>
</template>

<script setup>
// Emits close, verify
</script> 