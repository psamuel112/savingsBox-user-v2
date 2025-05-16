<template>
  <div class="min-h-screen pb-16">
    <div class="max-w-6xl mx-auto ">
      <h2 class="text-center text-[#000831] text-[24px] font-bold mb-6">Savings</h2>
      <div class="flex justify-center mb-6">
        <div class="bg-[#F5F5F5] rounded-[20px] flex gap-4 p-4">
          <button v-for="tab in tabs" :key="tab" @click="activeTab = tab"
            :class="['px-8 py-2 rounded-[16px] font-semibold', activeTab === tab ? 'bg-[#4169E6] text-white' : 'text-[#4169E6]']">
            {{ tab }}
          </button>
        </div>
      </div>
      <ExploreTab v-if="activeTab === 'Explore'" :plans="plans" @autobox-terms="showAutoBoxTerms = true" />
      <div v-else-if="activeTab === 'Active'">
        <ActiveTab @view-plan="handleViewPlan" />
      </div>
      <AutoBoxTermsModal v-if="showAutoBoxTerms" @close="showAutoBoxTerms = false" @continue="handleAutoBoxContinue" />
      <AutoBoxCreateModal v-if="showAutoBoxCreate" @close="showAutoBoxCreate = false" @continue="handleAutoBoxCreateContinue" />
      <AutoBoxPaymentSourceModal
        v-if="showAutoBoxPaymentSource"
        @close="showAutoBoxPaymentSource = false"
        @continue="handleAutoBoxPaymentSourceContinue"
        @back="() => { showAutoBoxPaymentSource = false; showAutoBoxCreate = true; }"
      />
      <AutoBoxReviewModal
        v-if="showAutoBoxReview"
        @close="showAutoBoxReview = false"
        @back="() => { showAutoBoxReview = false; showAutoBoxPaymentSource = true; }"
        @success="handleAutoBoxSuccess"
      />
      <AutoBoxSuccessModal
        v-if="showAutoBoxSuccess"
        v-bind="successModalProps"
        @action="handleSuccessAction"
        @close="showAutoBoxSuccess = false"
      />
      <AutoBoxFundingModal
        v-if="showAutoBoxFundingModal"
        :plan="selectedPlan"
        @close="showAutoBoxFundingModal = false"
        @edit="handleEditPlan"
        @liquidate="handleLiquidatePlan"
      />
      <AutoBoxEdit
        v-if="showAutoBoxEdit"
        :plan="selectedPlan"
        @close="showAutoBoxEdit = false"
        @save="handleSaveEdit"
      />
      <AutoBoxLiquidateModal
        v-if="showAutoBoxLiquidate"
        @close="showAutoBoxLiquidate = false"
        @liquidate="handleLiquidateConfirm"
      />
      <!-- Add similar blocks for Broken and Completed tabs if needed -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ExploreTab from '~/components/savingsbox/ExploreTab.vue'
import ActiveTab from '~/components/savingsbox/ActiveTab.vue'
import AutoBoxTermsModal from '~/components/savingsbox/AutoBoxTermsModal.vue'
import AutoBoxCreateModal from '~/components/savingsbox/AutoBoxCreateModal.vue'
import AutoBoxPaymentSourceModal from '~/components/savingsbox/AutoBoxPaymentSourceModal.vue'
import AutoBoxReviewModal from '~/components/savingsbox/AutoBoxReviewModal.vue'
import AutoBoxSuccessModal from '~/components/savingsbox/AutoBoxSuccessModal.vue'
import AutoBoxFundingModal from '~/components/savingsbox/AutoBoxFundingModal.vue'
import AutoBoxEdit from '~/components/savingsbox/AutoBoxEdit.vue'
import AutoBoxLiquidateModal from '~/components/savingsbox/AutoBoxLiquidateModal.vue'
import autobox from "/assets/images/png/autobox.png";
import targetbox from '/assets/images/png/targetbox.png';
import simplebox from '/assets/images/png/simplebox.png';
import lockbox from '/assets/images/png/lockbox.png';
// definePageMeta({ layout: 'default-layout' })
const tabs = ['Explore', 'Active', 'Broken', 'Completed']
const activeTab = ref('Explore')
const showAutoBoxTerms = ref(false)
const showAutoBoxCreate = ref(false)
const showAutoBoxPaymentSource = ref(false)
const showAutoBoxReview = ref(false)
const showAutoBoxSuccess = ref(false)
const showAutoBoxFundingModal = ref(false)
const showAutoBoxEdit = ref(false)
const showAutoBoxLiquidate = ref(false)
const selectedPlan = ref(null)
const plans = [
  {
    title: 'AutoBox',
    desc: 'Save daily, weekly, or monthly',
    icon: autobox
  },
  {
    title: 'TargetBox',
    desc: 'Set a savings target',
    icon: targetbox
  },
  {
    title: 'SimpleBox',
    desc: 'Start your fixed interest savings',
    icon: simplebox
  },
  {
    title: 'LockBox',
    desc: 'Lock your funds and avoid temptation.',
    icon: lockbox
  }
]
function handleAutoBoxContinue() {
  showAutoBoxTerms.value = false;
  showAutoBoxCreate.value = true;
}
function handleAutoBoxCreateContinue() {
  showAutoBoxCreate.value = false;
  showAutoBoxPaymentSource.value = true;
}
function handleAutoBoxPaymentSourceContinue() {
  showAutoBoxPaymentSource.value = false;
  showAutoBoxReview.value = true;
}
function handleAutoBoxSuccess() {
  showAutoBoxReview.value = false;
  showAutoBoxSuccess.value = true;
}
function handleViewActivePlans() {
  showAutoBoxSuccess.value = false;
  activeTab.value = 'Active';
}
function handleViewPlan(plan) {
  selectedPlan.value = plan
  showAutoBoxFundingModal.value = true
}
function handleEditPlan() {
  showAutoBoxFundingModal.value = false
  showAutoBoxEdit.value = true
}
function handleLiquidatePlan() {
  showAutoBoxFundingModal.value = false
  showAutoBoxLiquidate.value = true
}
function handleLiquidateConfirm({ reason, password }) {
  // Do API call or logic here
  showAutoBoxLiquidate.value = false
  // Optionally show a success modal
}
function handleSaveEdit(updatedData) {
  // Do API call or update logic here
  showAutoBoxEdit.value = false
  showAutoBoxSuccess.value = true
  successModalProps.value = {
    title: 'Plan Updated',
    message: 'Congratulations, Your AutoBox information has been updated',
    buttonText: 'Back to Home'
  }
}
const successModalProps = ref({})
function handleSuccessAction() {
  showAutoBoxSuccess.value = false
  // Optionally reset view or go to home
}
</script>

<style scoped>
</style> 