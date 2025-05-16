<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
    <div class="bg-white rounded-2xl shadow-lg p-16 w-full max-w-md relative">
      <button class="absolute w-12 h-12 top-4 right-4 text-gray-400 hover:text-gray-600" @click="$emit('close')">
        <span class="text-2xl">&times;</span>
      </button>
      <button class="absolute w-12 h-12 top-4 left-4 text-gray-400 hover:text-gray-600" @click="$emit('back')">
        <span class="text-2xl">&#8592;</span>
      </button>
      <h2 class="text-[24px] mt-6 text font-bold text-center mb-2">Fund Wallet</h2>
      <p class="text-left text-[#565656] ml-3 mb-8">Send the amount you want to fund to the virtual bank account details below</p>
      <form @submit.prevent="$emit('continue')">
        <div class="mb-4">
          <label class="block test-sm text-[#565656] mb-2">Enter Amount</label>
          <div class="flex items-center border rounded-lg px-3 py-2">
            <input type="number" class="flex-1 outline-none bg-transparent" placeholder="0" min="0" />
            <span class="ml-2 text-gray-500 font-bold">₦</span>
          </div>
        </div>
        <div class="mb-4">
          <label class="block text-sm text-[#6E6E6E] mb-2">Select a card to fund your wallet</label>
          <div class="space-y-2 border border-[#C4C4C4] p-3 rounded-[8px]">
            <label class="flex items-center border rounded-lg px-3 py-2">
              <span class="mr-2"><img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" class="w-6 h-6" /></span>
              <span class="flex-1">**** 5688</span>
              <input type="radio" name="card" class="form-radio" />
            </label>
            <label class="flex items-center border rounded-lg px-3 py-2">
              <span class="mr-2"><img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" class="w-6 h-6" /></span>
              <span class="flex-1">**** 5689</span>
              <input type="radio" name="card" class="form-radio" />
            </label>
            <label class="flex items-center border rounded-lg px-3 py-2">
              <span class="mr-2"><img class="w-5" src="../../assets/images/png/cards-outline.png" alt=""></span>
              <span class="flex-1">Use a New Card</span>
              <input type="radio" name="card" class="form-radio" />
            </label>
          </div>
        </div>
        <div class="mb-6 flex items-center">
          <input type="checkbox" id="saveCard" class="mr-2" />
          <label for="saveCard" class="text-[#565656] text-sm">Save card for future use</label>
        </div>
        <button type="submit" class="w-full bg-[#4169E6] text-white py-3 rounded-[8px] text-sm font-bold">Continue</button>
      </form>
    </div>
  </div>
</template>

<script setup>
// Emits close, back, continue
</script> 