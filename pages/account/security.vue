<template>
    <div class="">
      <div class="mb-5 ml-6 flex gap-2 items-center">
         <img @click="navigateTo('/account')" class="w-6 h-6 cursor-pointer" src="../../assets/images/png/chevron-left.png" />
        <h4 class="text-[24px] mb-0 font-bold text-[#000831]">Account Security</h4>
      </div>
      
      <div class="space-y-4">
        <div class=" ">
          <div class="space-y-4">
            <AccountMenuItem :icon="password" @click="dialogOpen = true"  label="Change password" />
            <AccountMenuItem :icon="twofa" label="Enable Two-Factor Authentication" @click="navigateTo('/account/support')" />
            <AccountMenuItem :icon="pin" label="Use PIN for Login" />
          </div>
        </div>
      </div>
      <v-dialog v-model="dialogOpen">
        <AccountCreatePassword />
      </v-dialog>
    </div>
    
  </template>
  
  <script setup>
  import password from "/assets/images/svg/password-icon.svg";
  import twofa from "/assets/images/svg/auth-icon.svg";
  import pin from "/assets/images/svg/pin-icon.svg";
  import AccountMenuItem from '~/components/account/AccountMenuItem.vue';
  import AccountCreatePassword from "~/components/account/AccountCreatePassword.vue";

  import { ref } from "vue";
const dialogOpen = ref(false);
  </script> 