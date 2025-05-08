<template>
    <div>
      <!-- Dashboard Header -->
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-bold text-gray-800">My Dashboard</h1>
        <div class="text-gray-600">
          WalletID: <span class="text-blue-600 font-medium">@Johndoe</span>
        </div>
      </div>
      
      <!-- Wallet and Blog Cards (Side by Side) -->
      <div class="flex   gap-6 mb-6">
        <WalletCard class="w-1/2" />
        <BlogCard class="w-1/2" />
      </div>
      
      <!-- Products, Referral and Transactions (Side by Side) -->
      <div class="flex gap-6">
        <!-- Products and Referral (Column) -->
        <div class="flex flex-col gap-6 w-1/2">
          <ProductsGrid />
          <ReferralCard />
        </div>
        
        <!-- Transactions Section -->
        <div class="w-1/2">
          <TransactionsSection />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import WalletCard from '~/components/common/WalletCard.vue';
  import BlogCard from '~/components/common/BlogCard.vue';
  import ProductsGrid from '~/components/common/ProductsGrid.vue';
  import ReferralCard from '~/components/common/ReferralCard.vue';
  import TransactionsSection from '~/components/common/TransactionsSection.vue';
  definePageMeta({
  layout: 'default-layout'
})
  </script>
  