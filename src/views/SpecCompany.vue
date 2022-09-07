<template>
  <NavBar />
  <div class="company-name-wraper"><CompanyNameCard /></div>
  <div class="company-item-wraper"><CompanyCard /></div>
  <div class="company-item-wraper"><CompanyPersonsCard /></div>
  <div class="company-item-wraper"><CompanyCaseCard/></div>
  <div class="company-item-wraper"><CompanyContractCard/></div>
</template>
<script>
import CompanyCard from "@/components/CompanyCards/CompanyCard.vue";
import CompanyPersonsCard from "@/components/CompanyCards/CompanyPersonsCard.vue";
import CompanyCaseCard from "@/components/CompanyCards/CompanyCaseCard.vue";
import CompanyNameCard from "@/components/CompanyCards/CompanyNameCard.vue";
import NavBar from "@/components/NavBar.vue";
import CompanyContractCard from "@/components/CompanyCards/CompanyContractCard.vue";
export default {
  name: "spec-company",
  components: { CompanyCard, CompanyPersonsCard, CompanyCaseCard, CompanyNameCard, NavBar, CompanyContractCard },
  mounted() {
    this.$store.dispatch("CompanyModule/fetchIdCompany", this.$route.params.id);
  },
};
</script>
<style>
    .compant-master-container {
      margin: auto 1rem ;  
    }
    .company-name-wraper {
      display: flex;
      justify-content: center;
    }
    .company-item-wraper {
      margin-top: 2rem;
    }
    </style>
