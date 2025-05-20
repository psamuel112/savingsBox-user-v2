<template>
    <div class="">
      <!-- Header with back button -->
      <div class="mb-5 ml-6 flex gap-2 items-center">
      <img @click="navigateTo('/account/settings')" class="w-6 h-6 cursor-pointer"
        src="../../assets/images/png/chevron-left.png" />
      <h4 class="text-[24px] mb-0 font-bold text-[#000831]">My Profile</h4>
    </div>
      
      <!-- Profile picture section -->
      <div class="flex flex-col items-center mb-8">
        <div class="bg-white profile rounded-full w-[134px] h-[134px] border-[1px] border-[#4169E6]  mb-2">
                <img src="/assets/images/png/profile-image.png" class="w-full h-full object-cover rounded-full"
                    alt="Profile" />
            </div>
            
        <p class="text-xl text-gray-700 font-medium">{{ profileData.fullName }}</p>
        <button class="flex items-center text-sm text-primary font-[400]">
          <Camera class="w-5 h-5 mr-2" />
          Change Profile Picture
        </button>
      </div>
      
      <!-- Form fields -->
      <form @submit.prevent="saveProfile">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:pr-[130px] mb-8">
          <!-- Username -->
          <div>
            <label for="username" class="label mb-2">Username</label>
            <input
              id="username"
              v-model="profileData.username"
              type="text"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <!-- First Name -->
          <div>
            <label for="firstName" class="label mb-2">First Name</label>
            <input
              id="firstName"
              v-model="profileData.firstName"
              type="text"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <!-- Last Name -->
          <div>
            <label for="lastName" class="label mb-2">Last Name</label>
            <input
              id="lastName"
              v-model="profileData.lastName"
              type="text"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <!-- Email Address -->
          <div>
            <label for="email" class="label mb-2">Email Address</label>
            <input
              id="email"
              v-model="profileData.email"
              type="email"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <!-- Phone Number -->
          <div>
            <label for="phone" class="label mb-2">Phone Number</label>
            <input
              id="phone"
              v-model="profileData.phoneNumber"
              type="tel"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <!-- Gender -->
          <div>
            <label for="gender" class="label mb-2">Gender</label>
            <div class="relative">
              <select
                id="gender"
                v-model="profileData.gender"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <ChevronDown class="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        
        <!-- Save button -->
        <div class="flex justify-center">
          <button
            type="submit"
            class="w-full max-w-md text-sm bg-primary text-white font-bold py-3 px-4 rounded-[8px]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { ChevronLeft, Camera, ChevronDown } from 'lucide-vue-next';
  
  const profileData = ref({
    profileImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201618868276%20%281%29-thwTMuTUuYD3iQn81FbvGy6LpCktIl.png',
    fullName: 'John Doe',
    username: '@johndoe',
    firstName: 'Jogn',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    phoneNumber: '08059388399',
    gender: 'Male'
  });
  
  const saveProfile = () => {
    // Here you would typically send the data to your API
    console.log('Saving profile:', profileData.value);
    alert('Profile saved successfully!');
  };
  </script>