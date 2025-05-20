<template>
    <div class="">
        <div class="mb-5 ml-6 flex gap-2 items-center">
      <img @click="navigateTo('/account/settings')" class="w-6 h-6 cursor-pointer"
        src="../../assets/images/png/chevron-left.png" />
      <h4 class="text-[24px] mb-0 font-bold text-[#000831]">My Profile</h4>
    </div>
    <div class="flex justify-center">
        <div class="bg-white  rounded-[40px] w-full max-w-[691px] shadow-[0px_4px_50px_0px_#0000000D] overflow-hidden">
        <div class="px-8 pt-10 pb-8">
          <!-- Profile Image -->
          <div class="flex justify-center mb-3">
            <div class="bg-white profile rounded-full w-[134px] h-[134px] border-[1px] border-[#4169E6]  mb-2">
                <img src="/assets/images/png/profile-image.png" class="w-full h-full object-cover rounded-full"
                    alt="Profile" />
            </div>
          </div>
          
          <!-- User Name -->
          <div class="text-center mb-4">
            <h2 class="text-xl text-gray-700 font-medium">{{ user.fullName }}</h2>
          </div>
          
          <!-- Edit Profile Button -->
          <div class="flex justify-center mb-6" @click="navigateTo('/account/edit-profile')">
            <button class="flex items-center text-primary font-medium text-sm">
              <div class="w-5 h-5   flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z" />
</svg>

              </div>
              Edit Profile
            </button>
          </div>
          
          <!-- Profile Information -->
          <div class="space-y-0">
            <!-- Username -->
            <div class="py-4 border-b border-gray-100">
              <div class="flex justify-between">
                <span class="text-gray-600">Username</span>
                <span class="text-gray-800 font-medium">{{ user.username }}</span>
              </div>
            </div>
            
            <!-- First Name -->
            <div class="py-4 border-b border-gray-100">
              <div class="flex justify-between">
                <span class="text-gray-600">First Name</span>
                <span class="text-gray-800 font-medium">{{ user.firstName }}</span>
              </div>
            </div>
            
            <!-- Last Name -->
            <div class="py-4 border-b border-gray-100">
              <div class="flex justify-between">
                <span class="text-gray-600">Last Name</span>
                <span class="text-gray-800 font-medium">{{ user.lastName }}</span>
              </div>
            </div>
            
            <!-- Email -->
            <div class="py-4 border-b border-gray-100">
              <div class="flex justify-between">
                <span class="text-gray-600">Email</span>
                <span class="text-gray-800 font-medium">{{ user.email }}</span>
              </div>
            </div>
            
            <!-- Phone Number -->
            <div class="py-4 border-b border-gray-100">
              <div class="flex justify-between">
                <span class="text-gray-600">Phone Number</span>
                <span class="text-gray-800 font-medium">{{ user.phoneNumber }}</span>
              </div>
            </div>
            
            <!-- Gender -->
            <div class="py-4">
              <div class="flex justify-between">
                <span class="text-gray-600">Gender</span>
                <span class="text-gray-800 font-medium">{{ user.gender }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';

  
  // User data
  const user = ref({
    profileImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201000003803-NAsiQZmXexILJ72aMKGOBd8mipLRw1.png',
    fullName: 'John Doe',
    username: '@johndoe',
    firstName: 'Success',
    lastName: 'John',
    email: 'johndoe@gmail.com',
    phoneNumber: '09068667782',
    gender: 'Male'
  });
  </script>