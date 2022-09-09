<template>
  <NavBar />
  <div class="wraper">
    <div class="spec-item-wraper"><CompanyNameCard /></div>
      <div class="spec-item-wraper"><CompanyCard /></div>
      <div class="spec-item-wraper"><CompanyPersonsCard /></div>
      <div class="spec-item-wraper"><CompanyContractCard /></div>
      <div class="spec-item-wraper"><CompanyCaseCard /></div>
  </div>
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
  components: {
    CompanyCard,
    CompanyPersonsCard,
    CompanyCaseCard,
    CompanyNameCard,
    NavBar,
    CompanyContractCard,
  },
  mounted() {
    this.$store.dispatch("CompanyModule/fetchIdCompany", this.$route.params.id);
  },
};
</script>
<style scoped>

</style>
