<!-- filepath: /Users/pertinencegroup/Documents/GitHub/savingsBox-user-v2/pages/referral/referrals.vue -->
<template>
    <div class="min-h-screen max-w-[868px] p-6">
      <!-- Header Section -->
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-800">My Referrals</h1>
        <p class="text-gray-600 mt-2">
          List of all your referrals who joined and completed tasks through your link
        </p>
        <p class="text-[14px] mt-4">Total Earned <span class="text-primary font-bold">₦3000</span></p>
      </div>
  
      <!-- Referrals Table -->
      <div class="overflow-x-auto">
        <table class="w-full rounded-lg">
          <thead class=" text text-[14px]">
            <tr>
              <th class="text-left py-3 px-4 font-bold">Name</th>
              <th class="text-left py-3 px-4 font-bold">Commission</th>
              <th class="text-left py-3 px-4 font-bold">Created at</th>
            </tr>
          </thead>
          <tbody class="text-gray-800 text-sm">
            <tr class="">
              <td class="py-4 text-[14px] text px-4 flex items-center">
                <img src="../../assets/images/png/john-doe.png" alt="John Doe" class="w-8 h-8 rounded-full mr-3" />
                John Doe
              </td>
              <td class="py-4 text font-bold  px-4">₦1000</td>
              <td class="py-4 text-[14px] text px-4">22, Sept. 2022</td>
            </tr>
            <tr class="">
              <td class="py-4 text-[14px] text px-4 flex items-center">
                <img src="../../assets/images/png/michele.png" alt="Michele Scofield" class="w-8 h-8 rounded-full mr-3" />
                Michele Scofield
              </td>
              <td class="py-4 text-[14px] text font-bold px-4">₦1000</td>
              <td class="py-4 text-[14px] text px-4">22, Sept. 2022</td>
            </tr>
            <tr>
              <td class="py-4 text-[14px] text px-4 flex items-center">
                <img src="../../assets/images/png/damian.png" alt="Damian Marley" class="w-8 h-8 rounded-full mr-3" />
                Damian Marley
              </td>
              <td class="py-4 text font-bold  px-4">₦1000</td>
              <td class="py-4 text-[14px] text px-4">22, Sept. 2022</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Pagination -->
      <div class="flex gap-4 items-center mt-6 text-[14px] text-primary">
        <div>
          Rows per page:
          <select class="border border-gray-300 rounded-md p-1">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </div>
        <div>
          1–10 of 15
          <button class="ml-4 text-primary hover:text-gray-800">&lt;</button>
          <button class="ml-2 text-primary hover:text-gray-800">&gt;</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // No additional logic is required for this static design
  </script>
  
  <style scoped>
  /* Add any additional styles here if needed */
  </style>