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
import CompanyCard from "@/components/CompanyCards/CompanyCard.vue";
import PersonsCard from "@/components/CompanyCards/PersonsCard.vue";
import CaseCard from "@/components/CompanyCards/CaseCard.vue";
import CompanyNameCard from "@/components/CompanyCards/CompanyNameCard.vue";
export default {
  name: "user",
  components: { NavBar, CompanyCard, PersonsCard, CaseCard, CompanyNameCard },
  mounted() {
    this.$store.dispatch("CompanyModule/fetchAllCompanies");
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
.company-card-wraper {
  margin-top: 2rem;
}
.persons-card-wraper {
  margin-top: 2rem;
}
.case-card-wraper {
  margin-top: 2rem;
}
</style>
