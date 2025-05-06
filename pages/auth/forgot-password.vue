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
            <div class="w-full max-w-md ">
                <button class="mb-6 flex justify-start ">
                    <img class="arrow w-6" src="../../assets/images/svg/chevron-left.svg" alt="">
                </button>
                <h2 class="text-[24px] md:text-[36px] text-center font-bold text-[#23262F] mb-4">Forgot Password</h2>
                <p class="text-[#999C9F] text-center text-[14px] md:text-[16px] font-[400] mb-6">Enter the Email Address or Phone Number you registered with.
                </p>
                <form @submit.prevent="handleLogin" class="space-y-4 ">
                    <InputField v-model="form.email" type="email" label="Email Address"
                        placeholder="Enter your email address" />
                    <p class="text-[#4169E6]  text-center text-[14px] md:text-[16px] font-medium hover:underline mb-2">Send code to phone
                        number</p>
                    <Button type="submit" variant="primary"
                        className="w-full !bg-[#4169E6] !text-white !font-bold !text-[16px] !py-3">
                        Send Token
                    </Button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import InputField from '~/components/common/InputField.vue'
import Button from '~/components/common/Button.vue'
import { ref } from 'vue'

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
}
</script>

<style scoped>
.pattern-bg {
    background-image: url("../../assets/images/svg/auth-bg.svg");
}
</style>