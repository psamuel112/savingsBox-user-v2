<template>
    <div class="min-h-screen bg-white p-4">
      <div class="flex items-center mb-6">
        <button class="text-gray-600 mr-4">
          <ChevronLeft class="w-5 h-5" />
        </button>
      </div>
      
      <div class="text-center mb-4">
        <p class="text mb-4">Plan Details</p>
        <h1 class="text-[24px] font-bold text mb-4">Single Plan 2025</h1>
        <p class="text-[#6E6E6E]">For Members who want to get 10 varieties of Items For December</p>
      </div>
      
      <div class="mb-8 ">
        <img class="max-w-[583px] mx-auto max-h-[432px]"
          src="../../assets/images/png/single-plan.png" 
        />
      </div>
      
      <div class="mb-8">
        <p class="text-[#6E6E6E] mb-4">Plan Benefits</p>
        <div class="space-y-4">
          <div class="flex items-center justify-between p-2 border border-[#DDDDDD] bg-[#FCFCFC] rounded-lg">
            <div class="flex items-center">
              <div class="mr-2">
                 <img src="../../assets/images/png/rice.png"/>
              </div>
              <div>
                <h3 class="font-bold text">Rice (25KG)</h3>
                <p class="text-small text-[#939393]">A 10kg bag of rice</p>
              </div>
            </div>
            <div class="text-right">
              <p class="font-bold text-primary">₦44,000</p>
              <p class="text-small text-primary">20% Off <span class="line-through text-[#808080]">₦12,000</span></p>
            </div>
          </div>
          
          <div class="flex items-center justify-between p-4 border border-[#DDDDDD] bg-[#FCFCFC] rounded-lg">
            <div class="flex items-center">
                <div class="mr-2">
                 <img src="../../assets/images/png/oil.png"/>
              </div>
              <div>
                <h3 class="font-bold text">Power Oil 2.6 Liter</h3>
                <p class="text-small text-gray-500">Power Oil 2.6 Liter</p>
              </div>
            </div>
            <div class="text-right">
              <p class="font-bold text-primary">₦13,799</p>
              <p class="text-small text-primary">20% Off <span class="line-through text-[#808080]">₦17,799</span></p>
            </div>
          </div>
          
          <div class="flex items-center justify-between p-4 border border-[#DDDDDD] bg-[#FCFCFC] rounded-lg">
            <div class="flex items-center">
                <div class="mr-2">
                 <img src="../../assets/images/png/maggie.png"/>
              </div>
              <div>
                <h3 class="font-bold text">Maggi Star (1 Pack)</h3>
                <p class="text-small text-gray-500">1 Pack of Maggi Star</p>
              </div>
            </div>
            <div class="text-right">
              <p class="font-bold text-primary">₦1,600</p>
              <p class="text-small text-primary">20% Off <span class="line-through text-[#808080]">₦1,000</span></p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="max-w-[356px] mx-auto flex flex-col justify-center">
        <div class="mb-8 space-y-4">
        <div class="flex justify-between">
          <div class="bg-[#F5F5F5] w-[166px] rounded-[8px] p-2">
            <p class="text-[#6E6E6E] text-[14px]">Worth of Items</p>
            <p class="font-semibold text-[14px] text">₦171,844</p>
          </div>
          <div class="bg-[#F5F5F5] w-[166px] rounded-[8px] p-2">
            <p class="text-[#6E6E6E] text-[14px]">Amount/Month</p>
            <p class="font-semibold text-[14px] text">₦10,000</p>
          </div>
        </div>
        
        <div class="flex justify-between">
          <div class="bg-[#F5F5F5] w-[166px] rounded-[8px] p-2">
            <p class="text-[#6E6E6E] text-[14px]">Duration</p>
            <p class="font-semibold text-[14px] text">12 Months</p>
          </div>
          <div class="bg-[#F5F5F5] w-[166px] rounded-[8px] p-2">
            <p class="text-[#6E6E6E] text-[14px]">Month Started</p>
            <p class="font-semibold text-[14px] text">January 2022</p>
          </div>
        </div>
        
        <div class="bg-[#F5F5F5] w-[166px] rounded-[8px] p-2">
          <p class="text-[#6E6E6E] text-[14px]">No. of Months Left</p>
          <p class="font-semibold text-[14px] text">8 Months</p>
        </div>
      </div>

      <button @click="showCreateJolly = true" class="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-[8px] transition-colors">
        Join
      </button>
      </div>
     <CreateJolly v-if="showCreateJolly" @close="showCreateJolly = false" @continue="handleChooseJolly"/>
     <ChooseJolly v-if="showChooseJolly" @continue="handleContinuePayment"/>
     <AutoBoxPaymentSourceModal v-if="showJollyPayment" @continue="handleApplyJolly"/>
     <ApplyJolly v-if="showApplyJolly" @continue="handleSuccessModal"/>
     <AutoBoxSuccessModal title="Jolly Plan Created" buttonText="View My Jolly Plans" subMessage="You have successfully created and joined a Jolly Plan" v-if="showSuccessModal" @close="showSuccessModal = false"/>
    </div>
  </template>
  
  <script setup>
   import { ref } from 'vue';
  import { ChevronLeft } from 'lucide-vue-next';
import CreateJolly from '~/components/jolly/CreateJolly.vue';
import ChooseJolly from '~/components/jolly/ChooseJolly.vue';
import ApplyJolly from '~/components/jolly/ApplyJolly.vue';
import AutoBoxPaymentSourceModal from '~/components/savingsbox/AutoBoxPaymentSourceModal.vue';
import AutoBoxSuccessModal from '~/components/savingsbox/AutoBoxSuccessModal.vue';
const showCreateJolly = ref(false);
const showApplyJolly = ref(false);
const showChooseJolly = ref(false);
const showSuccessModal = ref(false);
const showJollyPayment = ref(false)
function handleChooseJolly() {
   showCreateJolly.value = false;
   showChooseJolly.value = true;
}
function handleContinuePayment() {
    showChooseJolly.value = false;
    showJollyPayment.value = true;
}
function handleApplyJolly() {
  console.log('Applying for Jolly');
    showJollyPayment.value = false;
    showApplyJolly.value = true;
}
function handleSuccessModal() {
    showApplyJolly.value = false;
    showSuccessModal.value = true;
}
  </script>