<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30 px-4">
      <div class="bg-white rounded-[20px] w-full max-w-[800px] max-h-[90vh] overflow-y-auto p-8">
        <!-- Close Button -->
        <button class="absolute top-6 right-6 text-[#A1A1A1] hover:text-[#6E6E6E] transition-colors" @click="$emit('close')">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
  
        <!-- Header -->
        <div class="text-center mb-8 mt-4 flex flex-col justify-center align-center ">
          <h2 class="text-[24px] font-bold text-[#232323] mb-4">Create Jolly Plan</h2>
          <!-- Progress Bar -->
          <div class="w-full max-w-[335px] bg-[#E5E5E5] rounded-full h-2.5">
            <div class="bg-[#61CA61] h-2.5 rounded-full" style="width: 50%"></div>
          </div>
          <p class="text-[11px] text-[#939393] mt-1">50%</p>
        </div>
  
        <!-- Loan Information Form -->
        <div class="space-y-6">
          <h3 class="text-[16px] font-semibold text-[#232323]">Beneficiary Details</h3>
  
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        
  
            <!-- name -->
            <div>
              <label for="name" class="block text-sm font-semibold text-[#565656] mb-2">Beneficiary Name</label>
              <input type="name" id="name" class="w-full px-4 py-3 border border-[#4169E6] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" value="John Doe">
            </div>
  
 
            <!-- Phone Number -->
            <div>
              <label for="phone" class="block text-sm font-semibold text-[#565656] mb-2">Phone Number</label>
              <input type="tel" id="phone" class="w-full px-4 py-3 border border-[#4169E6] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" value="08045678945">
            </div>

 
            <div>
              <label for="email" class="block text-sm font-semibold text-[#565656] mb-2">Email Address</label>
              <input type="email" id="email" class="w-full px-4 py-3 border border-[#4169E6] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" value="John Doe">
            </div>
  
          
            <div>
              <label for="loanType" class="block text-sm font-semibold text-[#565656] mb-2">State</label>
              <div class="relative">
                <select id="loanType" class="w-full px-4 py-3 border border-[#DDDDDD] rounded-[8px] appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="cashFlowLending">FCT</option>
                  <!-- Add other options if needed -->
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#A1A1A1]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </div>
            </div>
  
            <!-- Loan Period -->
            <div>
              <label for="loanPeriod" class="block text-sm font-semibold text-[#565656] mb-2">City</label>
              <div class="relative">
                <select id="loanPeriod" class="w-full px-4 py-3 border border-[#DDDDDD] rounded-[8px] appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="6months">Abuja</option>
                  <!-- Add other options if needed -->
                </select>
                 <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#A1A1A1]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </div>
            </div>
  
            <!-- State of Residence -->
            <div>
              <label for="address" class="block text-sm font-semibold text-[#565656] mb-2">Street Address</label>
              <input type="text" id="address" class="w-full px-4 py-3 border border-[#DDDDDD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Plot 67 Wuse Zone 6, ">
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
  
  </style> 