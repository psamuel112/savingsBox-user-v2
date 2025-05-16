<template>
    <div class="mt-5">
        <div class="space-y-4">
                <AccountMenuItem :icon="community" label="Community" />
                <AccountMenuItem :icon="support" label="Support" @click="$emit('open-nested', 'support')" />
                <AccountMenuItem :icon="privacy" label="Privacy Policy" />
            </div>

    </div>
</template>
<script setup>
import { ref } from 'vue'
import community from "/assets/images/png/community-icon.png";
import support from "/assets/images/png/support-icon.png";
import privacy from "/assets/images/png/privacy-icon.png";

import AccountMenuItem from '~/components/account/AccountMenuItem.vue'

</script>