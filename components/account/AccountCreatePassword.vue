<template>
  <div class="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white py-7 px-12 rounded-[20px] w-full max-w-[496px] relative shadow-xl">
      <!-- Close button -->
      <button class="absolute w-12 h-12  top-4 right-4 text-primary" @click="$emit('close')">
        <span class="text-2xl">&times;</span>
      </button>
      <!-- Modal content -->
      <div class="px-6 pt-12">
        <h4 class="text-[24px] font-bold text-center text-[#000831]">Change Password</h4>
        <p class="text-[#999C9F] text-center text-[14px] md:text-[16px] mb-6">Update Password if you encountered any unusual activity
        </p>
      </div>
      <!-- Action buttons -->
      <div class="px-6 ">
        <div class="w-full max-w-md text-center">
       
          <form @submit.prevent="handleChangePassword" class="space-y-4 text-left">
            <InputField v-model="form.confirmPassword" :type="showConfirmPassword ? 'text' : 'password'"
              label="Old Password" placeholder="Enter old password" :show-password-toggle="true"
              :show-password="showConfirmPassword" @toggle-password="toggleConfirmPassword" />
            <InputField v-model="form.password" :type="showPassword ? 'text' : 'password'" label="Password"
              placeholder="New password" :show-password-toggle="true" :show-password="showPassword"
              @toggle-password="togglePassword">
              <!-- Password Strength Indicator -->
              <div class="mt-4 mb-4">
                <div class="text-sm text-[#565656] flex justify-between">
                  <span>Password Strength</span>
                  <span :class="passwordStrengthColor">{{ passwordStrength }}</span>
                </div>
                <div class="mt-1 grid grid-cols-3 gap-1">
                  <div v-for="(level, index) in 3" :key="index" class="h-[2px] rounded"
                    :class="getStrengthClass(index)"></div>
                </div>
              </div>
              <div class="text-[#999C9F] text-xs mb-2">Password must be at least 8 characters</div>
            </InputField>
            <InputField v-model="form.confirmPassword" :type="showConfirmPassword ? 'text' : 'password'"
              label="Confirm New Password" placeholder="Confirm new password" :show-password-toggle="true"
              :show-password="showConfirmPassword" @toggle-password="toggleConfirmPassword" />
            <Button @click="successDialog = true" type="submit" variant="primary"
              className="w-full !bg-[#4169E6] !text-white !font-bold !text-[16px] !py-3 mt-4">
              Change my Password
            </Button>
          </form>
        </div>
      </div>
    </div>
    <v-dialog v-model="successDialog">
      <AutoBoxSuccessModal 
      title="Password Updated
Successfully"
      button-text="Close"
      sub-message="You have  created a new password"
    
      />
    </v-dialog>
  </div>
</template>
<script setup>
import InputField from '~/components/common/InputField.vue'
import Button from '~/components/common/Button.vue'
import AutoBoxSuccessModal from "~/components/savingsbox/AutoBoxSuccessModal.vue";
import { ref, computed } from 'vue'
const successDialog = ref(false)
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