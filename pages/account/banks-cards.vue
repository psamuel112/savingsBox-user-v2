<template>
  <div class="mx-auto p-4">
    <div class="flex items-center mb-8">
      <button class="text-blue-600 mr-4">
        <ChevronLeft class="w-5 h-5" />
      </button>
      <h1 class="text-2xl font-bold text-gray-900">Banks and Card</h1>
    </div>
    <div class="flex gap-4 justify-center mb-5">
      <div class="bg-[#F5F5F5] rounded-[20px] p-4 inline-flex">
        <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="[
          'px-8 py-2 rounded-[16px] text-sm font-bold transition-colors',
          activeTab === tab.id
            ? 'bg-[#4169E6] text-white'
            : 'text-primary hover:bg-[#F5F5F5]'
        ]">
          {{ tab.name }}
        </button>
      </div>
    </div>
    <div v-if="activeTab === 'cards'" class="flex flex-col ">
      <div class="flex flex-col ">
        <div
          class="max-w-[388px] card-bg flex justify-between items-center  rounded-[8px] py-6 px-3 relative overflow-hidden">

          <div>
            <div class="rounded-[8px] mb-2 inline-block backdrop-blur-lg bg-[#FFFFFF1A]  py-3 px-2">
              <p class="text-white  font-bold mb-2">Sterling Bank</p>
              <p class="text-white">5698 8393 8393 1934</p>
            </div>

            <div class="flex ml-2 text-white text-sm">
              <div class="mr-6 gap-2 flex items-center">
                <p class="text-[#DDDDDD] text-[11px] ">EXP</p>
                <p class="text-[#DDDDDD] text-[11px] font-bold">03/24</p>
              </div>
              <div class="flex gap-2 items-center">
                <p class="text-[#DDDDDD] text-[11px]">CVV</p>
                <p class="text-[#DDDDDD] text-[11px] font-bold">123</p>
              </div>
            </div>
          </div>
          <div class="bg-[#FFFFFF] px-2 py-1 border border-[#E3E8EF] rounded-[4px]">
            <img class="w-6" src="../../assets/images/png/Mastercard.png" alt="">
          </div>
        </div>
      </div>

      <!-- <div>
        <div class="">
          <img class="max-w-[270px]" src="../../assets/images/png/empty-bank.png" alt="">
        </div>
        <p class="text-[#6E6E6E] text-sm mb-6">No cards yet, Add a new card.</p>
        <button class="flex items-center text-primary text-sm" @click="card = true">
          <div class="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center mr-1">
            <Plus class="w-6 h-6" />
          </div>
          Add New Card
        </button>
      </div> -->
    </div>
    <div v-if="activeTab === 'virtual'" class="flex flex-col">
      <div class="flex flex-col ">
        <div class="max-w-[388px] virtual-card-bg items-center  rounded-[8px] py-6 px-3 relative overflow-hidden">
          <div>
            <div class="">
              <p class="text-[#FEFEFE]  font-bold mb-2">Sterling Bank</p>
              <p class="text-[#DDDDDD] mb-2">John Doe M.</p>


            </div>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-[#FEFEFE]  font-bold ">002883936</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="white">
              <path
                d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v16h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 18H8V7h11v16z" />
            </svg>
          </div>
        </div>
      </div>

      <p class="text-primary text-sm mt-3">Are you having issues with the bank you added?</p>
      <!-- <div
          class="max-w-[340px] virtual-bg flex justify-between items-center  rounded-[12px] p-3 relative overflow-hidden">
          <div>
            <div class="">
              <p class="text-[#FEFEFE] font-bold mb-1">Get new Virtual Account</p>
              <p class="text-[#DDDDDD] text-[11px]">Generate new Virtual Account</p>
            </div>
          </div>
          <div class="">
            <button @click="virtual = true" class="bg-[#ECF0FC] text-[11px] text-primary p-3 rounded-[8px] border border-[#4169E6]">
              Generate
            </button>
          </div>
        </div> -->
    </div>
    <div v-if="activeTab === 'bank'" class="flex flex-col justify-center items-center">
     <div class="flex flex-col justify-center">
        <div class="">
          <img class="max-w-[270px]" src="../../assets/images/gif/bank.gif" alt="">
        </div>
        <p class="text-[#6E6E6E] text-sm mb-5">No Bank Account, Add a new Bank Account.</p>
        <button class="flex justify-center text-center items-center text-primary text-sm" @click="card = true">
          <div class="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center mr-1">
            <Plus class="w-6 h-6" />
          </div>
          Add Bank Account
        </button>
      </div> 
    </div>
    <v-dialog v-model="card">
      <AccountBankCard />
    </v-dialog>
    <v-dialog v-model="virtual">
      <AccountVirtualGenerate />
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ChevronLeft, Plus } from 'lucide-vue-next';
import AccountBankCard from '~/components/account/AccountBankCard.vue';
import AccountVirtualGenerate from '~/components/account/AccountVirtualGenerate.vue';
const card = ref(false);
const virtual = ref(false);
const tabs = [
  { id: 'cards', name: 'Cards' },
  { id: 'virtual', name: 'Virtual Account' },
  { id: 'bank', name: 'Bank Account' }
];

const activeTab = ref('cards');
</script>
<style scoped>
.card-bg {
  background-image:
    url('../../assets/images/png/card-bg.png'),
    linear-gradient(90deg, #031051 0%, #001997 100%);
  background-size: cover;
  background-position: center;
}

.virtual-card-bg {
  background-image:
    url('../../assets/images/png/card-bg.png'),
    linear-gradient(rgba(65, 105, 230, 1), rgba(65, 105, 230, 1));

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}



.virtual-bg {
  background: linear-gradient(90deg, #031051 0%, #001997 100%);
}
</style>