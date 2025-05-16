<template>
  <div class="bg-[#FCFCFC] rounded-[8px] px-4 py-[18px] border-[0.5px] border-[#DDDDDD] w-full cursor-pointer" @click="handleClick">
    <div class="items-center gap-4 ">
      <div class="flex gap-[6px] items-center justify-between">
        <div class="flex items-center gap-2">
          <img src="/assets/images/png/autobox.png" alt="AutoBox" class="w-10 h-10" />
          <p class="text font-bold">Children's School Fees</p>
        </div>
        <div>
          <p class=" text-[#6E6E6E] mb-2 text-[11px]">Amount saved</p>
          <p class=" text-sm text font-bold mb-2">₦ 3,400 of 3,000,000</p>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div>
          <p class="text-[#232323] mb-2 font-semibold">Payment Due in 15 Days</p>
          <p class="text-[#6E6E6E] text-[14px]">₦ 1,000(10%) Earned all time</p>
        </div>
        <div>
          <p class=" text-[#6E6E6E] mb-2 text-[11px]">Deposit Amount</p>
          <p class=" text-[11px] font-bold ">₦ 3,400 /Week</p>
        </div>
      </div>
      <div class="w-full h-2 bg-[#F3F4F6] my-4 rounded-[12px]">
        <div class="h-2 bg-[#4169E6] rounded-full" style="width: 70%"></div>
      </div>
      <div class="flex items-center justify-between">
        <div>
          <p class=" text-[#939393] mb-2 text-[11px]">70 % Completed</p>
          <p class=" text-[#232323] mb-2 text-[11px]">5 Weeks Remaining</p>
        </div>
        <div class="">

          <button class="bg-[#ECF0FC] text-[#4169E6] px-4 py-2 rounded-[16px] font-semibold">AutoBox</button>
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