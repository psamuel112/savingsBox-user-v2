<template>
  <div class="min-h-screen flex">
    <!-- Left Side -->
    <div class="hidden lg:flex lg:w-1/2 bg-[#4169E6] flex-col text-white relative overflow-hidden">
      <div class="relative my-auto overflow-visible flex flex-col items-center">
        <img class="relative z-20" src="../../assets/images/png/otp.png" alt="2FA Illustration" />
      </div>
      <div class="absolute inset-0 pattern-bg"></div>
    </div>

    <!-- Right Side -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12">
      <div class=" text-center">
        <button class="mb-6 flex justify-start ">
          <img class="arrow w-6" src="../../assets/images/svg/chevron-left.svg" alt="">
        </button>
        <h2 class="text-[24px] md:text-[36px] font-bold text-[#23262F] mb-4">Secure your account with<br />2FA</h2>
        <div class="flex justify-center  items-center mb-4">
         <img class="gif" src="../../assets/images/gif/2fa.gif" alt="">
        </div>
        <p class="text-[#999C9F] text-[14px] md:text-[16px] mb-6">Add an extra layer of security to your account</p>
        <Button @click="submit" variant="primary" className="w-full !bg-[#4169E6] !text-white !font-bold !text-[16px] !py-3 mb-6">
          Enable 2FA now
        </Button>
        <button class="text-[#4169E6] text-[14px] md:text-[16px] font-medium hover:underline mt-2">Remind me later</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '~/components/common/Button.vue'
const router = useRouter()
function submit() {
  router.push('/auth/2fa-enter-code')
}
</script>

<style scoped>
.pattern-bg {
  background-image: url("../../assets/images/svg/auth-bg.svg");
}
.gif {
    max-width: 164px;
    height: 80px;
}
.arrow {
    width: 24px;
}
</style> 