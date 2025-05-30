<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30 px-4">
    <div class="bg-white rounded-[20px] w-full max-w-[800px] max-h-[90vh] overflow-y-auto p-8">
      <!-- Close Button -->
      <button class="absolute top-6 right-6 text-[#A1A1A1] hover:text-[#6E6E6E] transition-colors" @click="$emit('close')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>

      <!-- Header -->
      <div class="text-center mb-8 mt-4 flex flex-col justify-center align-center ">
        <h2 class="text-[24px] font-bold text-[#232323] mb-4">SME Loan Application</h2>
        <!-- Progress Bar -->
        <div class="w-full max-w-[335px] bg-[#E5E5E5] rounded-full h-2.5">
          <div class="bg-[#61CA61] h-2.5 rounded-full" style="width: 50%"></div>
        </div>
        <p class="text-[11px] text-[#939393] mt-1">50%</p>
      </div>

      <!-- Loan Information Form -->
      <div class="space-y-6">
        <h3 class="text-[16px] font-semibold text-[#232323]">Loan Information</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <!-- Reason for Loan -->
          <div class="md:col-span-2">
            <label for="reason" class="block text-sm font-semibold text-[#565656] mb-2">Reason for Loan</label>
            <input type="text" id="reason" class="w-full px-4 py-3 border border-[#DDDDDD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Children School Fee">
          </div>

          <!-- Phone Number -->
          <div>
            <label for="phone" class="block text-sm font-semibold text-[#565656] mb-2">Phone Number</label>
            <input type="tel" id="phone" class="w-full px-4 py-3 border border-[#4169E6] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" value="08045678945">
          </div>

          <!-- Loan Type -->
          <div>
            <label for="loanType" class="block text-sm font-semibold text-[#565656] mb-2">Loan Type</label>
            <div class="relative">
              <select id="loanType" class="w-full px-4 py-3 border border-[#DDDDDD] rounded-[8px] appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="cashFlowLending">Cash Flow Lending</option>
                <!-- Add other options if needed -->
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#A1A1A1]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>
          </div>

          <!-- Loan Period -->
          <div>
            <label for="loanPeriod" class="block text-sm font-semibold text-[#565656] mb-2">Loan Period</label>
            <div class="relative">
              <select id="loanPeriod" class="w-full px-4 py-3 border border-[#DDDDDD] rounded-[8px] appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="6months">6 months</option>
                <!-- Add other options if needed -->
              </select>
               <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#A1A1A1]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>
          </div>

          <!-- State of Residence -->
          <div>
            <label for="state" class="block text-sm font-semibold text-[#565656] mb-2">State of Residence</label>
            <input type="text" id="state" class="w-full px-4 py-3 border border-[#DDDDDD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="FCT">
          </div>

          <!-- City of Residence -->
          <div>
            <label for="city" class="block text-sm font-semibold text-[#565656] mb-2">City of Residence</label>
            <input type="text" id="city" class="w-full px-4 py-3 border border-[#DDDDDD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Abuja">
          </div>

          <!-- Enter Amount -->
          <div class="">
             <label for="amount" class="block text-sm font-semibold text-[#565656] mb-2">Enter Amount (Max. ₦1M)</label>
             <div class="relative">
               <input type="number" id="amount" class="w-full px-4 py-3 border border-[#DDDDDD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10" placeholder="100">
               <span class="absolute inset-y-0 right-0 flex items-center pr-3 text-[#232323]">₦</span>
             </div>
          </div>

        </div>

        <!-- Continue Button -->
        <div class="mt-8 flex justify-center">
           <button class="w-full max-w-[356px] bg-[#4169E6] text-white py-3 rounded-[8px] font-bold text-[16px] hover:bg-[#1D4ED8] transition-colors" @click="$emit('continue')">Continue</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
});

defineEmits(['close', 'continue']);

</script>

<style scoped>
/* Add any specific styles if needed for pixel perfection that Tailwind cannot easily handle */
/* For example, fine-tuning input heights or small positional adjustments */
.max-w-\[600px\] {
  max-width: 600px;
}
.rounded-\[20px\] {
  border-radius: 20px;
}
.rounded-\[8px\] {
  border-radius: 8px;
}
.bg-\[\#00083133\] {
  background-color: #00083133;
}
.bg-\[\#E5E5E5\] {
  background-color: #E5E5E5;
}
.bg-\[\#61CA61\] {
  background-color: #61CA61;
}
.text-\[11px\] {
  font-size: 11px;
}
.text-\[16px\] {
  font-size: 16px;
}
.text-\[24px\] {
  font-size: 24px;
}
.text-\[\#A1A1A1\] {
  color: #A1A1A1;
}
.text-\[\#232323\] {
  color: #232323;
}
.text-\[\#565656\] {
  color: #565656;
}
.border-\[\#DDDDDD\] {
  border-color: #DDDDDD;
}
.border-\[\#4169E6\] {
   border-color: #4169E6;
}
.max-w-\[356px\] {
    max-width: 356px;
}
</style> 