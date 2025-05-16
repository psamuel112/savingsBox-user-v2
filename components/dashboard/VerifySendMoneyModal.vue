<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
    <div class="bg-white rounded-[20px] p-12 w-full max-w-md relative">
      <button class="absolute w-12 h-12 top-4 right-4 text-gray-400 hover:text-gray-600" @click="$emit('close')">
        <span class="text-2xl">&times;</span>
      </button>
      <button class="absolute w-12 h-12 top-4 left-4 text-gray-400 hover:text-gray-600" @click="$emit('close')">
        <span class="text-2xl">&#8592;</span>
      </button>
      <h2 class="text-[24px] font-bold text-center mt-8 mb-8">Send Money</h2>
      <div class="flex items-center bg-[#F5F5F5] rounded-[20px] p-2 mb-6">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" class="w-10 h-10 rounded-full mr-3" />
        <div class="flex-1">
          <div><p class="text-[#565656] text-[11px]">@johndoe</p></div>
          <div class="text-[#232323] text-sm font-bold">John Doe Micheal</div>
        </div>
        <button class="text-[#4169E6] font-bold text-sm ml-2">Change</button>
      </div>
      <form @submit.prevent="$emit('send-success')">
        <label class="block text-sm text-[#565656] mb-2">Amount</label>
        <div class="flex items-center border border-[#C4C4C4] rounded-[8px] px-3 py-2 mb-2" :class="{'border-red-500': true}">
          <input type="text" class="flex-1 outline-none bg-transparent" value="90,000" />
          <span class="ml-2 text-[#565656] font-bold">₦</span>
        </div>
        <div class="flex items-center text-[#565656] text-[11px] mb-8">
          <span class="mr-2"><svg width="18" height="18" fill="none" stroke="currentColor"><circle cx="9" cy="9" r="8" stroke-width="2"/><path d="M9 5v4l2 2" stroke-width="2"/></svg></span>
          You do not have sufficient funds in your wallet to process this transaction. Kindly fund your wallet.
        </div>
        <button type="submit" class="w-full bg-[#4169E6] text-white py-3 rounded-[8px] font-bold mb-4">Send Money</button>
        <button type="button" class="w-full border border-[#4169E6] text-[#4169E6] py-3 bg-[#ECF0FC] rounded-[8px] font-bold" @click="$emit('fund-wallet')">Fund Wallet</button>
      </form>
    </div>
  </div>
</template>

<script setup>
// Emits close, fund-wallet, send-success
</script> 