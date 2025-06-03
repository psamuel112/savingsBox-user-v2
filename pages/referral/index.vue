<!-- filepath: /Users/pertinencegroup/Documents/GitHub/savingsBox-user-v2/pages/referral.vue -->
<template>
  <div class="min-h-screen px-10 mx-auto max-w-[794px] bg-white p-6">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <div></div>
      <p
@click="navigateTo('referral/activities')"
        class="text-primary text-[14px] font-bold hover:underline"
        >View Referral Activities</p
      >
    </div>
    <div>
      <h1 class="text-[36px] text-center text-[#000831] font-bold">Referral</h1>
    </div>
    <!-- Referral Bonus Section -->
    <div class="text-center mb-">
      <div class="mb-5" style="width: 261px; margin: 0 auto">
        <img
          src="../../assets/images/gif/referral.gif"
          alt="Gift box"
          class="flex mx-auto items-center"
        />
      </div>
      <h2 class="text-[24px] font-bold text-[#031051]">
        Earn ₦500.00 per referral.
      </h2>
      <p class="text-[#6E6E6E] text-[20px] font-medium mt-5">
        You get a ₦500.00 bonus instantly as soon as your friends signup,<br> Verify
        their BVN, to enjoy unlimited access and benefits on SavingsBox.
      </p>
      <p class="text-[#6E6E6E] text-[20px] font-medium mt-5">
        You will also get 1000 naira the first time your referral gets a
        Jollification plan.
      </p>
    </div>

    <!-- Referral Link Section -->
    <p class="text-[#939393] text-[20px] mb-5 font-medium">Copy the link and code below and share with friends</p>
    <div class="mx-auto max-w-[356px]">
    
      <p class="text-[#565656] text-center font-sm mb-2">Referral Link</p>
      <div class="flex items-center bg-[#ECF0FC33] border border-[#DDDDDD] rounded-[8px] p-3 mb-5">
        <input
          type="text"
          readonly
          value="https://get.savingbox.com/r/KenneAfO"
          class="flex-1 text text-[14px] font-sm focus:outline-none"
        />
       <img src="../../assets/images/svg/share.svg" alt="Copy Icon" class="h-6 w-6 cursor-pointer ml-2" @click="$copy('https://get.savingbox.com/r/KenneAfO')" />
      </div>

      <p class="text-gray-600 mb-2">Referral Code</p>
      <div class="flex items-center bg-[#ECF0FC33] border border-[#DDDDDD] rounded-[8px] p-3">
        <input
          type="text"
          readonly
          value="KenneAfO"
          class="flex-1  text-blue-600 font-bold focus:outline-none"
        />
        <img src="../../assets/images/svg/content-copy.svg" alt="Copy Icon" class="h-6 w-6 cursor-pointer ml-2" @click="$copy('https://get.savingbox.com/r/KenneAfO')" />
      </div>
    </div>

   <!-- Social Share Section -->
   <div class="flex justify-center space-x-4 mt-5">
     <img src="../../assets/images/svg/facebook.svg" alt="Facebook" class="h-12 w-12 cursor-pointer" @click="$emit('share', 'facebook')" />
      <img src="../../assets/images/svg/twitter.svg" alt="Twitter" class="h-12 w-12 cursor-pointer" @click="$emit('share', 'twitter')" />
    </div>
  </div>
</template>

<script setup>
import { Share, Copy, Facebook, Twitter } from "lucide-vue-next";
</script>

<style scoped>
/* Add any additional styles here */
</style>
