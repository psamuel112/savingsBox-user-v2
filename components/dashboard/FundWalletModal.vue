<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
    <div class="bg-white rounded-[20px]  p-12 w-full max-w-md relative">
      <button class="absolute w-12 h-12 top-4 right-4 text-gray-400 hover:text-gray-600" @click="$emit('close')">
        <span class=" text-2xl">&times;</span>
      </button>
      <h2 class="text-[24px] mt-12 text font-bold text-center mb-2">Fund Wallet</h2>
      <p class="text-center text-[#565656] mb-8">Top up your wallet Balance</p>
      <p class="text-center text-[#232323] mb-4">Choose Funding Source</p>
      <div class="space-y-4">
        <button class="w-full flex items-center justify-between border border-[#C4C4C4] rounded-[8px] p-3 hover:bg-gray-50" @click="$emit('fund-virtual')">
          <div class="flex items-center gap-3">
            <img class="w-6 h-6" src="../../assets/images/png/bank-outline.png" alt="">
            <div class="text-left">
              <div class="font-semibold text">Fund with Virtual Account</div>
              <div class="text-sm text-[#6E6E6E]">Get Started</div>
            </div>
          </div>
          <span>&#8250;</span>
        </button>
        <button class="w-full flex items-center justify-between border border-[#C4C4C4] rounded-[8px] p-3 hover:bg-gray-50" @click="$emit('fund-card')">
          <div class="flex items-center gap-3">
            <img class="w-6 h-6" src="../../assets/images/png/cards-outline.png" alt="">
            <div class="text-left">
              <div class="font-semibold text">Fund with a Card</div>
              <div class="text-xm text-[#6E6E6E]">Get Started</div>
            </div>
          </div>
          <span>&#8250;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// No props needed, emits close, fund-virtual, fund-card
</script> 