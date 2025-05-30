<template>
    <div class="fixed card-bg inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
        <div class="bg-white rounded-[20px] w-full max-w-[607px] max-h-[90vh] overflow-y-auto p-0">
            <div class="bg-[#2346A9] rounded-t-[20px] px-8 py-10 flex items-center justify-between">
                <div class="text-white text-[24px] font-bold">SME Loans</div>
                <button class="bg-white text-[#4169E6] text-[20px] w-12 h-12 rounded-[40px]" @click="$emit('close')">&times;</button>
            </div>
            <div class="absolute top-4 right-28">
                <img class="w-[83px]  h-[83px]" src="../../assets/images/png/smes.png" alt="">
            </div>
            <div class="px-8 pt-4 pb-8">
                <p class="text-[#6E6E6E] text-[14px] mb-4">
                    Irrespective of the sector your enterprise is operating, SavingsBox is willing to support you with a credit facility up to N100,000 & maximum of  N2,000,000 with option to choose repayment terms for up to 90days to expand the enterprise, Good credit history unlocks 180days tenure.
                </p>
              
               
                <p class="text-[#6E6E6E] text-[14px] mb-4">
                    Monthly interest rate of 6% and 18% in 90 Days
                </p>
              
                <p class="text-primary text-[14px] mb-4">
                    Terms & Conditions
                </p>
                <p class="text-[#6E6E6E] text-[14px] mb-4">
                    Procced to read our terms and conditions for using and applying for our loan services
                </p>
                <div class="px-24">
                    <button class="w-full flex flex-col items-center bg-[#4169E6] text-white py-3 rounded-[8px] font-bold"
                    @click="$emit('continue')">Apply Now</button>
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