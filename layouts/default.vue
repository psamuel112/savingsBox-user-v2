<template>
  <v-app>
    <div class="flex h-screen overflow-hidden">
      <!-- Sidebar (Fixed height and scroll independent) -->
      <Sidebar />

      <!-- Main content area -->
      <div class="flex flex-col flex-1 overflow-hidden">
        <!-- Header (Fixed height) -->
        <div class="flex-shrink-0 px-5 pt-5">
          <Header />
        </div>

        <!-- Page content (Scrollable) -->
        <div class="flex-1 overflow-y-auto px-5 py-4">
          <NuxtPage />
        </div>
      </div>
    </div>
  </v-app>
</template>

  
  <script setup>
  import Sidebar from '~/components/common/Sidebar.vue';
  import Header from '~/components/common/Header.vue';
  </script>
  