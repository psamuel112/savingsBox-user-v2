<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
    <div class="bg-white rounded-[20px] p-12 w-full max-w-md relative text-center">
      <button class="absolute w-12 h-12 top-4 right-4 text-gray-400 hover:text-gray-600" @click="$emit('close')">
        <span class="text-2xl">&times;</span>
      </button>
      <div class="flex mt-6 justify-center">
      <img class="w-[131px]  mb-8" src="../../assets/images/png/blue-logo.png" />
      </div> 
      <div class="text-[#4169E6] text-sm font-bold mb-4">Withdrawal</div>
      <div class="text-[20px] text-[#000831] font-bold mb-6">₦ 340,598,980</div>
      <div class="text-left space-y-6 mb-6">
        <div class=" "><p class="flex justify-between text-sm"><span class="text-[#6E6E6E]">Status</span><span class="font-semibold text">Success</span></p></div>
        <div class=" "><p class="flex justify-between text-sm"><span class="text-[#6E6E6E]">Medium</span><span class="font-semibold text">Box Wallet</span></p></div>
        <div class=" "><p class="flex justify-between text-sm"><span class="text-[#6E6E6E]">Wallet ID</span><span class="font-semibold text">@johndoe</span></p></div>
        <div class=" "><p class="flex justify-between text-sm"><span class="text-[#6E6E6E]">Beneficiary Name</span><span class="font-semibold text">John Doe</span></p></div>
        <div class=" "><p class="flex justify-between text-sm"><span class="text-[#6E6E6E]">Beneficiary ID</span><span class="font-semibold text">@***ndoe</span></p></div>
        <div class=" "><p class="flex justify-between text-sm"><span class="text-[#6E6E6E]">Session ID</span><span class="font-semibold text">32525363748569595959569</span></p></div>
        <div class=""><p class="flex justify-between text-sm"><span class="text-[#6E6E6E]">Completion Time</span><span class="font-semibold text">17:02 Mar 16, 2025</span></p></div>
        <div class=" "><p class="flex justify-between text-sm"><span class="text-[#6E6E6E]">Transaction No</span><span class="font-semibold text">121332464657</span></p></div>
        <div class=" "><p class="flex justify-between text-sm"><span class="text-[#6E6E6E]">Category</span><span class="font-semibold text">Wallet Transfer</span></p></div>
      </div>
      <div class="text-[#4169E6] mb-4 text-sm font-BlogCard cursor-pointer">Report Transaction</div>
      <div class="flex gap-4">
        <button class="flex-1 bg-[#4169E6] text-white py-3 rounded-[8px] text-sm font-bold">Share Receipt</button>
        <button class="flex-1 border border-[#4169E6] bg-[#ECF0FC] text-[#4169E6] py-3 rounded-[8px] text-sm font-bold" @click="$emit('close')">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Emits close
</script> 