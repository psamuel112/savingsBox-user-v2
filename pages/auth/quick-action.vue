<template>
  <div class="min-h-screen flex flex-col bg-white relative">
    <!-- Modal Overlay -->
    <div
      v-if="showModal"
      class="fixed inset-0 px-4 z-40 flex items-center justify-center bg-[#23262F]/40"
    >
      <div
        class="bg-white rounded-[10px] shadow-xl max-w-[530px] px-8 py-10 text-left relative"
      >
        <div class="text-[#2F2F2F] font-semibold text-base mb-6 whitespace-pre-line">
          Savingsbox will have 5 types of savings that users can select from
          when creating a savings plan. The description of the savings types
          should be shown to the user every time they want to create a savings
          plan. The types of savings are:<br> 1. Auto Savings (now Auto Box)<br> 2.
          Target Savings (now Target Box)<br> 3. Simple Savings (now Simple Box) <br>4.
          Safe Lock (now Safe Box)
        </div>
        <button
          @click="showModal = false"
          class="absolute right-6 bottom-6 text-[#4169E6] text-base font-medium hover:underline"
        >
          Got It
        </button>
      </div>
    </div>
    <div class="max-w-4xl px-4 mx-auto w-full pt-12">
      <img
        src="../../assets/images/png/blue-logo.png"
        alt="SavingsBox Logo"
        class="h-8 mb-8"
      />
      <h1 class="text-3[12px] md:text-4xl font-bold text-[#23262F] mb-2">
        Welcome! David Simon
      </h1>
      <p class="text-[#999C9F] text-lg mb-8">Explore SavingsBox Features</p>
      <div class="flex flex-col gap-3">
        <div class="grid grid-cols-[60%_40%] gap-3">
          <div
            class="flex flex-col justify-between border rounded-[12px] py-6 px-2 md:px-6 bg-[#FCFCFC] min-h-[110px]"
          >
            <div class="flex items-center justify-between">
              <div>
                <div class="font-semibold text-base text-[#2F2F2F]">
                  SavingsBox
                </div>
                <NuxtLink to="#" class="text-[#4169E6] text-[11px] mt-1 block"
                  >Start Saving</NuxtLink
                >
              </div>
              <div
                class="bg-[#232B55] rounded-full w-10 h-10 flex items-center justify-center"
              >
                <img src="../../assets/images/png/savings-icon.png" />
              </div>
            </div>
          </div>
          <div
            class="flex flex-col justify-between border rounded-[12px] py-6 px-2 md:px-6 bg-[#FCFCFC] min-h-[110px]"
          >
            <div class="flex items-center justify-between">
              <div>
                <div class="font-semibold text-base text-[#2F2F2F]">Jolly</div>
                <NuxtLink to="#" class="text-[#7B3FE4] text-[11px] mt-1 block"
                  >Save to buy</NuxtLink
                >
              </div>
              <div
                class="bg-[#7B3FE4] rounded-full w-10 h-10 flex items-center justify-center"
              >
                <img src="../../assets/images/png/jolly-icon.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-[50%_50%] gap-3">
          <div
            class="flex flex-col justify-between border rounded-[12px] py-6 px-2 md:px-6 bg-[#FCFCFC] min-h-[110px] md:col-span-1"
          >
            <div class="flex items-center justify-between">
              <div>
                <div class="font-semibold text-base text-[#2F2F2F]">Loans</div>
                <NuxtLink to="#" class="text-[#4169E6] text-[11px] mt-1 block"
                  >Apply Now</NuxtLink
                >
              </div>
              <div
                class="bg-[#4169E6] rounded-full w-10 h-10 flex items-center justify-center"
              >
                <img src="../../assets/images/png/loan-icon.png" />
              </div>
            </div>
          </div>
          <div
            class="flex flex-col justify-between border rounded-[12px] py-6 px-2 md:px-6 bg-[#FCFCFC] min-h-[110px] md:col-span-1"
          >
            <div class="flex items-center justify-between">
              <div>
                <div class="font-semibold text-base text-[#2F2F2F]">
                  Investibox
                </div>
                <NuxtLink to="#" class="text-[#4169E6] text-[11px] mt-1 block"
                  >Build your wealth</NuxtLink
                >
              </div>
              <div
                class="bg-[#1B8A6B] rounded-full w-10 h-10 flex items-center justify-center"
              >
                <img src="../../assets/images/png/investibox-icon.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-[40%_60%] gap-3">
          <div
            class="flex flex-col justify-between border rounded-[12px] py-6 px-2 md:px-6 bg-[#FCFCFC] min-h-[110px]"
          >
            <div class="flex items-center justify-between">
              <div>
                <div class="font-semibold text-base text-[#2F2F2F]">
                  My Dashboard
                </div>
                <NuxtLink to="#" class="text-[#4169E6] text-[11px] mt-1 block"
                  >Go to Homepage</NuxtLink
                >
              </div>
              <div
                class="rounded-full w-10 h-10 flex items-center justify-center"
              >
                <img src="../../assets/images/png/dashboard-icon.png" />
              </div>
            </div>
          </div>
          <div
            class="flex flex-col justify-between border rounded-[12px] py-6 px-2 md:px-6 bg-[#FCFCFC] min-h-[110px]"
          >
            <div class="flex items-center justify-between">
              <div>
                <div class="font-semibold text-base text-[#2F2F2F]">
                  Profile
                </div>
                <NuxtLink to="#" class="text-[#4169E6] text-sm mt-1 block"
                  >Manage your Account</NuxtLink
                >
              </div>
              <div
                class="bg-[#4169E6] rounded-full w-10 h-10 flex items-center justify-center"
              >
                <img src="../../assets/images/png/profile-icon.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center mt-8">
        <span class="text-[#808080] text-base">Need Help? Contact Us</span>
        <NuxtLink
          to="#"
          class="text-[#4169E6] text-base font-bold hover:underline"
          >Skip Now</NuxtLink
        >
      </div>
    </div>
    <div>
      <img
        class="absolute bottom-0 pattern-bg"
        src="../../assets/images/png/action-bg.png"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const showModal = ref(true);
</script>
<style scoped>
.action {
  background-image: url("../..assets/images/png/action-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
