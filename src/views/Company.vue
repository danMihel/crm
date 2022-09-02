<template>
  <NavBar />
  <div class="compant-master-container" v-if="this.$store.state.CompanyModule.company.length === 0">
    <div class="company-name-wraper"><CompanyNameCard /></div>
    <div class="company-card-wraper"><CompanyCard /></div>
    <div class="persons-card-wraper"><PersonsCard /></div>
    <div class="case-card-wraper"><CaseCard /></div>
  </div>
  <div v-else>
    <div v-for="item in this.$store.state.CompanyModule.allCompanies" :key="item.id"> 
     <p @click="openCompany(item.id)">{{item.name}}</p>
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
  methods:{
    async openCompany(i){
      await this.$store.commit("CompanyModule/setVueCompany", i);
      await this.$store.dispatch("CompanyModule/fetchCompany");
    }
  },
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
