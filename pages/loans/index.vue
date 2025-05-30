<template>
  <div class="min-h-screen pb-16">
    <div class="max-w-6xl mx-auto ">
      <h2 class="text-center text-[#000831] text-[24px] font-bold mb-6">Loans</h2>
      <div class="flex justify-center mb-6">
        <div class="bg-[#F5F5F5] rounded-[20px] flex gap-4 p-4">
          <button v-for="tab in tabs" :key="tab" @click="activeTab = tab"
            :class="['px-8 py-2 rounded-[16px] font-semibold', activeTab === tab ? 'bg-[#4169E6] text-white' : 'text-[#4169E6]']">
            {{ tab }}
          </button>
        </div>
      </div>
   
      <ExploreTab v-if="activeTab === 'Explore'" :plans="plans" @smes-terms="showLoansTerms = true" />
      <div v-else-if="activeTab === 'Active'">
        <ActiveTab @view-plan="handleViewPlan" />
      </div>
      <LoansTermsModal v-if="showLoansTerms" @close="showLoansTerms = false" @continue="handleLoansContinue" />
      <SmeLoanApplicationModal v-if="showSmeLoanApplicationModal" @close="showSmeLoanApplicationModal"
        @continue="handleLoanApplicationContinue" />
      <SmeDocumentUploadModal v-if="showSmeDocumentUpload" @continue="handleLoanDocumentContinue"/>
<SmeDocumentProgress v-if="showDocumentProgress" @continue="handlePaymentModal"/>
<LoanPaymenrModal v-if="showPaymentModal" @continue="handleSummaryModal"/>
    </div>
    <LoanSummaryModal v-if="showSummaryModal"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ExploreTab from '~/components/savingsbox/ExploreTab.vue'
import LoansTermsModal from '~/components/loans/LoansTermsModal.vue'
import ActiveTab from '~/components/savingsbox/ActiveTab.vue'
import SmeLoanApplicationModal from '~/components/loans/SmeLoanApplicationModal.vue'
import SmeDocumentUploadModal from '~/components/loans/SmeDocumentUploadModal.vue'
import SmeDocumentProgress from '~/components/loans/SmeDocumentProgress.vue'
import collateral from '/assets/images/svg/collateral.svg';
import salary from '/assets/images/svg/salary.svg';
import smes from '/assets/images/svg/smes.svg';
import LoanPaymenrModal from '~/components/loans/LoanPaymenrModal.vue'
import LoanSummaryModal from '~/components/loans/LoanSummaryModal.vue'
const tabs = ['Explore', 'Active', 'Declined', 'In Review', 'Settled']
const activeTab = ref('Explore')
const showLoansTerms = ref(false)
const showPaymentModal = ref(false)
const showSmeDocumentUpload = ref(false)
const showDocumentProgress = ref(false)
const showAutoBoxReview = ref(false)
const showAutoBoxSuccess = ref(false)
const showSmeLoanApplicationModal = ref(false)
const showAutoBoxFundingModal = ref(false)
const showAutoBoxEdit = ref(false)
const showSummaryModal = ref(false)
const showAutoBoxLiquidate = ref(false)
const selectedPlan = ref(null)
const plans = [
  {
    title: 'SMEs Loan',
    desc: 'Save daily, weekly, or monthly',
    icon: smes
  },
  {
    title: 'Collateral Base Loan',
    desc: 'Property Exchange for Loan',
    icon: collateral
  },
  {
    title: 'Salary Earners Loan',
    desc: 'For government & private staff',
    icon: salary
  }
]
function handleLoansContinue() {
  showLoansTerms.value = false;
  showSmeLoanApplicationModal.value = true;
}
function handleLoanApplicationContinue() {
  showSmeLoanApplicationModal.value = false;
  showSmeDocumentUpload.value = true;
}
function handleLoanDocumentContinue() {
  showSmeDocumentUpload.value = false;
  showDocumentProgress.value = true;
}
function handlePaymentModal() {
  showDocumentProgress.value = false;
  showPaymentModal.value = true;
}
function handleSummaryModal() {
  showPaymentModal.value = false;
  showSummaryModal.value = true;
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

<style scoped></style>