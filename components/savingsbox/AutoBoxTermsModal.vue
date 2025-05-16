<template>
    <div class="fixed card-bg inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
        <div class="bg-white rounded-[20px] w-full max-w-[607px] relative p-0">
            <div class="bg-[#2346A9] rounded-t-[20px] px-8 py-10 flex items-center justify-between">
                <div class="text-white text-[24px] font-bold">AutoBox</div>
                <button class="bg-white text-[#4169E6] text-[20px] w-12 h-12 rounded-[40px]" @click="$emit('close')">&times;</button>
            </div>
            <div class="absolute top-4 right-28">
                <img class="w-[83px]  h-[83px]" src="../../assets/images/png/autobox-head.png" alt="">
            </div>
            <div class="px-8 pt-4 pb-8">
                <p class="text-[#6E6E6E] text-[14px] mb-4">
                    This is a general savings plan that allows users to save based on their preferences. The user
                    decides how long they want to save for, how much they want to save and how frequent they want to be
                    making payments.
                </p>
                <p class="text-[#6E6E6E] text-[14px] mb-4">
                    Prior to creating your plan, you must supply the information below:
                </p>
                <ul class="text-[#6E6E6E] text-[14px]  mb-4 list-disc pl-6">
                    <li>Amount (min of 500 Naira)</li>
                    <li>Frequency (daily, weekly, monthly, yearly)</li>
                    <li>Period etc.</li>
                </ul>
                <div class="mb-1 font-bold  text-[14px] text-[#6E6E6E]">Interest</div>
                <p class="text-[#6E6E6E] text-[14px] mb-4">
                    Interest is 10% of all payments that were paid on time<br />
                    All late payments will not be used to calculate interest
                </p>
                <div class="mb-1 font-bold  text-[14px] text-[#6E6E6E]">Upon Liquidation</div>
                <p class="text-[#6E6E6E] text-[14px] mb-4">
                    The user will lose accrued interest on savings.<br />
                    The user will lose 1.5% of the total amount saved.<br />
                    On completion or liquidation of the savings plan, money would be deposited in the user's Savingsbox
                    wallet
                </p>
                <div class="px-24">
                    <button class="w-full flex flex-col items-center bg-[#4169E6] text-white py-3 rounded-[8px] font-bold"
                    @click="$emit('continue')">Continue</button>
                </div>
   
            </div>
        </div>
    </div>
</template>

<script setup>
// Emits close, continue
</script>

<style scoped>
.card-bg {
    background-image: 
    url('../../assets/images/png/action-bg.png')
  }
</style>