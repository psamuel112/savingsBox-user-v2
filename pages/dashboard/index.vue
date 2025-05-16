<template>
    <div>
      <!-- Dashboard Header -->
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-[24px] font-bold text-[#000831]"><h4>My Dashboard</h4></h1>
        <div class="text-[#565656]"><p>WalletID:  <span class="text-primary font-bold">@Johndoe</span></p>
        </div>
      </div>
      
      <!-- Wallet and Blog Cards (Side by Side) -->
      <div class="flex   gap-6 mb-6">
        <WalletCard class="w-1/2" @fund-wallet="openFundWalletModal" @send-money="openSendMoneyModal" @withdraw="openWithdrawModal" />
        <BlogCard class="w-1/2" />
      </div>
      
      <!-- Modals -->
      <FundWalletModal v-if="modalStep === 'fund-wallet'" @close="closeModal" @fund-virtual="openFundWithVirtualModal" @fund-card="openFundWithCardModal" />
      <FundWithVirtualAccountModal v-if="modalStep === 'fund-virtual'" @close="closeModal" @back="openFundWalletModal" />
      <FundWithCardModal v-if="modalStep === 'fund-card'" @close="closeModal" @back="openFundWalletModal" />
      <SendMoneyModal v-if="modalStep === 'send-money'" @close="closeModal" @verify="openVerifySendMoneyModal" />
      <VerifySendMoneyModal v-if="modalStep === 'verify-send-money'" @close="closeModal" @fund-wallet="openFundWalletModal" @send-success="openSendSuccessModal" />
      <SendSuccessModal v-if="modalStep === 'send-success'" @close="closeModal" @view-transaction="openTransactionModal" />
      <TransactionModal v-if="modalStep === 'transaction'" @close="closeModal" />
      <WithdrawalModal v-if="modalStep === 'withdraw'" @close="closeModal" @withdraw="closeModal" />
      
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
  import { ref } from 'vue';
  import WalletCard from '~/components/dashboard/WalletCard.vue';
  import BlogCard from '~/components/dashboard/BlogCard.vue';
  import ProductsGrid from '~/components/dashboard/ProductsGrid.vue';
  import ReferralCard from '~/components/dashboard/ReferralCard.vue';
  import TransactionsSection from '~/components/dashboard/TransactionsSection.vue';
  import FundWalletModal from '~/components/dashboard/FundWalletModal.vue';
  import FundWithVirtualAccountModal from '~/components/dashboard/FundWithVirtualAccountModal.vue';
  import FundWithCardModal from '~/components/dashboard/FundWithCardModal.vue';
  import SendMoneyModal from '~/components/dashboard/SendMoneyModal.vue';
  import VerifySendMoneyModal from '~/components/dashboard/VerifySendMoneyModal.vue';
  import SendSuccessModal from '~/components/dashboard/SendSuccessModal.vue';
  import TransactionModal from '~/components/dashboard/TransactionModal.vue';
  import WithdrawalModal from '~/components/dashboard/WithdrawalModal.vue';

  const modalStep = ref(null);

  function openFundWalletModal() {
    modalStep.value = 'fund-wallet';
  }
  function openFundWithVirtualModal() {
    modalStep.value = 'fund-virtual';
  }
  function openFundWithCardModal() {
    modalStep.value = 'fund-card';
  }
  function openSendMoneyModal() {
    modalStep.value = 'send-money';
  }
  function openVerifySendMoneyModal() {
    modalStep.value = 'verify-send-money';
  }
  function openSendSuccessModal() {
    modalStep.value = 'send-success';
  }
  function openTransactionModal() {
    modalStep.value = 'transaction';
  }
  function openWithdrawModal() {
    modalStep.value = 'withdraw';
  }
  function closeModal() {
    modalStep.value = null;
  }

//   definePageMeta({
//   layout: 'default-layout'
// })
  </script>
  