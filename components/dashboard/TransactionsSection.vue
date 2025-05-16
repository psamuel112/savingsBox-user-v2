<template>
    <div>
      <h2 class="text-[20px] font-bold text-[#2F2F2F] mb-3">Recent</h2>
      
      <!-- Tabs -->
      <div class="bg-[#F5F5F5] rounded-[20px] p-4 flex mb-5">
        <button 
          :class="[
            'flex-1 py-2 px-4 rounded-[16px] font-bold text-[20px] text-center',
            activeTab === 'transactions' ? 'bg-primary text-white' : 'text-primary'
          ]"
          @click="activeTab = 'transactions'"
        >
          Recent Transactions
        </button>
        <button 
          :class="[
            'flex-1 py-2 px-4 rounded-[16px] font-bold text-[20px] text-center',
            activeTab === 'payments' ? 'bg-primary text-white' : 'text-primary'
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
            <div class=" w-10 h-10  mr-2">
              <img :src="transaction.icon" alt="">
            </div>
            <div>
              <div ><p class="text-[14px] text-[#2F2F2F]">{{ transaction.title }}</p></div>
              <div ><p class="text-sm text-[#565656]">{{ transaction.date }}</p></div>
            </div>
          </div>
          <div class="font-bold mr-2 text-[#565656]">₦{{ transaction.amount }}</div>
        </div>
      </div>
      
      <!-- Upcoming Payments -->
      <div v-if="activeTab === 'payments'" class="space-y-4">
        <div v-for="(payment, index) in payments" :key="index" class="flex items-center justify-between py-3">
          <div class="flex items-center">
            <div class="w-10 h-10   mr-2">
              <img :src="payment.icon" alt="">
            </div>
            <div>
              <div><p class="text-[14px] text-[#2F2F2F]">{{ payment.title }}</p></div>
              <div class="text-sm text-[#565656]"><p>{{ payment.date }}</p></div>
            </div>
          </div>
          <div class="flex-col items-center">
            <div><p class="font-bold mr-2 text-[#565656]">₦{{ payment.amount }}</p></div>
            <button class="text-primary font-bold text-sm flex items-center">
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
  import depositIcon from '@/assets/images/png/deposit-icon.png';
  import interestIcon from '@/assets/images/png/interest-icon.png';
import upcomingIcon from '@/assets/images/png/upcoming-icon.png';
  
  const activeTab = ref('transactions');
  
  const transactions = [
    
    { title: 'Deposit from wallet', date: '9 Nov. 2022, 17:30', amount: '1000',icon: depositIcon },
    { title: 'Deposit from wallet', date: '9 Nov. 2022, 17:30', amount: '1000',icon: depositIcon },
    { title: 'Interest Earned', date: '9 Nov. 2022, 17:30', amount: '1000', icon: interestIcon }
  ];
  
  const payments = [
    { title: 'Upcoming Savings Invoice', date: '9 Nov. 2022, 17:30', amount: '1000', icon: upcomingIcon },
    { title: 'Upcoming Savings Invoice', date: '9 Nov. 2022, 17:30', amount: '1000', icon: upcomingIcon }
  ];
  </script>
  