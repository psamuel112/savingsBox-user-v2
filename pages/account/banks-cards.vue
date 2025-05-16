<template>
  <div class="p-6">
    <div class="mb-5">
      <h4 class="text-[24px] font-bold text-[#000831]">Banks & Cards</h4>
      <p class="text-[#565656] text-[16px]">Manage your linked banks and cards</p>
    </div>
    
    <div class="space-y-4">
      <!-- Banks Section -->
      <div class="bg-white rounded-lg p-4 shadow-sm">
        <h5 class="font-semibold mb-3">Linked Banks</h5>
        <div class="space-y-3">
          <div class="flex justify-between items-center p-3 bg-[#F5F7FB] rounded-lg">
            <div>
              <p class="font-semibold">Guarantee Trust Bank</p>
              <p class="text-sm text-[#6E6E6E]">****1234</p>
            </div>
            <button class="text-[#4169E6] font-semibold">Remove</button>
          </div>
          <div class="flex justify-between items-center p-3 bg-[#F5F7FB] rounded-lg">
            <div>
              <p class="font-semibold">Wema Bank</p>
              <p class="text-sm text-[#6E6E6E]">****5678</p>
            </div>
            <button class="text-[#4169E6] font-semibold">Remove</button>
          </div>
        </div>
        <button class="mt-4 w-full bg-[#4169E6] text-white py-3 rounded-[8px] font-bold">Add New Bank</button>
      </div>

      <!-- Cards Section -->
      <div class="bg-white rounded-lg p-4 shadow-sm">
        <h5 class="font-semibold mb-3">Linked Cards</h5>
        <div class="space-y-3">
          <div class="flex justify-between items-center p-3 bg-[#F5F7FB] rounded-lg">
            <div>
              <p class="font-semibold">Visa Card</p>
              <p class="text-sm text-[#6E6E6E]">****4321</p>
            </div>
            <button class="text-[#4169E6] font-semibold">Remove</button>
          </div>
        </div>
        <button class="mt-4 w-full bg-[#4169E6] text-white py-3 rounded-[8px] font-bold">Add New Card</button>
      </div>
    </div>
  </div>
</template> 