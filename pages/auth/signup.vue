<template>
  <div class="min-h-screen flex">

    <div class="hidden lg:flex lg:w-1/2 bg-blue-600  flex-col text-white relative">
      <div class="z-10 ml-24 mt-24 max-w-[359px] text-left ">
        <img src="../../assets/images/svg/white-logo.svg" alt="">
        <h4 class="text-[24px] font-bold">
          The surest and secure way to managing your finances with ease
        </h4>
      </div>
      <div class="relative mt-auto  overflow-visible">
        <img class="relative z-20 ml-4 mb-[350px]" src="../../assets/images/svg/auth-actions.svg" alt="" />
        <img class="absolute bottom-0  left-0 z-10 w-[2100px]" src="../../assets/images/svg/signup-image.svg" alt="" />
      </div>
      <div class="absolute inset-0 pattern-bg"></div>
    </div>
    <div class="w-full lg:w-1/2 p-8 md:p-12 flex items-center justify-center">
      <div class="w-full max-w-md">
        <div class="mb-8">
          <h2 class="text-[24px] md:text-[36px] font-bold text-[#000831] mb-4">Sign Up</h2>
          <p class="text-[#999C9F] text-[14px] md:text-[16px]">Create your SavingsBox Account</p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <InputField
            v-model="form.firstName"
            label="Legal First Name"
            placeholder="Enter your first name"
          />

          <InputField
            v-model="form.surname"
            label="Surname"
            placeholder="Enter your surname"
          />

          <InputField
            v-model="form.email"
            type="email"
            label="Email Address"
            placeholder="Enter your email"
          />

          <InputField
            v-model="form.phone"
            type="tel"
            label="Phone Number"
            placeholder="Enter your phone number"
          />

          <div>
            <InputField
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              placeholder="Enter your password"
              :show-password-toggle="true"
              :show-password="showPassword"
              @toggle-password="togglePassword"
            >
              <!-- Password Strength Indicator -->
              <div class="mt-2">
                <div class="text-sm text-[#565656] flex justify-between">
                  <span>Password Strength</span>
                  <span>{{ passwordStrength }}</span>
                </div>
                <div class="mt-1 grid grid-cols-3 gap-1">
                  <div v-for="(level, index) in 3" :key="index" class="h-[2px]" :class="getStrengthClass(index)">
                  </div>
                </div>
              </div>
            </InputField>
          </div>

          <InputField
            v-model="form.referralCode"
            label="Referral code (Optional)"
            placeholder="Enter referral code"
          />
          <Button type="submit" variant="primary">
            Get Started
          </Button>
        </form>
        <div class="mt-2 text-center">
          <p class="text-[#565656] text-sm">
            Already have an account?
            <NuxtLink to="/signin" class="text-[#4169E6] text-[16px] hover:underline">Sign In</NuxtLink>
          </p>
        </div>
        <div class="mt-8 text-center text-sm text-[#5A5A5A]">
          <p>
            By registering you indicate that you read and agreed to the
            <a href="/terms" class="text-[#4169E6] hover:underline">Terms of Use</a>
            © 2022 Savingsbox
            <span class="mx-2">·</span>
            <a href="/about" class="hover:underline">About</a>
            <span class="mx-2">·</span>
            <a href="/privacy" class="hover:underline">Privacy</a>
            <span class="mx-2">·</span>
            <a href="/terms" class="hover:underline">Terms</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import InputField from '~/components/common/InputField.vue'
import Button from '~/components/common/Button.vue'

const form = ref({
  firstName: '',
  surname: '',
  email: '',
  phone: '',
  password: '',
  referralCode: ''
})

const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const passwordStrength = computed(() => {
  const password = form.value.password
  if (!password) return ''
  if (password.length < 8) return 'Weak'
  if (password.length < 12) return 'Medium'
  return 'Strong'
})

const getStrengthClass = (index) => {
  const strength = passwordStrength.value
  const baseClass = 'bg-gray-200'
  if (!strength) return baseClass

  if (strength === 'Weak' && index === 0) return 'bg-red-500'
  if (strength === 'Medium' && index <= 1) return 'bg-yellow-500'
  if (strength === 'Strong') return 'bg-green-500'

  return baseClass
}

const handleSubmit = () => {
  // Handle form submission here
  console.log('Form submitted:', form.value)
}
</script>

<style scoped>
.pattern-bg {
  background-image: url("../../assets/images/svg/auth-bg.svg");
}
</style>