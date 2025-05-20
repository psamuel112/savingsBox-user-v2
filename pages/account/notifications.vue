<template>
    <div class="p-6">
        <!-- Header -->
        <div class="mb-5">
            <h4 class="text-[24px] font-bold text-[#000831]">
                Notifications
            </h4>
            <p class="text-[#565656] text-[16px]">Manage your notifications</p>
        </div>

        <!-- Notifications List -->
        <div class="space-y-4">
            <div v-for="(notification, index) in notifications" :key="index"
                class="bg-white rounded-lg p-4 shadow-sm">
                <div class="flex items-start justify-between">
                    <div class="flex items-start gap-3">
                        <div class="w-10 h-10 rounded-full bg-[#ECF0FC] flex items-center justify-center">
                            <component :is="notification.icon" class="w-5 h-5 text-[#4169E6]" />
                        </div>
                        <div>
                            <h5 class="font-semibold text-[16px] text-[#000831]">{{ notification.title }}</h5>
                            <p class="text-[#565656] text-sm">{{ notification.description }}</p>
                        </div>
                    </div>
                    <span class="text-[#6E6E6E] text-sm">{{ notification.time }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Bell, Shield, HelpCircle } from 'lucide-vue-next'

const notifications = [
    {
        icon: Bell,
        title: 'New Investment Opportunity',
        description: 'A new investment opportunity is available for you to explore.',
        time: '2 hours ago'
    },
    {
        icon: Shield,
        title: 'Security Alert',
        description: 'Your account security has been updated successfully.',
        time: '1 day ago'
    },
    {
        icon: HelpCircle,
        title: 'Support Ticket Update',
        description: 'Your support ticket has been resolved.',
        time: '2 days ago'
    }
]
</script> 