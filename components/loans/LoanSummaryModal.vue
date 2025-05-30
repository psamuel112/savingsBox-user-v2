<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
        <div class="bg-white rounded-[20px] w-full max-w-[475px] max-h-[90vh] overflow-y-auto p-0">
            <button class="absolute top-6 right-6 w-12 h-12 text-[#A1A1A1] text-2xl"
                @click="$emit('close')">&times;</button>
            <button class="absolute top-6 left-6 w-12 h-12 text-[#A1A1A1] text-2xl" @click="$emit('back')">
                <svg width="24" height="24" fill="none" stroke="#A1A1A1">
                    <path d="M15 19l-7-7 7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <div class="px-9 pt-12 mt-8 pb-8">
                <h2 class="text-[28px] font-bold text-center mb-2">SME Loan Application</h2>
                <div class="flex items-center justify-center mb-8">
                    <div class="w-3/4">
                        <div class="flex items-center gap-2">
                            <div class="flex-1 h-2 rounded-full bg-[#E5E5E5]">
                                <div class="h-2 rounded-[12px] bg-[#27AE60]" style="width: 100%"></div>
                            </div>
                            <span class="text-[#232323] text-[14px] font-bold ml-2">100 %</span>
                        </div>
                    </div>
                </div>
                <div class="mb-4 text-center  font-bold text-[#565656]">Review your Loan Summary</div>
                <p class="mb-8 text-center text-[#565656]">Look through your savings plan and make sure all information
                    are correct</p>

                <div class="bg-[#ECF0FC] px-4 py-3 mb-8 rounded-[12px]">
                    <div class="flex-1  flex justify-between items-center">
                        <span class="text-[#6E6E6E] text-[11px]">Repayment Amount</span>
                        <span class="font-semibold text-sm text-[#4169E6]">₦100,000</span>
                    </div>
                    <hr class="bg-[#C4C4C4] h-[1px] my-2">
                    <div class="flex-1 flex justify-between items-center">
                        <span class="text-[#6E6E6E] text-[11px]">Repayment Amount Per Month</span>
                        <span class="font-semibold text-sm text-[#4169E6]">₦110,000</span>
                    </div>
                </div>
                <div class=" gap-4">
                    <div class=" bg-[#FEFEFE] rounded-[12px] py-10 px-8 border border-[#DDDDDD]">
                        <div class="flex flex-col gap-6 ">
                            <div class="flex justify-between  ">
                                <div>
                                    <p class="text-[#6E6E6E]">Loan Amount</p>
                                    <p class="font-semibold text">₦1,000</p>
                                </div>
                                <div>
                                    <p class="text-[#6E6E6E]">Start Date</p>
                                    <p class="font-semibold text">22 Aug. 2022</p>
                                </div>
                            </div>
                            <div class="flex justify-between ">
                                <div>
                                    <p class="text-[#6E6E6E]">Repayment Period</p>
                                    <p class="font-semibold text">3 Months</p>
                                </div>
                                <div>
                                    <p class="text-[#6E6E6E]">Repayment Date</p>
                                    <p class="font-semibold text">22 April. 2023</p>
                                </div>
                            </div>
                            <div class="flex justify-between ">
                                <div>
                                    <p class="text-[#6E6E6E]">Repayment Source</p>
                                    <p class="font-semibold text">Box Wallet</p>
                                </div>
                                <div class="flex flex-col ">
                                    <p class="text-[#6E6E6E]">Payment Frequency</p>
                                    <p class="font-semibold text">Weekly</p>
                                </div>
                            </div>
                            <div class="flex justify-between">
                                <div>
                                    <p class="text-[#6E6E6E]">Interest Rate</p>
                                    <p class="font-semibold text">2.6 %</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <p class="text-[#939393] mt-4"> By requesting a loan on our app, users agree to be bound by these
                        <a href="#" class="text-[#4169E6] underline">Terms</a> and <a href="#"
                            class="text-[#4169E6] underline">Conditions</a>.
                    </p>
                    <div class="flex items-center mt-2">
                        <input type="checkbox" id="accept" v-model="accepted" class="mr-2 w-5 h-5 accent-[#4169E6]" />
                        <label for="accept" class="text-[#232323]">Accept Terms and Conditions.</label>
                    </div>
                </div>

                <div class="flex justify-center">
                    <button :disabled="!accepted"
                        :class="['w-[356px] py-3   rounded-[8px] font-bold mt-2', accepted ? 'bg-[#4169E6] text-white' : 'bg-[#C4C4C4] text-[#A1A1A1]']"
                        @click="$emit('success')">Apply now</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const accepted = ref(false)
// Emits close, back
</script>

<style scoped></style>