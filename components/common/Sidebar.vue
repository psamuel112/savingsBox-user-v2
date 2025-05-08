<template>
    <aside class="w-60 min-h-screen border-r border-gray-200 flex flex-col">
      <!-- Logo -->
      <div class="p-6 flex items-center">
        <div class="text-2xl font-bold text-blue-600">SavingsB<span class="text-blue-500">Ø</span>X</div>
        <button class="ml-2 text-gray-400">
          <ChevronLeft class="h-5 w-5" />
        </button>
      </div>
      
      <div class="border-t border-gray-200 my-2"></div>
      
      <!-- Navigation Menu -->
      <nav class="flex-1 px-4 py-4">
        <ul class="space-y-2">
          <li>
            <router-link to="/" class="flex items-center px-4 py-3 text-blue-600 bg-blue-50 rounded-lg">
              <Home class="h-5 w-5 mr-3" />
              <span>Home</span>
            </router-link>
          </li>
          <li>
            <router-link to="/savingsbox" class="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg">
              <PiggyBank class="h-5 w-5 mr-3" />
              <span>SavingsBox</span>
            </router-link>
          </li>
          <li>
            <router-link to="/investbox" class="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg">
              <TrendingUp class="h-5 w-5 mr-3" />
              <span>InvestBox</span>
            </router-link>
          </li>
          <li>
            <router-link to="/loans" class="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Landmark class="h-5 w-5 mr-3" />
              <span>Loans</span>
            </router-link>
          </li>
          <li>
            <router-link to="/jolly" class="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg">
              <PartyPopper class="h-5 w-5 mr-3" />
              <span>Jolly</span>
            </router-link>
          </li>
          <li>
            <router-link to="/referral" class="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Gift class="h-5 w-5 mr-3" />
              <span>Referral</span>
            </router-link>
          </li>
          <li>
            <router-link to="/account" class="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg">
              <User class="h-5 w-5 mr-3" />
              <span>My Account</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>
  </template>
  
  <script setup>

  </script>
  