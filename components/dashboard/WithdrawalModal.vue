<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
    <div class="bg-white rounded-[20px] p-12 w-full max-w-md relative">
      <button class="absolute w-12 h-12 top-4 right-4 text-gray-400 hover:text-gray-600" @click="$emit('close')">
        <span class="text-2xl">&times;</span>
      </button>
      <button class="absolute w-12 h-12 top-4 left-4 text-gray-400 hover:text-gray-600" @click="$emit('close')">
        <span class="text-2xl">&#8592;</span>
      </button>
      <h2 class="text-[24px] font-bold text-center mb-8">Withdrawal</h2>
      <form @submit.prevent="$emit('withdraw')">
        <label class="block text-[#565656] mb-2">Amount</label>
        <div class="flex items-center border border-[#C4C4C4] rounded-[8px] px-3 py-2 mb-4">
          <input type="text" class="flex-1 outline-none bg-transparent" placeholder="0" value="40,000" />
          <span class="ml-2 text-[#565656] font-bold">₦</span>
        </div>
        <label class="block text-[#565656] mb-2">Password</label>
        <div class="flex items-center border border-[#C4C4C4] rounded-[8px] px-3 py-2 mb-4">
          <input type="password" class="flex-1 outline-none bg-transparent" value="********" />
          <span class="ml-2 text-[#C4C4C4] cursor-pointer"><svg width="20" height="20" fill="none" stroke="currentColor"><circle cx="10" cy="10" r="8" stroke-width="2"/><path d="M4 4l12 12" stroke-width="2"/></svg></span>
        </div>
        <label class="block text-[#565656] mb-2">Note (Optional)</label>
        <input type="text" class="w-full border border-[#C4C4C4] rounded-[8px] p-3 mb-4" placeholder="For Groceries" />
        <label class="block text-[#565656] mb-2">Destination Bank</label>
        <input type="text" class="w-full border border-[#C4C4C4] rounded-[8px] p-3 mb-2 bg-[#F5F7FB] text-[#565656]" value="First Bank - 3059388399" disabled />
        <div class="mb-6 text-left">
          <a href="#" class="text-[#4169E6] text-sm">Are you having issues with the bank you added?</a>
        </div>
        <button type="submit" class="w-full bg-[#4169E6] text-white py-3 rounded-[8px] font-bold">Withdraw</button>
      </form>
    </div>
  </div>
</template>

<script setup>
// Emits close, withdraw
</script> 