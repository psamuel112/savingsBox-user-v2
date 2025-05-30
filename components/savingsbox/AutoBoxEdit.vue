<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
    <div class="bg-white rounded-[20px] w-full max-w-[430px] max-h-[90vh] overflow-y-auto p-8">
      <button class="absolute top-6 right-6 w-12 h-12 text-[#4169E6] text-2xl" @click="$emit('close')">
        <span>&times;</span>
      </button>
      <h2 class="text-[24px] font-bold mb-6 mt-2">Edit AutoBox</h2>
      <div class="mb-6">
        <div class="text-[#6E6E6E] text-[15px] font-semibold mb-2">Plan Details</div>
        <label class="block text-[#565656] text-[14px] font-semibold mb-1">Plan Title</label>
        <input v-model="form.title" type="text" class="w-full border border-[#DDDDDD] rounded-[8px] p-3 text-[14px] mb-4" placeholder="Plan Title" />
        <label class="block text-[#565656] text-[14px] font-semibold mb-1">Description (Optional)</label>
        <textarea v-model="form.description" class="w-full border border-[#DDDDDD] rounded-[8px] p-3 text-[14px] min-h-[80px] mb-4" placeholder="Enter Description"></textarea>
      </div>
      <div class="mb-6">
        <div class="text-[#6E6E6E] text-[15px] font-semibold mb-2">Payment Source</div>
        <div class="flex items-center mb-2">
          <span class="text-[14px] mr-2">Fund from SavingsBox Wallet</span>
          <input type="checkbox" v-model="form.wallet" class="accent-[#4169E6] w-5 h-5" />
        </div>
        <div class="border border-[#DDDDDD] rounded-[12px] p-4 bg-[#FAFAFA]">
          <div class="flex items-center mb-4 font-semibold text-[#232323] cursor-pointer" @click="dropdownOpen = !dropdownOpen">
            <img class="w-6 h-6 mr-1" src="../../assets/images/png/cards-outline.png" alt="">
            Fund with Saved Card
            <svg class="ml-auto transition-transform duration-200" :class="dropdownOpen ? 'rotate-180' : ''" width="20" height="20" fill="none" stroke="#A1A1A1">
              <path d="M6 8l4 4 4-4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div v-show="dropdownOpen">
            <label class="flex items-center border rounded-[8px] px-3 py-2 cursor-pointer mb-2"
              :class="form.card === 'mastercard' ? 'border-[#4169E6] bg-white' : 'border-[#DDDDDD] bg-[#FAFAFA]'">
              <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" class="w-6 h-6 mr-2" />
              <span class="flex-1">**** 5635</span>
              <input type="radio" name="card" value="mastercard" v-model="form.card" class="form-radio" />
            </label>
            <label class="flex items-center border rounded-[8px] px-3 py-2 cursor-pointer"
              :class="form.card === 'visa' ? 'border-[#4169E6] bg-white' : 'border-[#DDDDDD] bg-[#FAFAFA]'">
              <img src="https://img.icons8.com/color/48/000000/visa.png" class="w-6 h-6 mr-2" />
              <span class="flex-1">**** 5635</span>
              <input type="radio" name="card" value="visa" v-model="form.card" class="form-radio" />
            </label>
          </div>
        </div>
      </div>
      <button class="w-full bg-[#4169E6] text-white py-3 rounded-[8px] font-bold text-[16px] mt-4" @click="saveChanges">Save Changes</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
const props = defineProps({
  plan: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['close', 'save'])
const dropdownOpen = ref(true)
const form = reactive({
  title: '',
  description: '',
  wallet: true,
  card: 'mastercard'
})
watch(() => props.plan, (plan) => {
  if (plan) {
    form.title = plan.title
    form.description = plan.description
    // Set defaults for wallet/card as needed
  }
}, { immediate: true })
function saveChanges() {
  emit('save', { ...form })
}
</script>

<style scoped>
</style> 