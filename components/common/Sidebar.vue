<template>
  <!-- Desktop Sidebar -->
  <aside :class="[
    'min-h-screen border-r border-gray-200 flex flex-col transition-all duration-300 hidden md:flex',
    isCollapsed ? 'w-20' : 'w-60'
  ]">
    <!-- Logo -->
    <div class="p-6 flex items-center justify-between">
      <img v-if="!isCollapsed" src="../../assets/images/png/Savings-Box logo__blue 1.png" alt="" class="w-[163px]">
      <img v-else src="../../assets/images/png/Savings-Box logo__blue 1.png" alt="" class="w-10">
      <button @click="toggleSidebar" class="text-gray-400 hover:text-gray-600">
        <ChevronLeft :class="['h-5 w-5 transition-transform duration-300', isCollapsed ? 'rotate-180' : '']" />
      </button>
    </div>
    <div class="border-t border-gray-200 my-2"></div>
    <!-- Navigation Menu -->
    <nav class="flex-1 px-4 py-4">
      <ul class="space-y-2">
        <li v-for="item in menuItems" :key="item.path">
          <router-link :to="item.path" 
            :class="[
              'flex items-center px-4 py-3 rounded-lg',
              $route.path === item.path ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-100'
            ]"
          >
            <component :is="item.icon" class="h-5 w-5" :class="isCollapsed ? '' : 'mr-3'" />
            <span v-if="!isCollapsed">{{ item.label }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>

  <!-- Mobile Menu Button -->
  <button @click="toggleMobileMenu" class="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-gray-600 hover:bg-gray-100">
    <Menu class="h-6 w-6" />
  </button>

  <!-- Mobile Menu Overlay -->
  <div v-if="isMobileMenuOpen" 
    class="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
    @click="isMobileMenuOpen = false"
  ></div>

  <!-- Mobile Menu Sidebar -->
  <div :class="[
    'md:hidden fixed top-0 left-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out',
    isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
  ]">
    <div class="p-6 relative">
      <!-- Close Button -->
      <button @click="isMobileMenuOpen = false" class="absolute top-6 right-6 text-gray-600 hover:text-gray-800">
        <X class="h-6 w-6" />
      </button>
      
      <!-- Logo -->
      <img src="../../assets/images/png/Savings-Box logo__blue 1.png" alt="" class="w-[163px] mb-8">
      
      <!-- Navigation -->
      <nav>
        <ul class="space-y-2">
          <li v-for="item in menuItems" :key="item.path">
            <router-link :to="item.path" 
              @click="isMobileMenuOpen = false"
              :class="[
                'flex items-center px-4 py-3 rounded-lg',
                $route.path === item.path ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-100'
              ]"
            >
              <component :is="item.icon" class="h-5 w-5 mr-3" />
              <span>{{ item.label }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { 
  ChevronLeft, 
  Home, 
  PiggyBank, 
  TrendingUp, 
  Landmark, 
  PartyPopper, 
  Gift, 
  User,
  Menu,
  X
} from 'lucide-vue-next';

const isCollapsed = ref(false);
const isMobileMenuOpen = ref(false);

const menuItems = [
  { path: '/dashboard', label: 'Home', icon: Home },
  { path: '/savingsbox', label: 'SavingsBox', icon: PiggyBank },
  { path: '/investibox', label: 'InvestiBox', icon: TrendingUp },
  { path: '/loans', label: 'Loans', icon: Landmark },
  { path: '/jolly', label: 'Jolly', icon: PartyPopper },
  { path: '/referral', label: 'Referral', icon: Gift },
  { path: '/account', label: 'My Account', icon: User }
];

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
/* Add any additional styles here */
</style>