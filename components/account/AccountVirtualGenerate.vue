<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
      <div class="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
        <h1 class="text-xl font-bold text-gray-900 mb-4">Virtual Account</h1>
        <p class="text-gray-600 mb-6">
          Generate a virtual account to fund your wallet through bank transfers.
        </p>
        
        <button 
          @click="showModal = true"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
        >
          Generate Virtual Account
        </button>
        
        <div v-if="accountDetails" class="mt-8 border-t pt-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">Your Virtual Account</h2>
          <div class="bg-gray-50 rounded-lg p-4">
            <div class="mb-3">
              <p class="text-sm text-gray-500">Account Name</p>
              <p class="font-medium">{{ accountDetails.name }}</p>
            </div>
            <div class="mb-3">
              <p class="text-sm text-gray-500">Account Number</p>
              <p class="font-medium">{{ accountDetails.number }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-500">Bank</p>
              <p class="font-medium">{{ accountDetails.bank }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <GenerateVirtualAccountModal 
        v-if="showModal" 
        @close="showModal = false"
        @generate-account="handleGenerateAccount"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import GenerateVirtualAccountModal from '@/components/GenerateVirtualAccountModal.vue';
  
  const showModal = ref(false);
  const accountDetails = ref(null);
  
  const handleGenerateAccount = (data) => {
    // Simulate API call to generate virtual account
    setTimeout(() => {
      accountDetails.value = {
        name: 'John Doe',
        number: '0123456789',
        bank: data.bank === 'gtb' ? 'GTB (Guarantee Trust Bank)' : 'Other Bank'
      };
      showModal.value = false;
    }, 1000);
  };
  </script>