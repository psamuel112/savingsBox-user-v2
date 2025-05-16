<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
    <div class="bg-white rounded-[20px] p-12 w-full max-w-md relative text-center">
      <button class="absolute w-12 h-12 top-4 right-4 text-gray-400 hover:text-gray-600" @click="$emit('close')">
        <span class="text-2xl">&times;</span>
      </button>
      <h2 class="text-[24px] font-bold mb-6 mt-8">Fund sent successfully</h2>
      <div class="flex justify-center mb-4">
        <div class="  items-center justify-center">
         <img class=" w-[187px]" src="../../assets/images/gif/success.gif" />
        </div>
      </div>
      <p class="mb-6">You have successfully sent the sum of NGN20,000 to @johndoe</p>
      <button class="w-full bg-[#4169E6] text-white py-3 rounded-[8px] font-bold" @click="$emit('view-transaction')">View Transaction Details</button>
    </div>
  </div>
</template>

<script setup>
// Emits close, view-transaction
</script> 