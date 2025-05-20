<template>
    <div class=" p-4">
        <div class="mb-5  flex gap-2 items-center">
            <img @click="navigateTo('/account')" class="w-6 h-6 cursor-pointer"
                src="../../assets/images/png/chevron-left.png" />
            <h4 class="text-[24px] mb-0 font-bold text-[#000831]">Verification</h4>
        </div>
        <!-- BVN Section -->
        <div class="mb-6">
            <h2 class="text-xl font-bold text mb-5">BVN</h2>
            <p class="text-[#565656] text-sm mb-4">Bank Verification Number (BVN)</p>
            <button class="text-primary font-bold text-sm">Add BVN</button>
        </div>
        <div class="border-b border-[#DDDDDD] mb-5"></div>
        <!-- KYC Verification Section -->
        <div class="mb-6 lg:pr-[130px]">
            <h2 class="text-[24px] font-bold text mb-5">KYC Verification</h2>

            <!-- Means of Identification -->
            <div class="mb-6">
                <label class="block text-[#565656] text-sm mb-2">Means of Identification</label>
                <div class="relative w-1/2">
                    <select v-model="identificationType"
                        class="w-full px-4 py-3 rounded-lg border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="national_id">National Identity Card</option>
                        <option value="drivers_license">Driver's License</option>
                        <option value="passport">International Passport</option>
                        <option value="voters_card">Voter's Card</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <ChevronDown class="w-5 h-5 text-primary" />
                    </div>
                </div>
            </div>

            <!-- Document Upload Section -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <!-- Front View -->
                <div>
                    <label class="block text-sm text mb-2">Front View</label>
                    <p class="text-[#6E6E6E] text-sm mb-2">Make sure the Image is clear</p>
                    <div
                        class="border border-[#ECF0FC33] rounded-8px px-3 py-10 flex gap-4 items-center">
                        <div class="mb-2 text-[#939393]">
                            <Upload class="w-6 h-6" />
                        </div>
                        <div>
                            <p class="text-primary font-semibold mb-1">Upload a File</p>
                            <p class="text text-[11px] mb-1">Select a file from your device</p>
                            <p class="text-[#6E6E6E] text-[11px]">
                                Accepted file formats include jpg, jpeg, png or pdf. Max. file size 10MB
                            </p>
                        </div>

                    </div>
                </div>

                <!-- Back View -->
                <div>
                    <label class="block text-gray-900 mb-1">Back View</label>
                    <p class="text-gray-500 text-sm mb-2">Make sure the Image is clear</p>
                    <div
                        class="border border-[#ECF0FC33] rounded-8px px-3 py-10 flex gap-4 items-center ">
                        <div class="mb-2 text-[#939393]">
                            <Upload class="w-6 h-6" />
                        </div>
                        <div>
                            <p class="text-primary font-semibold mb-1">Upload a File</p>
                            <p class="text text-[11px] mb-1">Select a file from your device</p>
                            <p class="text-[#6E6E6E] text-[11px]">
                                Accepted file formats include jpg, jpeg, png or pdf. Max. file size 10MB
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Residential Address -->
            <div class="mb-6 w-1/2">
                <label class="block text-[#565656] text-sm font-semibold mb-2">Residential Address</label>
                <input type="text" v-model="residentialAddress" placeholder="Enter current residence address"
                    class="w-full px-3 py-3 rounded-[8px] border border-[#DDDDDD] focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <!-- Submit Button -->
            <button @click="submitKYC"
                class="w-1/2 bg-primary hover:bg-gray-300 text-gray-600 font-medium py-3 px-4 rounded-[8px] transition-colors">
                Submit KYC
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { ChevronDown, Upload } from 'lucide-vue-next';

const identificationType = ref('national_id');
const residentialAddress = ref('');
const frontImage = ref(null);
const backImage = ref(null);

const submitKYC = () => {
    // Here you would typically send the data to your API
    console.log('Submitting KYC:', {
        identificationType: identificationType.value,
        residentialAddress: residentialAddress.value,
        frontImage: frontImage.value,
        backImage: backImage.value
    });
    alert('KYC submitted successfully!');
};
</script>