<template>
    <div class="max-w-3xl mx-auto p-4">
      <!-- BVN Section -->
      <div class="mb-6">
        <h2 class="text-xl font-bold text-gray-900 mb-1">BVN</h2>
        <p class="text-gray-600 mb-2">Bank Verification Number (BVN)</p>
        <button class="text-blue-600 font-medium">Add BVN</button>
      </div>
      
      <div class="border-b border-gray-200 mb-6"></div>
      
      <!-- KYC Verification Section -->
      <div class="mb-6">
        <h2 class="text-xl font-bold text-gray-900 mb-6">KYC Verification</h2>
        
        <!-- Means of Identification -->
        <div class="mb-6">
          <label class="block text-gray-600 mb-2">Means of Identification</label>
          <div class="relative">
            <select 
              v-model="identificationType" 
              class="w-full px-4 py-3 rounded-lg border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="national_id">National Identity Card</option>
              <option value="drivers_license">Driver's License</option>
              <option value="passport">International Passport</option>
              <option value="voters_card">Voter's Card</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <ChevronDown class="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
        
        <!-- Document Upload Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- Front View -->
          <div>
            <label class="block text-gray-900 mb-1">Front View</label>
            <p class="text-gray-500 text-sm mb-2">Make sure the Image is clear</p>
            <div class="border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <div class="mb-2 text-gray-400">
                <Upload class="w-6 h-6" />
              </div>
              <p class="text-blue-600 font-medium mb-1">Upload a File</p>
              <p class="text-gray-600 text-sm mb-1">Select a file from your device</p>
              <p class="text-gray-500 text-xs">
                Accepted file formats include jpg, jpeg, png or pdf. Max. file size 10MB
              </p>
            </div>
          </div>
          
          <!-- Back View -->
          <div>
            <label class="block text-gray-900 mb-1">Back View</label>
            <p class="text-gray-500 text-sm mb-2">Make sure the Image is clear</p>
            <div class="border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <div class="mb-2 text-gray-400">
                <Upload class="w-6 h-6" />
              </div>
              <p class="text-blue-600 font-medium mb-1">Upload a File</p>
              <p class="text-gray-600 text-sm mb-1">Select a file from your device</p>
              <p class="text-gray-500 text-xs">
                Accepted file formats include jpg, jpeg, png or pdf. Max. file size 10MB
              </p>
            </div>
          </div>
        </div>
        
        <!-- Residential Address -->
        <div class="mb-6">
          <label class="block text-gray-600 mb-2">Residential Address</label>
          <input 
            type="text" 
            v-model="residentialAddress" 
            placeholder="Enter current residence address" 
            class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <!-- Submit Button -->
        <button 
          @click="submitKYC" 
          class="w-full bg-gray-200 hover:bg-gray-300 text-gray-600 font-medium py-3 px-4 rounded-lg transition-colors"
        >
          Submit KYC
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { ChevronDown, Upload } from 'lucide-vue-next';
  
  const identificationType = ref('national_id');
  const residentialAddress = ref('');
  const frontImage = ref(null);
  const backImage = ref(null);
  
  const submitKYC = () => {
    // Here you would typically send the data to your API
    console.log('Submitting KYC:', {
      identificationType: identificationType.value,
      residentialAddress: residentialAddress.value,
      frontImage: frontImage.value,
      backImage: backImage.value
    });
    alert('KYC submitted successfully!');
  };
  </script>