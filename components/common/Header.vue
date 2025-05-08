<template>
    <header class="bg-gray-50 p-4 rounded-xl flex items-center justify-between">
      <div class="flex items-center">
        <div class="w-10 h-10 rounded-full overflow-hidden mr-3">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User profile" class="w-full h-full object-cover" />
        </div>
        <div>
          <div class="text-sm text-gray-500">Good Morning,</div>
          <div class="font-medium">John Doe</div>
        </div>
      </div>
      <div>
        <button class="relative p-2">
          <Bell class="h-6 w-6 text-gray-600" />
          <span class="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full"></span>
        </button>
      </div>
    </header>
  </template>
  
  <script setup>

  </script>
  