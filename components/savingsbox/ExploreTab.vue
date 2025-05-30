<template>
  <div class="explore">
    <p class="text-center text-[#565656] mb-8">
      Here are plans made for you, you can select any plan of your choice.
    </p>
    <div class="grid grid-cols-1 p-6 rounded-[20px] md:grid-cols-2 bg-[#F5F5F5] gap-3">
      <div
        v-for="(plan, index) in plans"
        :key="plan.title"
        @click="handlePlanClick(plan.title)"

        class="bg-white border border-[#DDDDDD] rounded-[16px] py-[76px] px-10 flex items-center gap-6 shadow-sm"
        :class="{
          'md:col-span-2': plans.length % 2 !== 0 && index === plans.length - 1
        }"
        style="cursor: pointer;"
      >
        <div>
          <img :src="plan.icon" :alt="plan.title" class="w-14 h-14" />
          <div class="flex-1">
            <div class="text-[20px] font-bold text-[#6E6E6E] mb-2">{{ plan.title }}</div>
            <div class="text-[#6E6E6E]">
              <p>{{ plan.desc }}</p>
            </div>
          </div>
        </div>
        <button class="ml-auto text-[#4169E6] h-12 w-12 text-2xl">
          <img src="../../assets/images/png/chevron-right.png" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits([
  'autobox-terms',
  'targetbox-terms',
  'simplebox-terms',
  'lockbox-terms',
  'smes-terms'
])
defineProps({
  plans: {
    type: Array,
    required: true
  }
})
function handlePlanClick(title) {
  if (title === 'AutoBox') {
    emit('autobox-terms')
  } else if (title === 'SMEs Loan') {
    emit('smes-terms')
  } else if (title === 'TargetBox') {
    emit('targetbox-terms')
  } else if (title === 'SimpleBox') {
    emit('simplebox-terms')
  } else if (title === 'LockBox') {
    emit('lockbox-terms')
  }
}


</script>

<style scoped>
</style> 