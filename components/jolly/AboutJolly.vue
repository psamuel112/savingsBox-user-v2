<template>
  <div
    class="fixed card-bg inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30"
  >
    <div
      class="bg-white rounded-[20px] w-full max-w-[607px] max-h-[90vh] overflow-y-auto p-0"
    >
      <div
        class="bg-[#2346A9] rounded-t-[20px] px-8 flex items-center justify-between"
      >
        <div class="text-white text-[24px] font-bold">About Jolly</div>
        <div class="flex items-center">
          <img
            class="w-[145px] h-[118px]"
            src="../../assets/images/png/f3.png"
            alt=""
          />
          <button
            class="bg-white text-[#4169E6] text-[20px] w-12 h-12 rounded-[40px]"
            @click="$emit('close')"
          >
            &times;
          </button>
        </div>
      </div>
      <div class="absolute bottom-20 right-56"></div>

      <div class="px-8 pt-4 pb-8">
        <div>
          <p class="font-bold text">Jolly Rules</p>
        </div>
        <p class="text-[#6E6E6E] text-[14px] mb-4">
          Jolly plans can be transferred from one user to another, the new user
          will continue making payment for the plan.
        </p>

        <p class="text-[#6E6E6E] text-[14px] mb-4">
          All plans start from January to November
        </p>
        <p class="text-[#6E6E6E] text-[14px] mb-4">
          Subscription will automatically be disqualified if they miss up to 3
          months of payment.
        </p>
        <p class="text-[#6E6E6E] text-[14px] mb-4">
          Registration for the year will end on the 30th of august.
        </p>
        <p class="text-[#6E6E6E] text-[14px] mb-4">
          All disqualified payments will be settled in December and returned to
          user wallet at the beginning of another Jolly cycle
        </p>

        <div class="px-24">
          <button
            class="w-full flex flex-col items-center bg-[#4169E6] text-white py-3 rounded-[8px] font-bold"
            @click="$emit('continue')"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  jolly: Object,
});
</script>

<style scoped>
.card-bg {
  background-image: url("../../assets/images/png/action-bg.png");
}
</style>
