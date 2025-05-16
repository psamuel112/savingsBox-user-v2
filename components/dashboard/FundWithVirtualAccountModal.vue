<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#00083133] bg-opacity-30">
    <div class="bg-white rounded-[20px]  p-16 w-full max-w-md relative">
      <button class="absolute top-4 w-12 h-12 right-4 text-gray-400 hover:text-gray-600" @click="$emit('close')">
        <span class="text-2xl">&times;</span>
      </button>
      <button class="absolute top-4 w-12 h-12 left-4 text-gray-400 hover:text-gray-600" @click="$emit('back')">
        <span class="text-2xl">&#8592;</span>
      </button>
      <h2 class="text-[24px] mt-6 text font-bold text-center mb-2">Fund with Virtual Account</h2>
      <p class="text-center text-[#565656] mb-8">Fund your wallet via bank transfer</p>
      <p class="text-center text- mb-4">Virtual Account Details</p>
      <div class="space-y-4">
        <div class="bg-[#4169E6] rounded-lg px-3 py-6 text-white flex  items-end justify-between">
          <div>
            <div class="font-bold">Gurantee Trust Bank Plc.</div>
            <div><p class="text-[#DDDDDD]">John Doe M.</p></div>
            <div class="font-bold tracking-wider">002883936</div>
          </div>
          <button @click="copyToClipboard('002883936')" class="w-6 h-6">
          <img src="../../assets/images/png/content-copy.png" alt="copy">
          </button>
        </div>
        <div class="bg-[#4169E6] rounded-lg p-4 text-white flex items-end justify-between">
          <div>
            <div class="font-semibold">Wema Bank Plc.</div>
            <div><p class="text-[#DDDDDD]">John Doe M.</p></div>
            <div class="font-bold tracking-wider">002883936</div>
          </div>
          <button @click="copyToClipboard('002883936')" class="w-6 h-6">
            <img src="../../assets/images/png/content-copy.png" alt="copy">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
}
</script> 