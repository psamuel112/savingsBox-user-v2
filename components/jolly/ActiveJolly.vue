<template>
   <div class="bg-[#FCFCFC] rounded-[8px] px-4 py-[18px] border-[0.5px] border-[#DDDDDD] w-full cursor-pointer" @click="handleClick">
     <div class="items-center gap-4 ">
       <div class="flex gap-[6px] items-center justify-between">
       
         <div>
            <p class="text font-bold mb-2">Children's School Fees</p>
            <p class=" text-[#6E6E6E] mb-2 text-[11px]">3/11 Months</p>
         </div>
         <div>
            <p class="text font-bold mb-2">₦ 30,000</p>
            <p class=" text-[#6E6E6E] mb-2 text-[11px]">Weeklys</p>
         </div>
       </div>
      
       <div class="w-full h-2 bg-[#F3F4F6] my-3    rounded-[12px]">
         <div class="h-2 bg-[#4169E6] rounded-full" style="width: 70%"></div>
       </div>
       <div class="flex items-center justify-between">
         <div>
           <p class=" text-[#939393] mb-2 text-[11px]">70 % Completed</p>
    
         </div>
         <div class="">
 
           <button class="bg-[#EFFAEF] text-[#61CA61] px-4 py-2 rounded-[16px] font-semibold">Active</button>
         </div>
       </div>
     </div>
 
   </div>
 </template>
 
 <script setup>
 const emit = defineEmits(['view-plan'])
 function handleClick() {
   emit('view-plan', {
     id: 1,
     title: "Children's School Fees",
     description: 'This is a one-time savings option in which users invest',
     weeksRemaining: 18,
     interestAccrued: 10000,
     saved: 340400,
     percentCompleted: 80,
     amountWeekly: 1000,
     startDate: '22 Aug. 2022',
     targetAmount: 100000,
     dueDate: '22 April. 2023',
     primarySource: 'Box Wallet',
     frequency: 'Weekly',
     interestRate: 2.6,
     period: '6 Months',
     expectedPayout: 110000
   })
 }
 </script>
 
 <style scoped></style>