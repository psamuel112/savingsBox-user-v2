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
        <h2 class="text-[24px] md:text-[36px] font-bold text-[#23262F] mb-2">Change Password</h2>
        <p class="text-[#999C9F] text-[14px] md:text-[16px] mb-6">You can now enter new password to reset your password</p>
        <form @submit.prevent="handleChangePassword" class="space-y-4 text-left">
          <InputField
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            placeholder="Enter new password"
            :show-password-toggle="true"
            :show-password="showPassword"
            @toggle-password="togglePassword"
          >
            <!-- Password Strength Indicator -->
            <div class="mt-4 mb-4">
              <div class="text-sm text-[#565656] flex justify-between">
                <span>Password Strength</span>
                <span :class="passwordStrengthColor">{{ passwordStrength }}</span>
              </div>
              <div class="mt-1 grid grid-cols-3 gap-1">
                <div v-for="(level, index) in 3" :key="index" class="h-[2px] rounded" :class="getStrengthClass(index)"></div>
              </div>
            </div>
            <div class="text-[#999C9F] text-xs mb-2">Password must be at least 8 characters</div>
          </InputField>
          <InputField
            v-model="form.confirmPassword"
            :type="showConfirmPassword ? 'text' : 'password'"
            label="Confirm Password"
            placeholder="Confirm new password"
            :show-password-toggle="true"
            :show-password="showConfirmPassword"
            @toggle-password="toggleConfirmPassword"
          />
          <Button type="submit" variant="primary" className="w-full !bg-[#4169E6] !text-white !font-bold !text-[16px] !py-3 mt-4">
            Change my Password
          </Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputField from '~/components/common/InputField.vue'
import Button from '~/components/common/Button.vue'
import { ref, computed } from 'vue'
const router = useRouter()

const form = ref({
  password: '',
  confirmPassword: ''
})
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const togglePassword = () => {
  showPassword.value = !showPassword.value
}
const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value
}
const passwordStrength = computed(() => {
  const password = form.value.password
  if (!password) return ''
  if (password.length < 8) return 'Weak'
  if (password.length < 12) return 'Medium'
  return 'Strong'
})
const passwordStrengthColor = computed(() => {
  if (passwordStrength.value === 'Weak') return 'text-red-500'
  if (passwordStrength.value === 'Medium') return 'text-yellow-500'
  if (passwordStrength.value === 'Strong') return 'text-green-500'
  return ''
})
const getStrengthClass = (index) => {
  const strength = passwordStrength.value
  if (!strength) return 'bg-gray-200'
  if (strength === 'Weak' && index === 0) return 'bg-red-500'
  if (strength === 'Medium' && index <= 1) return 'bg-yellow-500'
  if (strength === 'Strong') return 'bg-green-500'
  return 'bg-gray-200'
}
const handleChangePassword = () => {
  // Handle password change logic here
  console.log('Change Password:', form.value)
}
</script>

<style scoped>
.pattern-bg {
  background-image: url("../../assets/images/svg/auth-bg.svg");
}
</style> 