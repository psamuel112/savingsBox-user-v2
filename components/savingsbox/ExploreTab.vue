<template>
  <div class="explore">
    <p class="text-center text-[#565656] mb-8">Here are plans made for you, you can select any plan of your choice.</p>
    <div class="grid grid-cols-1 p-6 rounded-[20px] md:grid-cols-2 bg-[#F5F5F5] gap-3">
      <div v-for="plan in plans" :key="plan.title" class="bg-white border border-[#DDDDDD] rounded-[16px] py-[76px] px-10 flex items-center gap-6 shadow-sm" @click="plan.title === 'AutoBox' ? $emit('autobox-terms') : null" style="cursor:pointer;">
        <div>
          <img :src="plan.icon" :alt="plan.title" class="w-14 h-14" />
          <div class="flex-1">
            <div class="text-[20px] font-bold text-[#6E6E6E] mb-2">{{ plan.title }}</div>
            <div class="text-[#6E6E6E]">
              <p>{{ plan.desc }}</p>
            </div>
          </div>
        </div>
        <button class="ml-auto text-[#4169E6] h-12 w-12 text-2xl "><img src="../../assets/images/png/chevron-right.png"/></button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  plans: {
    type: Array,
    required: true
  }
})
defineEmits(['autobox-terms'])
</script>

<style scoped>
</style> 