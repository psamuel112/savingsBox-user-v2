<template>
    <div class="wallet-card rounded-[8px] overflow-hidden">
      <!-- Header with logo and dropdown -->
      <div class="p-6 pb-6 relative">
        <div class="flex items-center justify-between mb-4">
          <div class="text-xl font-semibold flex items-center text-white">
            <img class="w-[132px]" src="../../assets/images/svg/white-logo.svg" alt="Savingsbox Logo">
            <ChevronDown class="ml-1 h-5 w-5" />
          </div>
          <button class="text-gray-300">
            <EyeOff class="h-5 w-5" />
          </button>
        </div>
        
        <!-- Balance amount -->
        <div class="text-[24px] font-[500] mb-6 text-white">₦ 340,598,980</div>
        
        <!-- Action buttons -->
        <div class="flex flex-wrap gap-4">
          <button class="bg-[#5C0099] gap-1 text-white p-3  rounded-lg flex items-center text-sm">
            <img src="../../assets/images/svg/fund-icon.svg" alt="wallet Logo" class="">
            Fund Wallet
          </button>
          <button class="bg-[#4169E6] gap-1 text-white p-3 rounded-lg flex items-center text-sm">
            <img src="../../assets/images/svg/send-icon.svg" alt="Send Logo" class="">
            Send Money
          </button>
          <button class="bg-[#ECF0FC] gap-1 text-[#4169E6] p-3 rounded-lg flex items-center text-sm">
            <img src="../../assets/images/svg/withdraw-icon.svg" alt="withdraw Logo" class="">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  .wallet-card {
    background-color: #17254F;
    background-image: url("../../assets/images/svg/wallet-bg.svg");
    background-repeat: no-repeat;
  }
  .pattern-bg {
  background-image: url("../../assets/images/svg/auth-bg.svg");
}
  </style>
  