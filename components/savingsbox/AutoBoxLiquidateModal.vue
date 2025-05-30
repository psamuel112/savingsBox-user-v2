<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
    <div class="bg-white rounded-[20px] w-full max-w-[430px] max-h-[90vh] overflow-y-auto p-8">
      <button class="absolute top-6 right-6 w-12 h-12 text-[#A1A1A1] text-2xl" @click="$emit('close')">
        <span>&times;</span>
      </button>
      <form @submit.prevent="liquidate">
        <h2 class="text-[22px] font-bold mb-4 mt-2">Are you sure you want to break this plan?</h2>
        <div class="text-[#565656] text-[15px] mb-2">Kindly let us know the reason for Liquidating your AutoBox Plan?</div>
        <select v-model="reason" class="w-full border border-[#DDDDDD] rounded-[8px] p-3 text-[14px] mb-4">
          <option>I am not Interested anymore</option>
          <option>I need the money urgently</option>
          <option>Found a better offer</option>
          <option>Other</option>
        </select>
        <div class="text-[#565656] text-[14px] mb-2">
          Kindly note that if you wish to liquidate your savings, you will lose your accrued interest on your capital.
        </div>
        <div class="text-[#565656] text-[14px] mb-4">
          If you have any complaint, reach our support team at
          <a href="mailto:support@savingsbox.ng" class="text-[#4169E6] underline">support@savingsbox.ng</a>
        </div>
        <div class="font-bold text-[15px] mb-2">Do you wish to continue?</div>
        <div class="mb-4 relative">
          <input :type="showPassword ? 'text' : 'password'" v-model="password" class="w-full border border-[#DDDDDD] rounded-[8px] p-3 text-[14px] pr-10" placeholder="Enter your password" />
          <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-[#A1A1A1]" @click="showPassword = !showPassword">
            <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95M6.873 6.872A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.043 5.306M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18"/></svg>
          </button>
        </div>
        <button type="submit" class="w-full bg-[#4169E6] text-white py-3 rounded-[8px] font-bold text-[16px] mb-2">Liquidate</button>
        <button type="button" class="w-full text-[#4169E6] py-2 rounded-[8px] font-bold text-[16px] bg-transparent" @click="$emit('close')">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const reason = ref('I am not Interested anymore')
const password = ref('')
const showPassword = ref(false)
const emit = defineEmits(['close', 'liquidate'])
function liquidate() {
  emit('liquidate', { reason: reason.value, password: password.value })
}
</script>

<style scoped>
</style> 