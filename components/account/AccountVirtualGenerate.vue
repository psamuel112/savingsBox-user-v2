<template>
  <div class="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-2xl w-full max-w-md relative shadow-xl">
      <!-- Close button -->
      <button 
        @click="closeModal" 
        class="absolute top-4 right-4 text-blue-600 hover:text-blue-800"
      >
        <X class="w-5 h-5" />
      </button>
      
      <!-- Modal content -->
      <div class="p-6 pt-12">
        <!-- Header -->
        <div class="text-center mb-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Generate Virtual Account</h2>
          <p class="text-gray-500 text-sm px-4">
            Enter the information below to generate virtual account. This account will be used to fund your wallet through bank transfers
          </p>
        </div>
        
        <form @submit.prevent="generateAccount">
          <!-- Bank Selection -->
          <div class="mb-6">
            <label for="bank" class="block text-gray-700 mb-2">Choose a Bank</label>
            <div class="relative">
              <select
                id="bank"
                v-model="selectedBank"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
              >
                <option value="gtb">GTB (Guarantee Trust Bank)</option>
                <option value="first-bank">First Bank</option>
                <option value="zenith">Zenith Bank</option>
                <option value="access">Access Bank</option>
                <option value="uba">UBA</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown class="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </div>
          
          <!-- Generate Button -->
          <button 
            type="submit" 
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Generate Virtual Account
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { X, ChevronDown } from 'lucide-vue-next';

const emit = defineEmits(['close', 'generate-account']);

const selectedBank = ref('gtb');

const generateAccount = () => {
  emit('generate-account', {
    bank: selectedBank.value
  });
};

const closeModal = () => {
  emit('close');
};
</script>