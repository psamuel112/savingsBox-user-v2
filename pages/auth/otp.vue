<template>
  <div class="min-h-screen flex">
    <!-- Left Side -->
    <div class="hidden lg:flex lg:w-1/2 bg-[#4169E6] flex-col text-white relative overflow-hidden">
      
      <div class="relative my-auto overflow-visible flex flex-col items-center">
        <img class="relative z-20" src="../../assets/images/png/otp.png" alt="otp" />
       
      </div>
      <div class="absolute inset-0 pattern-bg"></div>
    </div>

    <!-- Right Side -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12">
      <div class="w-full max-w-md text-center">
        <button class="mb-6 flex justify-start ">
          <img class="arrow w-6" src="../../assets/images/svg/chevron-left.svg" alt="">
        </button>
        <h2 class="text-[24px] md:text-[36px] font-bold text-[#23262F] mb-2">Confirm your Identity</h2>
        <p class="text-[#7A7A7A] text-[14px] md:text-[16px] mb-6">One more thing, enter the six digit code sent to your email address <span class="font-medium">David***@gmail.com</span>.</p>
        <div class="flex flex-col items-center mb-6">

          <div class="items-center w-[187px] h-[187px] justify-center mb-2">
           <img src="../../assets/images/gif/otp.gif" alt="">
          </div>
          <button class="text-[#4169E6] text-[15px] font-medium hover:underline mb-2">Send code to phone number</button>
        </div>
        <!-- OTP Inputs -->
        <form class="flex flex-col items-center" @submit.prevent="submit">
          <OtpInput v-model="otp" :length="6" class="mb-4" />
          <div class="mb-6 text-[#7A7A7A] text-[14px] md:text-[16px]">
            Didn't recieve any code
            <button type="button" class="text-[#4169E6] font-medium hover:underline ml-1">Resend Code</button>
          </div>
          <Button type="submit" variant="primary" :className="'!bg-[#D9D9D9] !text-[#A1A1A1]'">
            Confirm
          </Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '~/components/common/Button.vue'
import OtpInput from '~/components/common/OtpInput.vue'
import { ref } from 'vue'
const router = useRouter()

function submit() {
  router.push('/auth/otp-success')
}
const otp = ref('')
</script>

<style scoped>
.pattern-bg {
  background-image: url("../../assets/images/svg/auth-bg.svg");
}
</style> 