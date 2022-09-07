<template>
  <NavBar />
  <div v-for="item in this.$store.state.CompanyModule.allCompanies" :key="item.id">
    <p @click="$router.push(`/company/${item.id}`)">{{ item.name }}</p>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "company",
  components: { NavBar },
  mounted() {
    this.$store.dispatch("CompanyModule/fetchAllCompanies");
  },
};
</script>
