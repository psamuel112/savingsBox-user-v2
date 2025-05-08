<template>
    <div>
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Our Products</h2>
      
      <div class="grid grid-cols-2 gap-4">
        <!-- Savings Product -->
        <div class="border border-gray-200 rounded-xl p-5 flex justify-between items-center">
          <div>
            <div class="text-gray-800 font-medium mb-1">Savings</div>
            <div class="text-blue-600">Start Saving</div>
          </div>
          <div class="bg-blue-100 p-3 rounded-full">
            <PiggyBank class="h-6 w-6 text-blue-600" />
          </div>
        </div>
        
        <!-- Jolly Product -->
        <div class="border border-gray-200 rounded-xl p-5 flex justify-between items-center">
          <div>
            <div class="text-gray-800 font-medium mb-1">Jolly</div>
            <div class="text-blue-600">Save to buy</div>
          </div>
          <div class="bg-purple-100 p-3 rounded-full">
            <PartyPopper class="h-6 w-6 text-purple-600" />
          </div>
        </div>
        
        <!-- Loans Product -->
        <div class="border border-gray-200 rounded-xl p-5 flex justify-between items-center">
          <div>
            <div class="text-gray-800 font-medium mb-1">Loans</div>
            <div class="text-blue-600">Apply Now</div>
          </div>
          <div class="bg-blue-100 p-3 rounded-full">
            <Landmark class="h-6 w-6 text-blue-600" />
          </div>
        </div>
        
        <!-- Invest Product -->
        <div class="border border-gray-200 rounded-xl p-5 flex justify-between items-center">
          <div>
            <div class="text-gray-800 font-medium mb-1">Jolly</div>
            <div class="text-blue-600">Build your wealth</div>
          </div>
          <div class="bg-green-100 p-3 rounded-full">
            <TrendingUp class="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

  </script>
  