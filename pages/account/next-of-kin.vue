<template>
    <div class="">
      <!-- Header with back button -->
      <div class="mb-5 ml-6 flex gap-2 items-center">
         <img @click="navigateTo('/account')" class="w-6 h-6 cursor-pointer" src="../../assets/images/png/chevron-left.png" />
        <h4 class="text-[24px] mb-0 font-bold text-[#000831]">Next of Kin Details</h4>
      </div>
      
      <!-- Form -->
      <form @submit.prevent="saveDetails" class="lg:pr-[130px]">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 ">
          <!-- First Name -->
          <div>
            <label for="firstName" class="label mb-2">First Name</label>
            <input
              id="firstName"
              v-model="formData.firstName"
              type="text"
              class="w-full px-4 py-3 rounded-[8px] bg-[#ECF0FC33] border border-[#DDDDDD] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <!-- Last Name -->
          <div>
            <label for="lastName" class="labelmb-2">Last Name</label>
            <input
              id="lastName"
              v-model="formData.lastName"
              type="text"
              class="w-full px-4 py-3 w-full px-4 py-3 rounded-[8px] bg-[#ECF0FC33] border border-[#DDDDDD]  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <!-- Email Address -->
          <div>
            <label for="email" class="label mb-2">Email Address</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              class="w-full px-4 py-3 w-full px-4 py-3 rounded-[8px] bg-[#ECF0FC33] border border-[#DDDDDD]  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <!-- Phone Number -->
          <div>
            <label for="phone" class="label mb-2">Phone Number</label>
            <input
              id="phone"
              v-model="formData.phoneNumber"
              type="tel"
              class="w-full px-4 py-3 w-full px-4 py-3 rounded-[8px] bg-[#ECF0FC33] border border-[#DDDDDD]  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <!-- Residential Address -->
          <div>
            <label for="address" class="label mb-2">Residential Address</label>
            <input
              id="address"
              v-model="formData.address"
              type="text"
              class="w-full px-4 py-3 w-full px-4 py-3 rounded-[8px] bg-[#ECF0FC33] border border-[#DDDDDD]  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <!-- Relationship -->
          <div>
            <label for="relationship" class="label mb-2">Relationship</label>
            <div class="relative">
              <select
                id="relationship"
                v-model="formData.relationship"
                class="w-full px-4 py-3 w-full px-4 py-3 rounded-[8px] bg-[#ECF0FC33] border border-[#DDDDDD]  appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Brother">Brother</option>
                <option value="Sister">Sister</option>
                <option value="Father">Father</option>
                <option value="Mother">Mother</option>
                <option value="Spouse">Spouse</option>
                <option value="Child">Child</option>
                <option value="Friend">Friend</option>
                <option value="Other">Other</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <ChevronDown class="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
          <div class="mb-6">
          <label class="label mb-2">Passport Photograph (optional)</label>
          <p class="text-[#6E6E6E] text-sm mb-2">Make sure the Image is clear</p>
          <div class="border border-[#DDDDDD] rounded-[8px] py-10 px-3 bg-[#ECF0FC33] flex gap-3 items-center">
            <div class="mb-2 text-gray-400">
              <Upload class="w-6 h-6" />
            </div>
            <div>
                <p class="text-primary font-medium mb-1">Upload a File</p>
            <p class="text-gray-600 text-sm mb-1">Select a file from your device</p>
            <p class="text-gray-500 text-xs">
              Accepted file formats include jpg, jpeg, png or pdf. Max. file size 10MB
            </p>
            </div>
          
          </div>
           <!-- Save Button -->
        <button 
          type="submit" 
          class="w-full bg-primary hover:bg-blue-700 text-white font-medium py-3 px-4 mt-5 rounded-lg transition-colors"
        >
          Save
        </button>
        </div>
        </div>
        
        <!-- Passport Photograph -->
     
        
       
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { ChevronLeft, ChevronDown, Upload } from 'lucide-vue-next';
  
  const formData = ref({
    firstName: 'Marcus',
    lastName: 'James',
    email: 'marcusjames@gmail.com',
    phoneNumber: '08089388399',
    address: 'No 9, Wuse Zone 6, Abuja, Nigeria',
    relationship: 'Brother',
    passportPhoto: null
  });
  
  const saveDetails = () => {
    // Here you would typically send the data to your API
    console.log('Saving next of kin details:', formData.value);
    alert('Next of kin details saved successfully!');
  };
  </script>