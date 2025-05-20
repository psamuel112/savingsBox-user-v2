<template>
    <div class="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div class="bg-white py-7 px-12 rounded-[20px] w-full max-w-[496px] relative shadow-xl">
            <!-- Close button -->
            <button class="absolute w-12 h-12  top-4 right-4 text-primary" @click="$emit('close')">
                <span class="text-2xl">&times;</span>
            </button>

            <!-- Warning message -->
            <div class="pt-6 mt-6 px-6">
                <div class="flex items-start space-x-1">
                    <div class="flex-shrink-0 mt-0.5">
                        <div class="w-5 h-5 rounded-full  flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="none" class="w-4 h-4">
                                <circle cx="12" cy="12" r="10" stroke="#FF0000" stroke-width="2" />
                                <path stroke="#FF0000" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M12 8v4m0 4h.01" />
                            </svg>
                        </div>
                    </div>
                    <p class="text-[11px] text">
                        Sorry, your account cannot be deleted, you still have active savings and jollification plans
                        running.
                    </p>
                </div>
            </div>

            <!-- Modal content -->
            <div class="px-6 pt-6">
                <h4 class="text-[24px] font-bold text-center text-[#000831]">Delete My Account</h4>

                <div class="mt-6">
                    <p class="block text-[#6E6E6E] font-bold text-sm mb-4">Why do you want to delete your account?</p>
                    <label class="block font-semibold text-sm text-[#565656] mb-2">Select an option</label>
                    <div class="relative">
                        <select
                            class="w-full px-4 py-3 border border-[#DDDDDD] rounded-[8px] appearance-none pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>I am not interested anymore</option>
                            <option>I found a better alternative</option>
                            <option>The service doesn't meet my needs</option>
                            <option>Other</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#4169E6"
                                class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="mt-6">
                    <p class="text-sm text-[#6E6E6E]">
                        <span class="font-bold ">Note:</span> To delete your account requires that your wallet balance
                        must be zero (0) and no pending or active savings, investment, jolly or loan plans.
                    </p>
                </div>

                <div class="mt-6">
                    <p class="text-sm text-[#6E6E6E]">
                        Did we do something wrong, Kenneth? you can
                        <a href="#" class="#4169E6">let us know here</a>.
                        We would love to hear from you on how we can do better
                    </p>
                </div>
            </div>

            <!-- Action buttons -->
            <div class="px-6 py-6 mt-6">
                <button @click="continueUsing"
                    class="w-full bg-[#4169E6] text-sm hover:bg-blue-700 text-white p-3 rounded-[8px] font-bold mb-6">
                    Continue using SavingsBox
                </button>

                <button @click="deleteAccount"
                    class="w-full text-[#EB001B] font-bold text-sm ">
                    Delete my Account
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>


</script>