<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
    <div class="bg-white rounded-[20px] p-12 w-full max-w-lg relative">
      <button class="absolute w-12 h-12 top-4 right-4 text-gray-400 hover:text-gray-600" @click="$emit('close')">
        <span class="text-2xl">&times;</span>
      </button>
      <h2 class="text-[24px] font-bold mb-8 text-center">Notification</h2>
      <div class="space-y-6">
        <div class="flex items-center gap-4">
          <span class="bg-[#ECF0FC] p-3 rounded-full"><svg width="24" height="24" fill="none" stroke="#4169E6"><rect x="4" y="4" width="16" height="16" rx="8" stroke-width="2"/><path d="M12 8v4l3 3" stroke-width="2"/></svg></span>
          <div class="flex-1">
            <div class="font-bold text-[#232323]">Don't miss out! For a limited time, get up to NGN500 for each friend you refer</div>
            <div class="text-[#6E6E6E] text-sm">3d</div>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <span class="bg-[#ECF0FC] p-3 rounded-full"><svg width="24" height="24" fill="none" stroke="#A259FF"><rect x="4" y="4" width="16" height="16" rx="8" stroke-width="2"/><path d="M8 12h8" stroke-width="2"/></svg></span>
          <div class="flex-1">
            <div class="font-bold text-[#232323]">Sent NGN12,500 to John Doe (@johndoe)</div>
            <div class="text-[#6E6E6E] text-sm">3d</div>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <span class="bg-[#ECF0FC] p-3 rounded-full"><svg width="24" height="24" fill="none" stroke="#A259FF"><rect x="4" y="4" width="16" height="16" rx="8" stroke-width="2"/><path d="M8 12h8" stroke-width="2"/></svg></span>
          <div class="flex-1">
            <div class="font-bold text-[#232323]">Received NGN10,000 from kelechi (@kelechim)</div>
            <div class="text-[#6E6E6E] text-sm">3d</div>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <span class="bg-[#ECF0FC] p-3 rounded-full"><svg width="24" height="24" fill="none" stroke="#27AE60"><rect x="4" y="4" width="16" height="16" rx="8" stroke-width="2"/><path d="M12 8v8" stroke-width="2"/></svg></span>
          <div class="flex-1">
            <div class="font-bold text-[#232323]">Update on Agricultural investment return of NGN25,000</div>
            <div class="text-[#6E6E6E] text-sm">3d</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Emits close
</script> 