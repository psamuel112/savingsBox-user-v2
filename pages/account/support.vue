<template>
    <div class="">
      <div class="mb-5 ml-6 flex gap-2 items-center">
         <img @click="navigateTo('/account/about')" class="w-6 cursor-pointer h-6" src="../../assets/images/png/chevron-left.png" />
        <h4 class="text-[24px] mb-0 font-bold text-[#000831]">Support</h4>
      </div>
      
      <div class="space-y-4">
        <div class="bg-white rounded-lg p-4 shadow-sm">
          <div class="space-y-4">
            <AccountMenuItem :icon="chat" label="Chat with us" />
            <AccountMenuItem :icon="faq" label="FAQS" />
            <AccountMenuItem :icon="feedback" label="Give Feedback" />
          </div>
<p class="font-bold text mt-4 mb-4">Contact Us</p>
          <div class="space-y-4">
            <AccountMenuItem :icon="contact" label="08171777733" />
            <AccountMenuItem :icon="email" label="Support@savingsbox.ng" />
          </div>
          <p class="font-bold text mt-4 mb-4">Social Media</p>
          <div class="space-y-4">
            <AccountMenuItem :icon="instagram" label="instagram" />
            <AccountMenuItem :icon="facebook" label="Facebook" />
            <AccountMenuItem :icon="twitter" label="Twitter" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import contact from "/assets/images/png/contact-icon.png";
  import email from "/assets/images/png/email-icon.png";
  import instagram from "/assets/images/png/instagram-icon.png";
  import facebook from "/assets/images/png/facebook-icon.png";
  import twitter from "/assets/images/png/twitter-icon.png";
  import chat from "/assets/images/png/chat-icon.png";
  import faq from "/assets/images/png/faq-icon.png";
  import feedback from "/assets/images/png/feedback-icon.png";
  import AccountMenuItem from '~/components/account/AccountMenuItem.vue';
  </script> 