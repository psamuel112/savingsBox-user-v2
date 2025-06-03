
<template>
   <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30 px-4">
    <div class="bg-white rounded-[20px] w-full max-w-[428px] max-h-[90vh] overflow-y-auto p-8">
      <!-- Header -->
      <div class="flex items-center mb-5 justify-between">
        <button class= "hover:text-gray-800">
          <ChevronLeft class="h-6 text-primary w-6" />
        </button>
        <button class= "hover:text-gray-800">
          <X class="h-6 text-primary w-6" />
        </button>
      </div>
  
      <!-- Progress Bar -->
       <div>
        <h2 class="text-[24px] text-center font-bold">Create Jolly Plan</h2>
        <div class="flex items-center mb-2">
       
       <div class="flex-1 bg-[#F5F5F5] rounded-[12px] h-2 mr-3">
         <div class="bg-[#61CA61] h-2 rounded-[12px]" style="width: 100%"></div>
       </div>
       <span class="text-small font-bold text-[#000000]">100%</span>
</div>
       </div>
   
  
      <!-- Plan Review -->
      <div class="mt-6">
        <h3 class="text font-bold">Review your Jolly Plan</h3>
        <ul class="mt-4 space-y-4">
          <li class="flex justify-between">
            <span class="text-[#6E6E6E] text-[14px]">Generator X2</span>
            <span class="text">₦98,300</span>
          </li>
          <li class="flex justify-between">
            <span class="text-[#6E6E6E] text-[14px]">TV Sets</span>
            <span class="text">₦175,000</span>
          </li>
          <li class="flex justify-between">
            <span class="text-[#6E6E6E] text-[14px]">Refrigerator</span>
            <span class="text">₦98,300</span>
          </li>
          <li class="flex justify-between">
            <span class="text-[#6E6E6E] text-[14px]">50 Tins of Tomatoes</span>
            <span class="text">₦18,500</span>
          </li>
          <li class="flex justify-between">
            <span class="text-[#6E6E6E] text-[14px]">A tin of Thailand Rice</span>
            <span class="text">₦25,000</span>
          </li>
          <li class="flex justify-between">
            <span class="text-[#6E6E6E] text-[14px]">Provisions</span>
            <span class="text">₦13,000</span>
          </li>
        </ul>
        <div class="flex px-2 justify-between mb-6 mt-3">
          <span class="text font-bold text-[14px]">Total</span>
          <span class="text-primary font-bold">₦410,000</span>
        </div>
      </div>
  
      <!-- Summary -->
      <div class="grid grid-cols-2 gap-4 mt-6 text-sm">
        <div class="bg-[#F5F5F5] w-[166px] p-2">
          <p class="font-semibold">Worth of items</p>
          <p>₦171,844</p>
        </div>
        <div class="bg-[#F5F5F5] w-[166px] p-2">
          <p class="font-semibold">Amount/Month</p>
          <p>₦10,000</p>
        </div>
        <div class="bg-[#F5F5F5] w-[166px] p-2">
          <p class="font-semibold">Duration</p>
          <p>12 Months</p>
        </div>
        <div class="bg-[#F5F5F5] w-[166px] p-2">
          <p class="font-semibold">Members</p>
          <p>2,398</p>
        </div>
        <div class="bg-[#F5F5F5] w-[166px] p-2">
          <p class="font-semibold">Month Started</p>
          <p>January 2022</p>
        </div>
        <div class="bg-[#F5F5F5] w-[166px] p-2">
          <p class="font-semibold">No. of Months Left</p>
          <p>8 Months</p>
        </div>
      </div>
  
      <!-- Apply Button -->
      <button @click="$emit('continue')" class="w-full mt-6 bg-primary text-white py-3 rounded-[8px] hover:bg-blue-700">
        Apply Now
      </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ChevronLeft, X } from 'lucide-vue-next';
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>