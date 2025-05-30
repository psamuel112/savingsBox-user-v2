<template>
  <div class="min-h-screen">
    <div class="">
      <!-- Header -->
      <div class="text-center mb-6">
        <h4 class="text-[24px] font-bold text-[#000831]">Jolly</h4>
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
      
      <!-- Explore Tab Content -->
      <div v-if="activeTab === 'explore'" class="space-y-6">
        <!-- Single Plan 2025 -->
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
        <ActiveJolly />
      </div>
      
      <div v-if="activeTab === 'gifted'" class="space-y-4">          
      </div>     
 
      <div v-if="activeTab === 'completed'" class="space-y-4">          
      </div>
    </div>
   <v-dialog v-model="aboutJolly">
       <about-jolly  :jolly="selectedJolly" @continue="handleAboutContinue" />
   </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
import { Package, Users, ShoppingCart, Star, Gift, CheckCircle } from 'lucide-vue-next';
import AboutJolly from '~/components/jolly/AboutJolly.vue';
import singlePlan from "../../assets/images/png/single-plan.png";
import accessPlan from "../../assets/images/png/access-plan.png";
import familyPlan from "../../assets/images/png/family-plan.png";
import easyBuy from "../../assets/images/png/easybuy.png";
import ileya from "../../assets/images/png/ileya.png";
import ActiveJolly from '~/components/jolly/ActiveJolly.vue';
const aboutJolly = ref(false)
const selectedJolly = ref(null)
const tabs = [
  { id: 'explore', name: 'Explore' },
  { id: 'active', name: 'Active' },
  { id: 'gifted', name: 'Gifted' },
  { id: 'completed', name: 'Completed' }
];
function openAboutJolly(jolly) {
  selectedJolly.value = jolly
  aboutJolly.value = true
}

function handleAboutContinue() {
  console.log('Navigating to:', selectedJolly.value?.id);
  aboutJolly.value = false

  if (selectedJolly.value?.id) {
    router.push(`/jolly/${selectedJolly.value.id}`)
  }
}

const activeTab = ref('explore');

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
// Active Plans Data
const activePlans = ref([
  {
    id: 1,
    name: 'Family Plan 2025',
    startDate: '15 Jan. 2024',
    amount: 10000,
    progress: 45,
    paidMonths: 5,
    totalMonths: 11,
    nextPayment: '15 Feb. 2024',
    icon: Users,
    bgClass: 'bg-gradient-to-r from-blue-600 to-blue-800'
  },
  {
    id: 2,
    name: 'Single Plan 2025',
    startDate: '1 Feb. 2024',
    amount: 10000,
    progress: 27,
    paidMonths: 3,
    totalMonths: 11,
    nextPayment: '1 Mar. 2024',
    icon: Package,
    bgClass: 'bg-gradient-to-r from-yellow-400 to-orange-500'
  }
]);

// Gifted Plans Data
const giftedPlans = ref([
  {
    id: 1,
    name: 'Easy Buy 2025',
    person: 'Sarah Johnson',
    amount: 10000,
    date: '10 Dec. 2023',
    type: 'received',
    icon: ShoppingCart,
    bgClass: 'bg-gradient-to-r from-yellow-400 to-orange-500'
  },
  {
    id: 2,
    name: 'Family Plan 2025',
    person: 'Michael Adebayo',
    amount: 10000,
    date: '5 Nov. 2023',
    type: 'sent',
    icon: Users,
    bgClass: 'bg-gradient-to-r from-blue-600 to-blue-800'
  }
]);

// Completed Plans Data
const completedPlans = ref([
  {
    id: 1,
    name: 'Single Plan 2024',
    completedDate: '20 Dec. 2023',
    amount: 10000,
    duration: 11,
    rewards: ['Bag of Rice (50kg)', 'Cooking Oil (5L)', 'Tomatoes (1 basket)', 'Meat (2kg)'],
    icon: Package,
    bgClass: 'bg-gradient-to-r from-yellow-400 to-orange-500'
  },
  {
    id: 2,
    name: 'Ileya/Salah Combo 2023',
    completedDate: '15 Jun. 2023',
    amount: 10000,
    duration: 8,
    rewards: ['Ram (Medium size)', 'Dates (2kg)', 'Rice (25kg)', 'Clothing allowance'],
    icon: Star,
    bgClass: 'bg-gradient-to-r from-purple-600 to-purple-800'
  }
]);
</script>