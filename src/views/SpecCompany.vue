<template>
  <NavBar />
  <div class="company-name-wraper"><CompanyNameCard /></div>
  <div class="company-card-wraper"><CompanyCard /></div>
  <div class="persons-card-wraper"><PersonsCard /></div>
  <div class="case-card-wraper"><CompanyCaseCard/></div>
</template>
<script>
import CompanyCard from "@/components/CompanyCards/CompanyCard.vue";
import PersonsCard from "@/components/CompanyCards/PersonsCard.vue";
import CompanyCaseCard from "@/components/CompanyCards/CompanyCaseCard.vue";
import CompanyNameCard from "@/components/CompanyCards/CompanyNameCard.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "spec-company",
  components: { CompanyCard, PersonsCard, CompanyCaseCard, CompanyNameCard, NavBar },
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
