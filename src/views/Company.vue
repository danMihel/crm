<template>
  <NavBar />
  <div>
    <div v-for="item in this.$store.state.CompanyModule.allCompanies" :key="item.id"> 
     <p @click="$router.push(`/company/${item.id}`)">{{item.name}}</p>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "user",
  components: { NavBar, },
  mounted() {
    this.$store.dispatch("CompanyModule/fetchAllCompanies");
  },
};
</script>

