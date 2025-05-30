<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
        <div class="bg-white rounded-[20px] w-full max-w-[943px] max-h-[90vh] overflow-y-auto p-0">
            <button class="absolute top-6 right-6 w-12 h-12 text-[#A1A1A1] text-2xl"
                @click="$emit('close')">&times;</button>
            <button class="absolute top-6 left-6 w-12 h-12 text-[#A1A1A1] text-2xl" @click="$emit('back')">
                <svg width="24" height="24" fill="none" stroke="#A1A1A1">
                    <path d="M15 19l-7-7 7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <div class="px-9 pt-12 mt-8 pb-8">
                <h2 class="text-[28px] font-bold text-center mb-2">AutoBox Savings Plan</h2>
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
                <div class="mb-4 text-left  font-bold text-[#565656]">Review your Savings Plan Information</div>
                <p class="mb-8 text-left text-[#565656]">Look through your savings plan and make sure all information
                    are correct</p>

                    <div class="bg-[#ECF0FC] px-4 py-3 mb-8 rounded-[12px]">
                        <div class="flex-1  flex justify-between items-center">
                            <span class="text-[#6E6E6E] text-[11px]">Target Amount</span>
                            <span class="font-semibold text-sm text-[#4169E6]">₦100,000</span>
                        </div>
                        <hr class="bg-[#C4C4C4] h-[1px] my-2">
                        <div class="flex-1 flex justify-between items-center">
                            <span class="text-[#6E6E6E] text-[11px]">Expected Payout</span>
                            <span class="font-semibold text-sm text-[#4169E6]">₦110,000</span>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="flex-1 bg-[#FEFEFE] rounded-[12px] py-10 px-8 border border-[#DDDDDD]">
                            <div class="flex flex-col gap-6 ">
                                <div class="flex justify-between  text-right">
                                    <div>
                                        <p class="text-[#6E6E6E]">Amount Weekly</p>
                                        <p class="font-semibold text">₦1,000</p>
                                    </div>
                                    <div>
                                        <p class="text-[#6E6E6E]">Start Date</p>
                                        <p class="font-semibold text">22 Aug. 2022</p>
                                    </div>
                                </div>
                                <div class="flex justify-between  text-right">
                                    <div>
                                        <p class="text-[#6E6E6E]">Target Amount</p>
                                        <p class="font-semibold text">₦100,000</p>
                                    </div>
                                    <div>
                                        <p class="text-[#6E6E6E]">Due Date</p>
                                        <p class="font-semibold text">22 April. 2023</p>
                                    </div>
                                </div>
                                <div class="flex justify-between  text-right">
                                    <div>
                                        <p class="text-[#6E6E6E]">Primary Source</p>
                                        <p class="font-semibold text">Box Wallet</p>
                                    </div>
                                    <div class="flex flex-col  text-right ">
                                        <p class="text-[#6E6E6E]">Frequency</p>
                                        <p class="font-semibold text">Weekly</p>
                                    </div>
                                </div>
                                <div class="flex justify-between text-right">
                                    <div>
                                        <p class="text-[#6E6E6E]">Interest Rate</p>
                                        <p class="font-semibold text">2.6 %</p>
                                    </div>
                                    <div>
                                        <p class="text-[#6E6E6E]">Period</p>
                                        <p class="font-semibold text">6 Months</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 flex flex-col justify-center text-[15px] gap-2">
                            <ol class="list-decimal pl-4 text-[#6E6E6E]">
                                <li>Eligibility: The Savings Plan is available to users who are at least 18 years of age
                                    and have a valid account with our app.</li>
                                <li>Liquidation Penalty: If a user chooses to withdraw funds before the end of the
                                    specified duration, a liquidation penalty of 1.5% will be applied.</li>
                                <li>Interest Rate: The interest rate offered on the Savings Plan may vary depending on
                                    the current market conditions and will be disclosed at the time of creation.</li>
                                <li>Acceptance: By creating a Savings Plan on our app, users agree to be bound by these
                                    <a href="#" class="text-[#4169E6] underline">Terms</a> and <a href="#"
                                        class="text-[#4169E6] underline">Conditions</a>.
                                </li>
                            </ol>
                            <div class="flex items-center mt-2">
                                <input type="checkbox" id="accept" v-model="accepted"
                                    class="mr-2 w-5 h-5 accent-[#4169E6]" />
                                <label for="accept" class="text-[#232323]">Accept Terms and Conditions.</label>
                            </div>
                        </div>
                    </div>
                
                <div class="flex justify-center">
                    <button :disabled="!accepted"
                    :class="['w-[356px] py-3   rounded-[8px] font-bold mt-6', accepted ? 'bg-[#4169E6] text-white' : 'bg-[#C4C4C4] text-[#A1A1A1]']"
                    @click="$emit('success')">Create
                    Savings Plan</button>
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