<template>
  <div class="min-h-screen text-white p-4">
    <!-- Header with back button -->
    <div class="flex items-center mb-8">
      <button class="bg-blue-600 text-white rounded-full p-3 mr-4">
        <ChevronLeft class="w-5 h-5" />
      </button>
      <h1 class="text-2xl font-bold text-blue-600">Transactions</h1>
    </div>
    
    <!-- Tab Navigation -->
    <div class="mb-6">
      <div class="bg-gray-800 rounded-full p-1 inline-flex">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            'px-8 py-2 rounded-full text-sm font-medium transition-colors',
            activeTab === tab.id 
              ? 'bg-blue-600 text-white' 
              : 'text-blue-600 hover:bg-gray-700'
          ]"
        >
          {{ tab.name }}
        </button>
      </div>
    </div>
    
    <!-- Search and Actions -->
    <div class="flex flex-col md:flex-row gap-4 mb-6">
      <div class="relative flex-grow">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search class="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by Plan Name, and duration"
          class="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div class="flex gap-3">
        <button class="flex items-center justify-center px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-blue-600 hover:bg-gray-700">
          <span>Generate e-Signed Statement</span>
          <ChevronRight class="ml-2 h-5 w-5" />
        </button>
        
        <button class="flex items-center justify-center px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700">
          <Filter class="mr-2 h-5 w-5" />
          <span>Filter</span>
          <ChevronDown class="ml-1 h-4 w-4" />
        </button>
        
        <button class="flex items-center justify-center px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700">
          <FileExport class="mr-2 h-5 w-5" />
          <span>Export</span>
        </button>
      </div>
    </div>
    
    <!-- Transactions Table -->
    <div class="overflow-x-auto">
      <table class="w-full">
        <!-- Table Header -->
        <thead class="bg-gray-800 text-left">
          <tr>
            <th class="p-4">
              <input 
                type="checkbox" 
                class="rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500"
                @change="toggleSelectAll"
                :checked="selectAll"
              />
            </th>
            <th class="p-4 font-medium text-gray-300">
              <div class="flex items-center">
                <span>Transactions</span>
                <ChevronDown class="ml-1 h-4 w-4" />
              </div>
            </th>
            <th class="p-4 font-medium text-gray-300">
              <div class="flex items-center">
                <span>Amount</span>
                <ChevronDown class="ml-1 h-4 w-4" />
              </div>
            </th>
            <th class="p-4 font-medium text-gray-300">
              <div class="flex items-center">
                <span>Type</span>
                <ChevronDown class="ml-1 h-4 w-4" />
              </div>
            </th>
            <th class="p-4 font-medium text-gray-300">
              <div class="flex items-center">
                <span>Created at</span>
                <ChevronDown class="ml-1 h-4 w-4" />
              </div>
            </th>
            <th class="p-4 font-medium text-gray-300">Action</th>
          </tr>
        </thead>
        
        <!-- Table Body -->
        <tbody class="divide-y divide-gray-800">
          <tr v-for="(transaction, index) in transactions" :key="index" class="hover:bg-gray-900">
            <td class="p-4">
              <input 
                type="checkbox" 
                class="rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500"
                v-model="transaction.selected"
              />
            </td>
            <td class="p-4 text-gray-300">{{ transaction.name }}</td>
            <td class="p-4 text-gray-300">₦{{ transaction.amount.toLocaleString() }}</td>
            <td class="p-4 text-gray-300">{{ transaction.type }}</td>
            <td class="p-4 text-gray-300">{{ transaction.date }}</td>
            <td class="p-4">
              <button class="text-blue-600 hover:text-blue-500">Download</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- Pagination -->
    <div class="flex items-center justify-between mt-6 text-gray-300">
      <div class="flex items-center">
        <span class="mr-2">Rows per page:</span>
        <div class="relative">
          <select 
            v-model="rowsPerPage"
            class="appearance-none bg-transparent text-blue-600 pr-8 focus:outline-none"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          <ChevronDown class="absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-600" />
        </div>
      </div>
      
      <div class="flex items-center">
        <span class="mr-4">1-10 of 15</span>
        <div class="flex space-x-2">
          <button class="p-1 text-blue-600 hover:text-blue-500">
            <ChevronLeft class="h-5 w-5" />
          </button>
          <button class="p-1 text-blue-600 hover:text-blue-500">
            <ChevronRight class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ChevronLeft, ChevronRight, ChevronDown, Search, Filter } from 'lucide-vue-next';

const tabs = [
  { id: 'all', name: 'All' },
  { id: 'credit', name: 'Credit' },
  { id: 'debit', name: 'Debit' }
];

const activeTab = ref('all');
const rowsPerPage = ref(10);
const selectAll = ref(false);

const transactions = ref([
  { 
    name: 'Savings Top Up', 
    amount: 100000, 
    type: 'Debit', 
    date: '22, Sept. 2022', 
    selected: false 
  },
  { 
    name: 'Transfer', 
    amount: 100000, 
    type: 'Debit', 
    date: '22, Sept. 2022', 
    selected: false 
  },
  { 
    name: 'Loan Repayment', 
    amount: 100000, 
    type: 'Debit', 
    date: '22, Sept. 2022', 
    selected: false 
  }
]);

const toggleSelectAll = () => {
  selectAll.value = !selectAll.value;
  transactions.value.forEach(transaction => {
    transaction.selected = selectAll.value;
  });
};
</script>