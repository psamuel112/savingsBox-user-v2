<template>
  <div class="p-6">
    <!-- Header -->
    <div class="mb-2">
      <h1 class="text-[28px] font-bold text-[#232323]">
        <span class="text-[#000831]">Investment</span>
      </h1>
      <p class="text-[#6B6B6B] text-[16px]">Securely build your portfolio and wealth</p>
    </div>

    <!-- Balance Card -->
    <div class="bg-[#072723] rounded-[16px] p-6 mb-6 max-w-[370px] text-white">
      <div class="text-[15px] mb-2">Total InvestiBox Balance</div>
      <div class="flex items-center gap-2">
        <span class="text-[28px] font-bold">₦ 340,598,980</span>
        <!-- <img src="~/assets/images/svg/eye.svg" class="w-6 h-6 cursor-pointer" alt="toggle visibility" /> -->
      </div>
    </div>

    <!-- Tabs -->
    <div class="bg-[#F5F7FA] rounded-[16px] flex gap-2 p-2 mb-6 max-w-[500px] overflow-x-auto">
      <button v-for="tab in tabs" :key="tab" @click="activeTab = tab"
        :class="['px-8 py-2 rounded-[12px] font-semibold text-[14px] whitespace-nowrap', activeTab === tab ? 'bg-[#4169E6] text-white' : 'text-[#4169E6]']">
        {{ tab }}
      </button>
    </div>

    <!-- Tab Content -->
    <div v-if="activeTab === 'Explore'" class="space-y-6">
      <InvestiBoxCard
        v-for="(plan, i) in explorePlans"
        :key="i"
        :icon="plan.icon"
        :title="plan.title"
        :desc="plan.desc"
        :roi="plan.roi"
      />
    </div>
    <div v-else-if="activeTab === 'My Investment'">
      <!-- Placeholder for My Investment tab -->
      <div class="text-[#939393] text-center py-12 text-[14px]">No investments yet.</div>
    </div>
    <div v-else-if="activeTab === 'Liquidated'">
      <!-- Placeholder for Liquidated tab -->
      <div class="text-[#939393] text-center py-12 text-[14px]">No liquidated investments.</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InvestiBoxCard from '~/components/investibox/InvestiBoxCard.vue'

const tabs = ['Explore', 'My Investment', 'Liquidated']
const activeTab = ref('Explore')

const explorePlans = [
  {
    icon: '/assets/images/png/investibox-icon.png',
    title: 'Fixed Deposit Investment',
    desc: 'Pay any amount one time',
    roi: '14%-30%'
  },
  {
    icon: '/assets/images/png/deposit-icon.png',
    title: 'Money Market',
    desc: 'Pay any amount one time',
    roi: '14%-30%'
  },
  {
    icon: '/assets/images/png/investibox-d-icon.png',
    title: 'Agro Investment',
    desc: 'Pay any amount one time',
    roi: '14%-30%'
  }
]
</script> 