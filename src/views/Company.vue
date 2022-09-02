<template>
  <NavBar />
  <CompanyCard/>
  <PersonsCard/>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import CompanyCard from "@/components/CompanyCards/CompanyCard.vue";
import PersonsCard from "@/components/CompanyCards/PersonsCard.vue";
export default {
  name: "user",
  components: { NavBar, CompanyCard, PersonsCard },
  mounted() {
    this.$store.dispatch("CompanyModule/fetchCompany");
  },
};
</script>
<style>

</style>
  