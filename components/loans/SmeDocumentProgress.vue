<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30 px-4">
    <div class="bg-white rounded-[20px] w-full max-w-[600px] max-h-[90vh] overflow-y-auto p-8">
      <!-- Close Button -->
      <button class="absolute top-6 right-6 text-[#A1A1A1] hover:text-[#6E6E6E] transition-colors" @click="$emit('close')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>

      <!-- Header -->
      <div class="text-center mb-8 mt-4">
        <h2 class="text-[24px] font-bold text-[#232323] mb-4">SME Loan Application</h2>
        <!-- Progress Bar -->
        <div class="w-full bg-[#E5E5E5] rounded-full h-2.5">
          <div class="bg-[#61CA61] h-2.5 rounded-full" style="width: 70%"></div>
        </div>
        <p class="text-[11px] text-[#939393] mt-1">70%</p>
      </div>

      <!-- Document Upload Progress Section -->
      <div class="space-y-6">
        <h3 class="text-[16px] font-semibold text-[#232323]">Upload Required Document</h3>

        <div class="space-y-4">
          <!-- Bank Statement Uploaded -->
          <div>
            <label class="block text-sm font-semibold text-[#565656] mb-1">Bank Statement</label>
            <p class="text-[12px] text-[#939393] mb-2">(The bank statement should be atleast 6 months)</p>
            <div class="border border-[#DDDDDD] rounded-[8px] p-4 flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#A1A1A1]"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m8 17 4 4 4-4"></path></svg>
              <div class="flex-1">
                <div class="text-[#232323] text-[14px] font-semibold mb-1">My Document.pdf</div>
                 <div class="w-full bg-[#E5E5E5] rounded-full h-1.5">
                    <div class="bg-[#61CA61] h-1.5 rounded-full" style="width: 100%"></div>
                </div>
              </div>
               <div class="text-[#61CA61] text-[12px] font-semibold flex items-center">
                 100 %
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
               </div>
            </div>
          </div>

          <!-- CAC Certificate Uploaded -->
          <div>
            <label class="block text-sm font-semibold text-[#565656] mb-2">CAC Certificate</label>
            <div class="border border-[#DDDDDD] rounded-[8px] p-4 flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#A1A1A1]"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m8 17 4 4 4-4"></path></svg>
               <div class="flex-1">
                <div class="text-[#232323] text-[14px] font-semibold mb-1">My Document.pdf</div>
                 <div class="w-full bg-[#E5E5E5] rounded-full h-1.5">
                    <div class="bg-[#61CA61] h-1.5 rounded-full" style="width: 100%"></div>
                </div>
              </div>
               <div class="text-[#61CA61] text-[12px] font-semibold flex items-center">
                 100 %
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
               </div>
            </div>
          </div>

          <!-- Passport Photograph Uploaded -->
          <div>
            <label class="block text-sm font-semibold text-[#565656] mb-2">Passport Photograph</label>
            <div class="border border-[#DDDDDD] rounded-[8px] p-4 flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#A1A1A1]"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m8 17 4 4 4-4"></path></svg>
               <div class="flex-1">
                <div class="text-[#232323] text-[14px] font-semibold mb-1">My Document.pdf</div>
                 <div class="w-full bg-[#E5E5E5] rounded-full h-1.5">
                    <div class="bg-[#61CA61] h-1.5 rounded-full" style="width: 100%"></div>
                </div>
              </div>
               <div class="text-[#61CA61] text-[12px] font-semibold flex items-center">
                 100 %
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
               </div>
            </div>
          </div>

          <!-- Memorandum & Articles of Association Uploaded -->
          <div>
            <label class="block text-sm font-semibold text-[#565656] mb-2">Memorandum & Articles of Association</label>
            <div class="border border-[#DDDDDD] rounded-[8px] p-4 flex items-center space-x-3">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#A1A1A1]"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m8 17 4 4 4-4"></path></svg>
               <div class="flex-1">
                <div class="text-[#232323] text-[14px] font-semibold mb-1">My Document.pdf</div>
                 <div class="w-full bg-[#E5E5E5] rounded-full h-1.5">
                    <div class="bg-[#61CA61] h-1.5 rounded-full" style="width: 100%"></div>
                </div>
              </div>
               <div class="text-[#61CA61] text-[12px] font-semibold flex items-center">
                 100 %
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
               </div>
            </div>
          </div>

        </div>

        <!-- Continue Button -->
        <div class="mt-8 flex justify-center">
           <button class="w-full max-w-[356px] bg-[#4169E6] text-white py-3 rounded-[8px] font-bold text-[16px] hover:bg-[#1D4ED8] transition-colors" @click="$emit('continue')">Continue</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
});

defineEmits(['close', 'continue']);
</script>

<style scoped>
/* Reusing styles from the previous modals for consistency */
.max-w-\[600px\] {
  max-width: 600px;
}
.rounded-\[20px\] {
  border-radius: 20px;
}
.rounded-\[8px\] {
  border-radius: 8px;
}
.bg-\[\#00083133\] {
  background-color: #00083133;
}
.bg-\[\#E5E5E5\] {
  background-color: #E5E5E5;
}
.bg-\[\#61CA61\] {
  background-color: #61CA61;
}
.text-\[11px\] {
  font-size: 11px;
}
.text-\[16px\] {
  font-size: 16px;
}
.text-\[24px\] {
  font-size: 24px;
}
.text-\[\#A1A1A1\] {
  color: #A1A1A1;
}
.text-\[\#232323\] {
  color: #232323;
}
.text-\[\#565656\] {
  color: #565656;
}
.border-\[\#DDDDDD\] {
  border-color: #DDDDDD;
}
.max-w-\[356px\] {
    max-width: 356px;
}

/* Specific styles for this modal */
.text-\[12px\] {
    font-size: 12px;
}
.text-\[10px\] {
    font-size: 10px;
}
.bg-\[\#E0E0E0\] {
    background-color: #E0E0E0;
}
</style> 