<template>
    <div class="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4">
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
            <h4 class="text-[24px] mb-6">Add your Card</h4>
            <p class="text-[#999C9F]">Enter your Card Details</p>
          </div>
          <form @submit.prevent="addCard">
            <!-- Card Number -->
            <div class="mb-4">
              <label for="cardNumber" class="label mb-2">Card Number</label>
              <div class="relative">
                <input
                  id="cardNumber"
                  v-model="cardNumber"
                  type="text"
                  class="w-full input focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  placeholder="Enter card number"
                />
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <CreditCard class="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
            <!-- Expiry Date and CVV -->
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label for="expiryDate" class="label mb-2">Expiry Date</label>
                <div class="relative">
                  <input
                    id="expiryDate"
                    v-model="expiryDate"
                    type="text"
                    class="w-full input focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    placeholder="MM/YY"
                  />
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Calendar class="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
              <div>
                <label for="cvv" class="label mb-2">CVV</label>
                <div class="relative">
                  <input
                    id="cvv"
                    v-model="cvv"
                    type="password"
                    class="w-full input focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    placeholder="123"
                  />
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Lock class="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            <!-- Name on card -->
            <div class="mb-6">
              <label for="cardholderName" class="label mb-2">Name on card</label>
              <input
                id="cardholderName"
                v-model="cardholderName"
                type="text"
                class="w-full input focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter name as on card"
              />
            </div>
            
            <!-- Security message -->
            <div class="text-center mb-6">
              <div class="flex justify-center items-center mb-2">
                <div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <Shield class="w-4 h-4 text-blue-600" />
                </div>
                <span class="ml-2 text-[#6E6E6E] text-sm font-[400]">Secured Payment</span>
              </div>
              <p class="text-[#6E6E6E] text-sm">
                Your card details are secured and protected
                <br>
                PCI-DSS COMPLIANT
              </p>
            </div>
            <!-- Add Card Button -->
            <button 
              type="submit" 
              class="w-full bg-primary hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Add Card
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { X, CreditCard, Calendar, Lock, Shield } from 'lucide-vue-next';
  
  const props = defineProps({
    isOpen: {
      type: Boolean,
      default: true
    }
  });
  
  const emit = defineEmits(['close', 'add-card']);
  
  // Pre-filled values to match the image
  const cardNumber = ref('5678930883838');
  const expiryDate = ref('10/24');
  const cvv = ref('778');
  const cardholderName = ref('John Doe');
  
  const addCard = () => {
    const cardData = {
      cardNumber: cardNumber.value,
      expiryDate: expiryDate.value,
      cvv: cvv.value,
      cardholderName: cardholderName.value
    };
    
    emit('add-card', cardData);
    closeModal();
  };
  
  const closeModal = () => {
    emit('close');
  };
  </script>