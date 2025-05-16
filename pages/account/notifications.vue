<template>
  <div class="p-6">
    <div class="mb-5">
      <h4 class="text-[24px] font-bold text-[#000831]">Notifications</h4>
      <p class="text-[#565656] text-[16px]">Manage your notification preferences</p>
    </div>
    
    <div class="space-y-4">
      <div class="bg-white rounded-lg p-4 shadow-sm">
        <div class="flex justify-between items-center">
          <div>
            <p class="font-semibold">Email Notifications</p>
            <p class="text-sm text-[#6E6E6E]">Receive updates via email</p>
          </div>
          <button class="relative w-10 h-6 focus:outline-none">
            <span class="absolute left-0 top-0 w-10 h-6 rounded-full bg-[#4169E6]"></span>
            <span class="absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow translate-x-4"></span>
          </button>
        </div>
      </div>

      <div class="bg-white rounded-lg p-4 shadow-sm">
        <div class="flex justify-between items-center">
          <div>
            <p class="font-semibold">Push Notifications</p>
            <p class="text-sm text-[#6E6E6E]">Receive push notifications</p>
          </div>
          <button class="relative w-10 h-6 focus:outline-none">
            <span class="absolute left-0 top-0 w-10 h-6 rounded-full bg-[#4169E6]"></span>
            <span class="absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow translate-x-4"></span>
          </button>
        </div>
      </div>

      <div class="bg-white rounded-lg p-4 shadow-sm">
        <div class="flex justify-between items-center">
          <div>
            <p class="font-semibold">SMS Notifications</p>
            <p class="text-sm text-[#6E6E6E]">Receive SMS updates</p>
          </div>
          <button class="relative w-10 h-6 focus:outline-none">
            <span class="absolute left-0 top-0 w-10 h-6 rounded-full bg-[#E5E7EB]"></span>
            <span class="absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template> 