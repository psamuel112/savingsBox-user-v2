<template>
  <div class="min-h-screen flex">
    <!-- Left Side -->
    <div class="hidden lg:flex lg:w-1/2 bg-[#4169E6] flex-col text-white relative overflow-hidden">
      <div class="z-10 ml-24 mt-24 max-w-[359px] text-left">
        <img src="../../assets/images/svg/white-logo.svg" alt="SavingsBox Logo" class="mb-6">
        <h4 class="text-[24px] font-bold mb-2">The surest and secure way to managing your finances with ease</h4>
      </div>
      <div class="relative mt-auto flex flex-col items-center">
        <img class="absolute bottom-0 left-0 z-10 w-full" src="../../assets/images/svg/auth-bg.svg" alt="Pattern BG" />
        <img class="relative z-20  mt-12" src="../../assets/images/png/login.png" alt="Person" />
        <img class="absolute z-30 left-1/2 bottom-60 transform -translate-x-1/2" src="../../assets/images/png/login-plans.png" alt="Cards" />
      </div>
    </div>

    <!-- Right Side -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12">
      <div class="w-full max-w-md text-left">
        <h2 class="text-[24px] md:text-[36px] font-bold text-[#23262F] mb-2">Login</h2>
        <p class="text-[#999C9F] text-[14px] md:text-[16px] mb-6">Login your SavingsBox Account</p>
        <form @submit.prevent="handleLogin" class="space-y-4">
          <InputField
            v-model="form.email"
            type="email"
            label="Email Address"
            placeholder="Enter your email address"
          />
          <InputField
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            placeholder="Enter your password"
            :show-password-toggle="true"
            :show-password="showPassword"
            @toggle-password="togglePassword"
          />
          <div class="flex justify-end">
            <NuxtLink to="/auth/forgot-password" class="text-[#4169E6] text-[16px]  hover:underline">Forgot your Password?</NuxtLink>
          </div>
          <Button type="submit" variant="primary" className="w-full !bg-[#4169E6] !text-white !font-bold !text-[16px] !py-3">
            Login
          </Button>
        </form>
        <div class="mt-6 text-center">
          <p class="text-[#565656] text-[14px] md:text-[16px]">
            Don't have an account?
            <NuxtLink to="/auth/signup" class="text-[#4169E6] text-[14px] md:text-[16px]  hover:underline">Sign Up</NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputField from '~/components/common/InputField.vue'
import Button from '~/components/common/Button.vue'
import { ref } from 'vue'
const router = useRouter()

const form = ref({
  email: '',
  password: ''
})
const showPassword = ref(false)
const togglePassword = () => {
  showPassword.value = !showPassword.value
}
const handleLogin = () => {
  // Handle login logic here
  console.log('Login:', form.value)
  router.push('/auth/2fa')
}
</script>

<style scoped>
.pattern-bg {
  background-image: url("../../assets/images/svg/auth-bg.svg");
}
</style>