<template>
  <NavBar />
  <div
    v-for="item in this.$store.state.CompanyModule.allCompanies"
    :key="item.id" >
    <p @click="$router.push(`/company/${item.id}`)">{{ item.name }}</p>
  </div>
  <div v-for="pageNumber in this.$store.state.CompanyModule.totalPages" :key="pageNumber">
   <p @click="setPage(pageNumber)">{{ pageNumber }}</p> 
  </div>
  <div>  
   <p @click="setItems(6)">Показывать по 6 </p> 
   <p @click="setItems(10)">Показывать по 10 </p> 
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "company",
  data() {
    return {
      page: 1,
      items: 1,
    };
  },
  methods: {
    setPage(number) {
      this.page = number,
      this.$store.dispatch("CompanyModule/fetchAllCompanies", this.page );
    },
    setItems(number) {
      this.items = number,
      this.$store.commit("CompanyModule/setItemsPerPages", this.items);
      this.$store.dispatch("CompanyModule/fetchAllCompanies", 1 );
    },
  },
  components: { NavBar },
  mounted() {
    this.$store.dispatch("CompanyModule/fetchAllCompanies", this.page, this.items );
  },
};
</script>
