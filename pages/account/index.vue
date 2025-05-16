<template>
    <div class="relative">
        <!-- Header -->
        <div class="mb-5">
            <h4 class="text-[24px] font-bold text-[#000831]">
                My Account
            </h4>
            <p class="text-[#565656] text-[16px]">Manage your Account Setup</p>
        </div>

        <!-- Profile Card -->
        <div class="card-bg rounded-[8px] py-10 px-3 flex flex-col items-center mb-8 relative">
            <!-- Profile & Details -->
            <div class="bg-white profile rounded-full w-24 h-24 border-2 border-[#4169E6] p-1 mb-2">
                <img src="/assets/images/png/profile-image.png" class="w-full h-full object-cover rounded-full"
                    alt="Profile" />
            </div>
            <p class="font-semibold text">John Doe</p>
            <div class="flex items-center gap-1">
                <p class="text-[#6E6E6E] flex items-center gap-1">
                    @johndoe
                </p>
                <img class="w-4 h-4" src="../../assets/images/png/vector.png" alt="copy">
            </div>
            <div class="mt-2 mb-2 bg-white px-4 py-2 rounded-[16px]">
                <p class="text-[#565656] text-sm">Unverified</p>
            </div>
            <div class="flex gap-2 items-center">
                <p class="text-primary text-sm">Complete Your Verification</p>
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <path d="M8 5l4 5-4 5" stroke="#4169E6" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
        </div>

        <!-- Menu List -->
        <div class="space-y-4">
            <NuxtLink to="/account/settings">
                <AccountMenuItem :icon="account" label="Account Settings" />
            </NuxtLink>
            <NuxtLink to="/account/transactions">
                <AccountMenuItem :icon="transaction" label="Transactions" />
            </NuxtLink>
            <NuxtLink to="/account/banks-cards">
                <AccountMenuItem :icon="bank" label="Banks & Cards" />
            </NuxtLink>
            <NuxtLink to="/account/notifications">
                <AccountMenuItem :icon="notification" label="Notifications" />
            </NuxtLink>
            <NuxtLink to="/account/about">
                <AccountMenuItem :icon="about" label="About Us" />
            </NuxtLink>
            <AccountMenuItem :icon="logout" label="Logout" logout />
        </div>
    </div>
</template>

<script setup>
import account from "/assets/images/png/account-icon.png";
import transaction from "/assets/images/png/transaction-icon.png";
import bank from "/assets/images/png/bank-icon.png";
import notification from "/assets/images/png/notification-icon.png";
import about from "/assets/images/png/about-icon.png";
import logout from "/assets/images/png/logout-icon.png";
import AccountMenuItem from '~/components/account/AccountMenuItem.vue';
</script>

<style scoped>
.card-bg {
    background: #ECF0FC url('../../assets/images/png/profile-bg.png') no-repeat center center;
    background-size: cover;
}

.profile {
    border: 1px solid #4169E6;
}
</style>