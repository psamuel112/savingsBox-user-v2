<template>
  <div class="min-h-screen">
    <div class="">
      <!-- Header -->
      <div class="text-center mb-6">
        <h4 class="text-[24px] font-bold text-[#000831]">InvestiBox</h4>
      </div>
      
      <!-- Tab Navigation -->
      <div class="flex justify-center mb-6">
        <div class="bg-[#F5F5F5] rounded-[20px] p-4 inline-flex">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'px-8 py-2 rounded-[16px] font-bold transition-colors',
              activeTab === tab.id 
                ? 'bg-primary text-white' 
                : 'text-primary hover:bg-gray-200'
            ]"
          >
            {{ tab.name }}
          </button>
        </div>
      </div>
      
      <div v-if="activeTab === 'explore'" class="space-y-6">
        <div  @click="openAboutJolly(jolly)" v-for="jolly in jollies" :key="jolly.id" class="flex items-center bg-white  border  overflow-hidden  cursor-pointer">
          <img :src="jolly.image" class="w-[86px]" />        
          <div class=" py-5 px-2">
            <p class=" font-bold text mb-1">{{jolly.name}}</p>
            <p class="text-[#939393] text-[11px] mb-2">{{jolly.date}}</p>
            <p class="text-primary text-[11px] font-bold">{{jolly.amount}}</p>
          </div>
        </div>
      </div>
      
      <div v-if="activeTab === 'active'" class="space-y-4">     
       sdlvjsdn,j
      </div>
          
 
      <div v-if="activeTab === 'completed'" class="space-y-4">          
      </div>
    </div>
 
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
import { Package, Users, ShoppingCart, Star, Gift, CheckCircle } from 'lucide-vue-next';


const tabs = [
  { id: 'explore', name: 'Explore' },
  { id: 'active', name: 'Active' },
  { id: 'completed', name: 'Completed' }
];

const jollies = ref([
{
  id: 1,
    image:singlePlan,
    name: 'Single Plan 2025',
    date:'3/11 Months',
    amount: '₦10,000'
  },
{
  id: 2,
    image:accessPlan,
    name: 'Access Plan',
    date:'3/11 Months',
    amount: '₦10,000'
  },
  {
    id: 3,
    image:familyPlan,
    name: 'Family Plan 2025',
    date:'3/11 Months',
    amount: '₦10,000'
  },
  {
    id: 4,
    image:easyBuy,
    name: 'Easy Buy 2025',
    date:'3/11 Months',
    amount: '₦10,000'
  },
  {
    id: 5,
    image:ileya,
    name: 'Ileya/Salah Combo',
    date:'3/11 Months',
    amount: '₦10,000'
  },

])

const activeTab = ref('explore');
</script>