<template>
  <div class="">
    <div class="mb-5 ml-6 flex gap-2 items-center">
       <img @click="navigateTo('/account')" class="w-6 h-6 cursor-pointer" src="../../assets/images/png/chevron-left.png" />
      <h4 class="text-[24px] mb-0 font-bold text-[#000831]">About Us</h4>
    </div>
    
    <div class="space-y-4">
      <div class="bg-white rounded-lg p-4 shadow-sm">
        <div class="space-y-4">
          <AccountMenuItem :icon="community" label="Community" />
          <AccountMenuItem :icon="support" label="Support" @click="navigateTo('/account/support')" />
          <AccountMenuItem :icon="privacy" label="Privacy Policy" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import community from "/assets/images/png/community-icon.png";
import support from "/assets/images/png/support-icon.png";
import privacy from "/assets/images/png/privacy-icon.png";
import AccountMenuItem from '~/components/account/AccountMenuItem.vue';
</script> 