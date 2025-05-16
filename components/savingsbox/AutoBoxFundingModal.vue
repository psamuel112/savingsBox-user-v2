<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
        <div class="bg-white rounded-[20px] w-full max-w-[430px] relative p-8">
            <button class="absolute top-6 right-6 w-12 h-12 text-[#4169E6] text-2xl" @click="$emit('close')">
                <span>&times;</span>
            </button>
            <h2 class="text-[24px] mt-12 text-center text font-bold mb-2 mt-2">{{ plan.title }}</h2>
            <p class="text text-sm mb-4">Description</p>
            <p class="text-[#565656] text-[11px] mb-4">{{ plan.description }}</p>
            <div class="flex justify-between items-center gap-2 mb-4">
                <span
                    class="bg-[#ECF0FC] text-[#4169E6] rounded-[16px] px-4 py-2 text-[11px] font-semibold">AutoBox</span>
                <div class="flex gap-1">
                    <img class="w-[18px] h-[18px]" src="../../assets/images/png/invoice.png" alt="">
                    <button class="ml-auto text-[#4169E6] text-sm font-bold">Open Invoice</button>
                </div>
            </div>
            <div class="card-bg rounded-[16px] p-4 mb-4 flex items-center justify-between">
                <div>
                    <div class="bg-[#FFFFFF1A] py-3 px-2 backdrop-blur-25">
                        <p class="text-[#FEFEFE] font-bold mb-1">{{ plan.weeksRemaining }} Weeks Remaining
                        </p>
                        <p class="text-[#DDDDDD] text-[11px] mb-1">Interest Accrued <span class="text-[#FEFEFE] font-bold">₦{{
                            plan.interestAccrued.toLocaleString() }}</span></p>
                    </div>
                    <p class="text-[#DDDDDD] text-[11px]">Saved <span class="text-[#FEFEFE] font-bold">₦{{ plan.saved.toLocaleString()
                    }}</span></p>
                </div>
                <div class="flex flex-col items-center">
                    <svg width="90" height="90" viewBox="0 0 60 60">
                        <circle cx="32" cy="32" r="28" fill="#fff" fill-opacity="0.1" />
                        <circle cx="32" cy="32" r="24" stroke="#fff" stroke-width="4" fill="none" />
                        <circle cx="32" cy="32" r="24" stroke="#4169E6" stroke-width="4" fill="none"
                            :stroke-dasharray="2 * Math.PI * 24"
                            :stroke-dashoffset="2 * Math.PI * 24 * (1 - plan.percentCompleted / 100)"
                            stroke-linecap="round" transform="rotate(-90 32 32)" />
                        <text x="32" y="38" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">{{
                            plan.percentCompleted }}%</text>
                             <text x="32" y="45" text-anchor="middle" fill="#fff" font-size="7" font-weight="semibold">Completed</text>
                    </svg>
                    <div class="text-white text-[7px] font-semibold mt-1">Completed</div>
                </div>
            </div>
            <div class="bg-[#F8F9FB] rounded-[12px] p-4 mb-6">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-[#6E6E6E] text-[13px] font-semibold">Expected Payout</span>
                    <span class="text-[#4169E6] text-[15px] font-bold">₦{{ plan.expectedPayout.toLocaleString()
                    }}</span>
                </div>
                <div class="grid grid-cols-2 gap-2 mt-2 text-[13px] text-[#232323]">
                    <div>Amount Weekly<br><span class="font-bold">₦{{ plan.amountWeekly.toLocaleString() }}</span></div>
                    <div>Start Date<br><span class="font-bold">{{ plan.startDate }}</span></div>
                    <div>Target Amount<br><span class="font-bold">₦{{ plan.targetAmount.toLocaleString() }}</span></div>
                    <div>Due Date<br><span class="font-bold">{{ plan.dueDate }}</span></div>
                    <div>Primary Source<br><span class="font-bold">{{ plan.primarySource }}</span></div>
                    <div>Frequency<br><span class="font-bold">{{ plan.frequency }}</span></div>
                    <div>Interest Rate<br><span class="font-bold">{{ plan.interestRate }} %</span></div>
                    <div>Period<br><span class="font-bold">{{ plan.period }}</span></div>
                </div>
            </div>
            <div class="flex gap-4 mt-4">
                <button class="flex-1 border border-[#4169E6] text-[#4169E6] bg-white py-3 rounded-[8px] font-bold"
                    @click="$emit('edit')">Edit</button>
                <button class="flex-1 bg-[#4169E6] text-white py-3 rounded-[8px] font-bold"
                    @click="$emit('liquidate')">Liquidate</button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    plan: {
        type: Object,
        required: true
    }
})
// Emits close, edit, liquidate
</script>


<style scoped>
.card-bg {
    background: linear-gradient(269.97deg, #5D7FE6 11.88%, #3959B9 58.18%, #5D7FE6 87.16%);

}
</style>