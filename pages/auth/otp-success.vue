<template>
  <div class="min-h-screen flex">
    <!-- Left Side -->
    <div class="hidden lg:flex lg:w-1/2 bg-[#4169E6] flex-col text-white relative overflow-hidden">
      <div class="relative my-auto overflow-visible flex flex-col items-center">
      <img class="relative z-20" src="../../assets/images/png/otp.png" alt="otp" />
      <img class="absolute -mt-14 right-0 mr-16 w-[325px] h-[325px] z-20" src="../../assets/images/png/otp-success.png" alt="otp" />
      </div>
      <div class="absolute inset-0 pattern-bg"></div>
    </div>

    <!-- Right Side -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12">
      <div class="w-full max-w-md text-center">
        <button class="mb-6 flex justify-start ">
          <img class="arrow w-6" src="../../assets/images/svg/chevron-left.svg" alt="">
        </button>
        <h2 class="text-[24px] md:text-[36px] font-bold text-[#2F2F2F] mb-6">Congratulations!</h2>
        <p class="text-[#999C9F] text-[14px] md:text-[16px] mb-6">Your account has successfully been created and verified.</p>
        <div class=" items-center flex justify-center mb-8">
         <img class="w-[187px]" src="../../assets/images/gif/otp-success.gif" />
        </div>
        <Button variant="primary"  @click="goToDashboard">
          Go to Dashboard
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '~/components/common/Button.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const goToDashboard = () => {
  router.push('/auth/quick-action')
}
</script>

<style scoped>
.pattern-bg {
  background-image: url("../../assets/images/svg/auth-bg.svg");
}
</style> 