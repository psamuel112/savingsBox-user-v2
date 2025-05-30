<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
      <div class="bg-white rounded-2xl w-full max-w-[428px] relative shadow-xl max-h-[90vh] overflow-y-auto">
        <!-- Close button -->
        <button 
          @click="closeModal" 
          class="absolute top-4 right-4 text-primary hover:text-blue-800 z-10"
        >
          <X class="w-5 h-5" />
        </button>
        
        <!-- Modal content -->
        <div class="p-6 pt-12">
          <!-- Header -->
          <div class="mb-6">
            <h4 class="text-[24px] font-bold text-[#232323] text-center mb-2">Create Jolly Plan</h4>
            <!-- Progress bar -->
            <div class="flex items-center mb-2">
              <div class="flex-1 bg-[#F5F5F5] rounded-[12px] h-2 mr-3">
                <div class="bg-[#61CA61] h-2 rounded-[12px]" style="width: 70%"></div>
              </div>
              <span class="text-small font-bold text-[#000000]">70%</span>
            </div>
          </div>
          <!-- Choose Items Section -->
          <div class="mb-6">
            <p class=" font-bold text-light-gray mb-4">Choose your Items</p>     
            <div class="space-y-4">
              <!-- Generator -->
              <div class="flex items-center p-2 border  rounded-[8px]">
                <input 
                  type="checkbox" 
                  v-model="selectedItems.generator"
                  class="w-5 h-5 text-primary border-[#B8B8B8] rounded focus:ring-blue-500 mr-3"
                />
                <div class="mr-2">
                  <img src="../../assets/images/png/generator.png" />
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text">Generator</h4>
                  <p class="text-small text-[#939393]">Description</p>
                </div>
                <div class="text-right">
                  <p class="font-bold text-primary">₦10,000</p>
                  <p class="text-xs text-[#939393]">
                    <span class="line-through">₦12,000</span>
                    <span class="text-primary ml-1">20% Off</span>
                  </p>
                </div>
              </div>
              
              <!-- Electric Fan -->
              <div class="flex items-center p-2 border  rounded-[8px]">
                <input 
                  type="checkbox" 
                  v-model="selectedItems.electricFan1"
                  class="w-5 h-5 text-primary border-gray-300 rounded focus:ring-blue-500 mr-3"
                />
                <div class="mr-2">
                  <img src="../../assets/images/png/bed.png" />
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-gray-900">Electric Fan</h4>
                  <p class="text-small text-[#939393]">Description</p>
                </div>
                <div class="text-right">
                  <p class="font-bold text-primary">₦10,000</p>
                  <p class="text-xs text-[#939393]">
                    <span class="line-through">₦12,000</span>
                    <span class="text-primary ml-1">20% Off</span>
                  </p>
                </div>
              </div>
              
              <!-- Mattress & Bed -->
              <div class="flex items-center p-2 border  rounded-[8px]">
                <input 
                  type="checkbox" 
                  v-model="selectedItems.mattressBed"
                  class="w-5 h-5 text-primary border-gray-300 rounded focus:ring-blue-500 mr-3"
                />
                <div class="mr-2">
                  <img src="../../assets/images/png/fan.png" />
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-gray-900">Mattress & Bed</h4>
                  <p class="text-small text-[#939393]">Description</p>
                </div>
                <div class="text-right">
                  <p class="font-bold text-primary">₦10,000</p>
                  <p class="text-xs text-[#939393]">
                    <span class="line-through">₦12,000</span>
                    <span class="text-primary ml-1">20% Off</span>
                  </p>
                </div>
              </div>
              
              <!-- Provisions (Selected) -->
              <div class="flex items-center p-2 border rounded-[8px]">
                <input 
                  type="checkbox" 
                  v-model="selectedItems.provisions1"
                  class="w-5 h-5 text-primary border-gray-300 rounded focus:ring-blue-500 mr-3"
                  checked
                />
                <div class="mr-2">
                  <img src="../../assets/images/png/generator.png" />
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-gray-900">Provisions</h4>
                  <p class="text-small text-[#939393]">Description</p>
                </div>
                <div class="text-right">
                  <p class="font-bold text-primary">₦10,000</p>
                  <p class="text-xs text-[#939393]">
                    <span class="line-through">₦12,000</span>
                    <span class="text-primary ml-1">20% Off</span>
                  </p>
                </div>
              </div>
              
              <!-- Electric Fan (Second) -->
              <div class="flex items-center p-2 border  rounded-[8px]">
                <input 
                  type="checkbox" 
                  v-model="selectedItems.electricFan2"
                  class="w-5 h-5 text-primary border-gray-300 rounded focus:ring-blue-500 mr-3"
                />
                <div class="mr-2">
                  <img src="../../assets/images/png/bed.png" />
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-gray-900">Electric Fan</h4>
                  <p class="text-small text-[#939393]">Description</p>
                </div>
                <div class="text-right">
                  <p class="font-bold text-primary">₦10,000</p>
                  <p class="text-xs text-[#939393]">
                    <span class="line-through">₦12,000</span>
                    <span class="text-primary ml-1">20% Off</span>
                  </p>
                </div>
              </div>
              
              <!-- Provisions (Second) -->
              <div class="flex items-center p-2 border  rounded-[8px]">
                <input 
                  type="checkbox" 
                  v-model="selectedItems.provisions2"
                  class="w-5 h-5 text-primary border-gray-300 rounded focus:ring-blue-500 mr-3"
                />
                <div class="mr-2">
                  <img src="../../assets/images/png/fan.png" />
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-gray-900">Provisions</h4>
                  <p class="text-small text-[#939393]">Description</p>
                </div>
                <div class="text-right">
                  <p class="font-bold text-primary">₦10,000</p>
                  <p class="text-xs text-[#939393]">
                    <span class="line-through">₦12,000</span>
                    <span class="text-primary ml-1">20% Off</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Summary -->
          <div class="border-t pt-4 mb-6">
            <div class="flex justify-between items-center mb-2">
              <span class="font-semibold text-[14px] text-gray-900">Total</span>
              <span class="font-bold text-primary">₦410,000</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="font-semibold text-[14px] text-gray-900">Amount to Pay Per Month</span>
              <span class="font-bold text-primary ">₦35,000</span>
            </div>
          </div>
          
          <!-- Continue Button -->
          <button 
    @click="emit('continue')"
    class="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-[8px] transition-colors"
  >
    Continue
  </button>
  
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { X } from 'lucide-vue-next';
  
  const emit = defineEmits(['close', 'continue']);
  function triggerContinue() {
  console.log('Button clicked, emitting continue')
  emit('continue')
}
  const selectedItems = ref({
    generator: false,
    electricFan1: false,
    mattressBed: false,
    provisions1: true, // Pre-selected as shown in the image
    electricFan2: false,
    provisions2: false
  });
  
  const continueToNext = () => {
    emit('continue');
  };
  
  const closeModal = () => {
    emit('close');
  };
  </script>