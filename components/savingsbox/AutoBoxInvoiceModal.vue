<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
    <div class="bg-white rounded-[20px] w-full max-w-[600px] relative p-8">
      <div class="flex items-center justify-between mb-6">
        <button class="w-12 h-12 text-[#A1A1A1] text-2xl" @click="$emit('back')">
          <span>&larr;</span>
        </button>
        <h2 class="text-[24px] font-bold text-center flex-1">Invoice</h2>
        <button class="w-12 h-12 text-[#A1A1A1] text-2xl" @click="$emit('close')">
          <span>&times;</span>
        </button>
      </div>
      <div class="flex justify-center mb-6">
        <div class="bg-[#F5F5F5] rounded-[16px] flex gap-4 p-2">
          <button v-for="tab in tabs" :key="tab" @click="activeTab = tab"
            :class="['px-8 py-2 rounded-[12px] font-semibold', activeTab === tab ? 'bg-[#4169E6] text-white' : 'text-[#4169E6]']">
            {{ tab }}
          </button>
        </div>
      </div>
      <div class="overflow-y-auto max-h-[340px] pr-2 mb-4">
        <div v-for="(invoice, i) in pagedInvoices" :key="i" class="flex items-center justify-between py-4 border-b last:border-b-0">
          <div class="flex items-center gap-3">
            <div class="bg-[#ECF0FC] rounded-[8px] p-2">
              <img src="../../assets/images/png/invoice-icon.png" class="w-7 h-7" />
            </div>
            <div>
              <div class="font-semibold text-[#232323] text-[15px]">{{ invoice.title }}</div>
              <div class="text-[#939393] text-[13px]">{{ invoice.date }}</div>
            </div>
          </div>
          <div class="text-right">
            <div class="font-bold text-[#232323] text-[15px]">₦{{ invoice.amount }}</div>
            <div v-if="invoice.status === 'pending'" class="text-[#4169E6] text-[14px] font-bold cursor-pointer">Pay &rarr;</div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between text-[#4169E6] text-[14px] mt-4">
        <div>
          Rows per page:
          <select v-model="rowsPerPage" class="bg-transparent outline-none">
            <option v-for="n in [6, 10, 15]" :key="n" :value="n">{{ n }}</option>
          </select>
        </div>
        <div>
          {{ startIndex + 1 }}–{{ Math.min(endIndex, filteredInvoices.length) }} of {{ filteredInvoices.length }}
          <button :disabled="page === 1" @click="page--" class="mx-1">&lt;</button>
          <button :disabled="endIndex >= filteredInvoices.length" @click="page++" class="mx-1">&gt;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const tabs = ['All', 'Pending', 'Paid']
const activeTab = ref('All')
const page = ref(1)
const rowsPerPage = ref(6)
const invoices = [
  { title: 'Upcoming Savings Invoice', date: '9 Nov. 2022, 17:30', amount: 1000, status: 'pending' },
  { title: 'Upcoming Savings Invoice', date: '9 Nov. 2022, 17:30', amount: 1000, status: 'pending' },
  { title: 'You have saved N1000', date: '9 Nov. 2022, 17:30', amount: 1000, status: 'paid' },
  { title: 'You have saved N1000', date: '9 Nov. 2022, 17:30', amount: 1000, status: 'paid' },
  { title: 'You have saved N1000', date: '9 Nov. 2022, 17:30', amount: 1000, status: 'paid' },
  { title: 'You have saved N1000', date: '9 Nov. 2022, 17:30', amount: 1000, status: 'paid' },
  { title: 'You have saved N1000', date: '9 Nov. 2022, 17:30', amount: 1000, status: 'paid' },
  { title: 'You have saved N1000', date: '9 Nov. 2022, 17:30', amount: 1000, status: 'paid' },
  { title: 'You have saved N1000', date: '9 Nov. 2022, 17:30', amount: 1000, status: 'paid' },
  { title: 'You have saved N1000', date: '9 Nov. 2022, 17:30', amount: 1000, status: 'paid' },
  { title: 'You have saved N1000', date: '9 Nov. 2022, 17:30', amount: 1000, status: 'paid' },
  { title: 'You have saved N1000', date: '9 Nov. 2022, 17:30', amount: 1000, status: 'paid' },
  { title: 'You have saved N1000', date: '9 Nov. 2022, 17:30', amount: 1000, status: 'paid' },
  { title: 'You have saved N1000', date: '9 Nov. 2022, 17:30', amount: 1000, status: 'paid' },
  { title: 'You have saved N1000', date: '9 Nov. 2022, 17:30', amount: 1000, status: 'paid' }
]
const filteredInvoices = computed(() => {
  if (activeTab.value === 'All') return invoices
  if (activeTab.value === 'Pending') return invoices.filter(i => i.status === 'pending')
  if (activeTab.value === 'Paid') return invoices.filter(i => i.status === 'paid')
  return invoices
})
const startIndex = computed(() => (page.value - 1) * rowsPerPage.value)
const endIndex = computed(() => startIndex.value + rowsPerPage.value)
const pagedInvoices = computed(() => filteredInvoices.value.slice(startIndex.value, endIndex.value))
</script>

<style scoped>
</style> 