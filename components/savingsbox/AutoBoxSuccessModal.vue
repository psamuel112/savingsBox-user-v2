<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
    <div class="bg-white rounded-[20px] w-full max-w-[430px] relative text-center p-10">
      <button class="absolute top-6 right-6 w-12 h-12 text-[#4169E6] text-2xl" @click="$emit('close')">
        <span>&times;</span>
      </button>
      <h2 class="text-[24px] font-bold mb-6 mt-4">{{ title }}</h2>
      <div class="flex justify-center mb-6">
        <div class="items-center justify-center">
         <img class="w-[187px] " src="../../assets/images/gif/success.gif" />
        </div>
      </div>
      <p class="mb-2 text-[#232323] text-[16px]">{{ message }}</p>
      <p v-if="subMessage" class="mb-8 text-[#939393] text-[15px]">{{ subMessage }}</p>
      <button class="w-full bg-[#4169E6] text-white py-3 rounded-[8px] font-bold text-[16px]" @click="$emit('action')">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: 'Plan Liquidated' },
 // message: { type: String, default: 'Your plan is successfully liquidated' },
  subMessage: { type: String, default: 'The money in your SavingsBox plan will be sent back to your Wallet' },
  buttonText: { type: String, default: 'Go to Plans' }
})
// Emits close, action
</script>

<style scoped>
</style> 