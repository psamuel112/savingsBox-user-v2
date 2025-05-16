<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
        <div class="bg-white rounded-[20px] w-full max-w-[428px] relative p-0">
            <button class="absolute top-6 right-6 w-12 h-12 text-[#4169E6] text-2xl"
                @click="$emit('close')">&times;</button>
            <button class="absolute top-6 left-6 w-12 h-12 text-[#A1A1A1] text-2xl" @click="$emit('back')">
                <svg width="24" height="24" fill="none" stroke="#4169E6">
                    <path d="M15 19l-7-7 7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <div class="px-8 mt-8 pt-10 pb-8">
                <h2 class="text-[24px] text font-bold text-center mb-2">AutoBox Savings Plan</h2>
                <div class="flex items-center justify-center mb-8">
                    <div class="w-3/4">
                        <div class="flex items-center gap-2">
                            <div class="flex-1 h-2 rounded-full bg-[#E5E5E5]">
                                <div class="h-2 rounded-[12px] bg-[#61CA61]" style="width: 50%"></div>
                            </div>
                            <span class="text text-[11px] font-bold ml-2">50 %</span>
                        </div>
                    </div>
                </div>
                <div class="mb-6">
                    <div class="text-[16px] text-[#565656] font-bold mb-2">Select your Payment Source</div>
                </div>
                <form @submit.prevent="$emit('continue')">
                    <div class="mb-4 flex items-center justify-between">
                        <p class="text">Fund from SavingsBox Wallet</p>
                        <input type="checkbox" checked class="accent-[#4169E6] w-5 h-5" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-[#565656] text-[14px] font-semibold mb-2">Payment Method</label>
                        <div class="border border-[#DDDDDD] rounded-[12px] p-4 bg-[#FAFAFA]">
                            <div class="flex items-center mb-4 font-semibold text-[#232323] cursor-pointer"
                                @click="dropdownOpen = !dropdownOpen">
                                <img class="w-6 h-6 mr-1" src="../../assets/images/png/cards-outline.png" alt="">
                                Fund with Saved Card
                                <svg class="ml-auto transition-transform duration-200"
                                    :class="dropdownOpen ? 'rotate-180' : ''" width="20" height="20" fill="none"
                                    stroke="#A1A1A1">
                                    <path d="M6 8l4 4 4-4" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div v-if="dropdownOpen" class="flex flex-col gap-2 mt-2">
                                <label class="flex items-center border rounded-[8px] px-3 py-2 cursor-pointer"
                                    :class="selectedCard === 'mastercard' ? 'border-[#4169E6] bg-white' : 'border-[#DDDDDD] bg-[#FAFAFA]'">
                                    <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                                        class="w-6 h-6 mr-2" />
                                    <span class="flex-1">**** 5635</span>
                                    <input type="radio" name="card" value="mastercard" v-model="selectedCard"
                                        class="form-radio" />
                                </label>
                                <label class="flex items-center border rounded-[8px] px-3 py-2 cursor-pointer"
                                    :class="selectedCard === 'visa' ? 'border-[#4169E6] bg-white' : 'border-[#DDDDDD] bg-[#FAFAFA]'">
                                    <img src="https://img.icons8.com/color/48/000000/visa.png" class="w-6 h-6 mr-2" />
                                    <span class="flex-1">**** 5635</span>
                                    <input type="radio" name="card" value="visa" v-model="selectedCard"
                                        class="form-radio" />
                                </label>
                            </div>
                        </div>
                        <div class="flex gap-1 mt-5 items-center justify-center text-center mx-auto">
                            <span class="text-[#4169E6] text-sm"><img src="../../assets/images/png/plus-circle.png"
                                    alt="" class="w-6 h-6"></span> Bind New Card
                        </div>
                    </div>
                    <button type="submit" :disabled="!selectedCard"
                        :class="['w-full py-3 rounded-[8px] font-bold mt-8', selectedCard ? 'bg-[#4169E6] text-white' : 'bg-[#DDDDDD] text-[#A1A1A1]']">Next</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const selectedCard = ref('')
const dropdownOpen = ref(true)
// Emits close, continue, back
</script>

<style scoped></style>