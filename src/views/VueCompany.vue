<template>
  <NavBar />
  <div class="company-name-wraper"><CompanyNameCard /></div>
  <div class="company-card-wraper"><CompanyCard /></div>
  <div class="persons-card-wraper"><PersonsCard /></div>
  <div class="case-card-wraper"><CaseCard /></div>
</template>
<script>
import CompanyCard from "@/components/CompanyCards/CompanyCard.vue";
import PersonsCard from "@/components/CompanyCards/PersonsCard.vue";
import CaseCard from "@/components/CompanyCards/CaseCard.vue";
import CompanyNameCard from "@/components/CompanyCards/CompanyNameCard.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "spec-company",
  components: { CompanyCard, PersonsCard, CaseCard, CompanyNameCard, NavBar },
  mounted() {
    this.$store.dispatch("CompanyModule/fetchIdCompany", this.$route.params.id);
  },
};
</script>
