<template>
    <div class="">
      <div class="mb-5 ml-6 flex gap-2 items-center">
         <img @click="navigateTo('/account/about')" class="w-6 h-6 cursor-pointer" src="../../assets/images/png/chevron-left.png" />
        <h4 class="text-[24px] mb-0 font-bold text-[#000831]">Account Settings</h4>
      </div>
      <div class="space-y-4">
        <div class="bg-white rounded-lg p-4 shadow-sm">
          <div class="space-y-4">
            <AccountMenuItem :icon="profile" label="My Profile" />
            <AccountMenuItem :icon="verification" label="Verification" />
            <AccountMenuItem :icon="nok" label="Next of Kin" />
            <AccountMenuItem :icon="security" label="Account Security" />
            <AccountMenuItem :icon="deleteicon" label="Delete Account" logout/>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import profile from "/assets/images/png/profile.png";
  import verification from "/assets/images/png/verification-icon.png";
  import nok from "/assets/images/png/nok-icon.png";
  import security from "/assets/images/png/security-icon.png";
  import deleteicon from "/assets/images/png/delete-icon.png";
  import AccountMenuItem from '~/components/account/AccountMenuItem.vue';
  </script>