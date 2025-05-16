<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
        <div class="bg-white rounded-[20px] w-full max-w-[800px] relative p-0">
            <button class="absolute top-6 right-6 w-12 h-12 text-[#A1A1A1] text-2xl"
                @click="$emit('close')">&times;</button>
            <div class="px-12 pt-12 mt-8 pb-8">
                <h2 class="text-[24px] font-bold text-center mb-2">AutoBox Savings Plan</h2>
                <div class="flex items-center justify-center mb-8">
                    <div class="w-3/4">
                        <div class="flex items-center gap-2">
                            <div class="flex-1 h-2 rounded-full bg-[#E5E5E5]">
                                <div class="h-2 rounded-[12px] bg-[#61CA61]" style="width: 25%"></div>
                            </div>
                            <span class="text text-[11px] font-bold ml-2">25 %</span>
                        </div>
                    </div>
                </div>
                <div class="mb-6">
                    <div class="text-[16px] font-bold mb-2">How much do you want to save?</div>
                </div>
                <form @submit.prevent="$emit('continue')">
                    <div class="mb-4">
                        <label class="block text-[#565656] text-[14px] font-semibold mb-2">Plan Title</label>
                        <input type="text" class="w-full border border-[#DDDDDD] rounded-[8px] p-3 text-[14px]"
                            placeholder="Children School Fees" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-[#565656] text-[14px] font-semibold mb-2">Description <span
                                class="text-[#939393]">(Optional)</span></label>
                        <textarea class="w-full border border-[#DDDDDD] rounded-[8px] p-3 text-[14px] min-h-[120px]"
                            placeholder="Enter Description"></textarea>
                    </div>
                    <div class="flex flex-col md:flex-row gap-4 mb-4">
                        <div class="flex-1">
                            <label class="block text-[#565656] text-[14px] font-semibold mb-2">Frequency</label>
                            <div class="flex gap-4">
                                <button type="button" class="px-3 py-2 text-[14px] rounded-[16px]"
                                    :class="frequency === 'Daily' ? 'bg-[#4169E6] text-white' : 'bg-[#F5F7FB] text-[#4169E6]'"
                                    @click="frequency = 'Daily'">Daily</button>
                                <button type="button" class="px-3 py-2 text-[14px] rounded-[16px]"
                                    :class="frequency === 'Weekly' ? 'bg-[#4169E6] text-white' : 'bg-[#F5F7FB] text-[#4169E6]'"
                                    @click="frequency = 'Weekly'">Weekly</button>
                                <button type="button" class="px-3 py-2 text-[14px] rounded-[16px]"
                                    :class="frequency === 'Monthly' ? 'bg-[#4169E6] text-white' : 'bg-[#F5F7FB] text-[#4169E6]'"
                                    @click="frequency = 'Monthly'">Monthly</button>
                                <button type="button" class="px-3 py-2 text-[14px] rounded-[16px]"
                                    :class="frequency === 'Yearly' ? 'bg-[#4169E6] text-white' : 'bg-[#F5F7FB] text-[#4169E6]'"
                                    @click="frequency = 'Yearly'">Yearly</button>
                            </div>
                        </div>
                        <div class="flex-1">
                            <label class="block text-[#565656] text-[14px] font-semibold mb-2">Period (Duration)</label>
                            <div class="flex items-center gap-2">
                                <input type="number"
                                    class="w-full border border-[#C4C4C4] rounded-[8px] p-3 text-[16px]"
                                    placeholder="100" />
                                <span class="text-[#A1A1A1] ml-2">Days</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row gap-4 mb-8">
                        <div class="flex-1">
                            <label class="block text-[#565656] text-[14px] font-semibold mb-2">Amount</label>
                            <div class="flex items-center border border-[#C4C4C4] rounded-[8px] p-3">
                                <input type="number" class="flex-1 outline-none bg-transparent text-[16px]"
                                    placeholder="100" />
                                <span class="ml-2 text-[#999C9F] ">₦ Per {{ frequency }}</span>
                            </div>
                        </div>
                        <div class="flex-1">
                            <label class="block text-[#565656] text-[14px] font-semibold mb-2">Start Date</label>
                            <div class="flex items-center border border-[#C4C4C4] rounded-[8px] p-3">
                                <input type="date" class="flex-1 outline-none bg-transparent text-[16px]" />
                                <!-- <span class="ml-2 text-[#A1A1A1]">
                                    <svg width="20" height="20" fill="none" stroke="#A1A1A1">
                                        <rect x="3" y="5" width="14" height="12" rx="2" stroke-width="2" />
                                        <path d="M8 3v2M12 3v2M3 9h14" stroke-width="2" />
                                    </svg>
                                </span> -->
                            </div>
                        </div>
                    </div>
                    <div class="px-24">
                        <button
                            class="w-full flex flex-col items-center bg-[#4169E6] text-white py-3 rounded-[8px] font-bold"
                            @click="$emit('continue')">Continue</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const frequency = ref('Daily')
// Emits close, continue
</script>

<style scoped></style>