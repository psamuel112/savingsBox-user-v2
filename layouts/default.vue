<template>
    <div class="flex min-h-screen bg-white">
      <!-- Sidebar -->
      <Sidebar />
      
      <!-- Main Content -->
      <div class="flex-1 p-6 overflow-hidden">
        <!-- Header -->
        <Header />
        
        <!-- Page Content -->
        <div class="mt-8">
          <NuxtPage />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Sidebar from '~/components/common/Sidebar.vue';
  import Header from '~/components/common/Header.vue';
  </script>
  