<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
    <div class="bg-white rounded-[20px] p-12 w-full max-w-md relative text-center">
      <button class="absolute w-12 h-12 top-4 right-4 text-gray-400 hover:text-gray-600" @click="$emit('close')">
        <span class="text-2xl">&times;</span>
      </button>
      <h2 class="text-[24px] font-bold mb-2 mt-8">Withdrawal Denied</h2>
      <p class="text-[#565656] mb-2">You are currently not eligible to make withdrawals. Kindly verify your BVN and KYC to proceed.</p>
      <p class="text-[#FF0000] mb-6">Verify the details below the to proceed</p>
      <div class="text-left mb-6">
        <div class="flex justify-between items-center mb-2"><span>KYC Verification</span><span><svg width="20" height="20" fill="none" stroke="#4169E6"><circle cx="10" cy="10" r="8" stroke-width="2"/><path d="M10 6v4l2 2" stroke-width="2"/></svg></span></div>
        <div class="flex justify-between items-center mb-2"><span>BVN Verification</span><a href="#" class="text-[#4169E6]">Verify Now</a></div>
        <div class="flex justify-between items-center mb-2"><span>Update Bank Details</span><a href="#" class="text-[#4169E6]">Verify Now</a></div>
      </div>
      <button class="w-full bg-[#C4C4C4] text-[#565656] py-3 rounded-[8px] font-bold" disabled>Proceed</button>
    </div>
  </div>
</template>

<script setup>
// Emits close
</script> 