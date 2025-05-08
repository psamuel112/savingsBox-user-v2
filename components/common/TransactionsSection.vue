<template>
    <div>
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Recent</h2>
      
      <!-- Tabs -->
      <div class="bg-gray-100 rounded-xl p-2 flex mb-4">
        <button 
          :class="[
            'flex-1 py-2 px-4 rounded-lg text-center',
            activeTab === 'transactions' ? 'bg-blue-600 text-white' : 'text-gray-600'
          ]"
          @click="activeTab = 'transactions'"
        >
          Recent Transactions
        </button>
        <button 
          :class="[
            'flex-1 py-2 px-4 rounded-lg text-center',
            activeTab === 'payments' ? 'bg-blue-600 text-white' : 'text-gray-600'
          ]"
          @click="activeTab = 'payments'"
        >
          Upcoming Payment
        </button>
      </div>
      
      <!-- Transactions List -->
      <div v-if="activeTab === 'transactions'" class="space-y-4">
        <div v-for="(transaction, index) in transactions" :key="index" class="flex items-center justify-between py-3">
          <div class="flex items-center">
            <div class="bg-blue-100 p-2 rounded-lg mr-3">
              <Wallet class="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <div class="font-medium">{{ transaction.title }}</div>
              <div class="text-sm text-gray-500">{{ transaction.date }}</div>
            </div>
          </div>
          <div class="font-medium">₦{{ transaction.amount }}</div>
        </div>
      </div>
      
      <!-- Upcoming Payments -->
      <div v-if="activeTab === 'payments'" class="space-y-4">
        <div v-for="(payment, index) in payments" :key="index" class="flex items-center justify-between py-3">
          <div class="flex items-center">
            <div class="bg-blue-100 p-2 rounded-lg mr-3">
              <Wallet class="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <div class="font-medium">{{ payment.title }}</div>
              <div class="text-sm text-gray-500">{{ payment.date }}</div>
            </div>
          </div>
          <div class="flex items-center">
            <div class="font-medium mr-2">₦{{ payment.amount }}</div>
            <button class="text-blue-600 font-medium flex items-center">
              Pay
              <ChevronRight class="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';

  
  const activeTab = ref('transactions');
  
  const transactions = [
    { title: 'You have saved N1000', date: '9 Nov. 2022, 17:30', amount: '1000' },
    { title: 'You have saved N1000', date: '9 Nov. 2022, 17:30', amount: '1000' },
    { title: 'You have saved N1000', date: '9 Nov. 2022, 17:30', amount: '1000' }
  ];
  
  const payments = [
    { title: 'Upcoming Savings Invoice', date: '9 Nov. 2022, 17:30', amount: '1000' },
    { title: 'Upcoming Savings Invoice', date: '9 Nov. 2022, 17:30', amount: '1000' }
  ];
  </script>
  