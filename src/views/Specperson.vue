<template>
  <NavBar />
  <div class="wraper">
    <div class="spec-item-wraper"><personNameCard /></div>
    <div class="spec-item-wraper"><personCompanyCard /></div>
    <div class="spec-item-wraper"><personCasesCard /></div>
    <div class="spec-item-wraper"><personContractCard /></div>
  </div> 
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import personNameCard from "@/components/PersonCards/personNameCard.vue";
import personCompanyCard from "@/components/PersonCards/personCompanyCard.vue";
import personCasesCard from "@/components/PersonCards/personCasesCard.vue";
import personContractCard from "@/components/PersonCards/personContractCard.vue";
export default {
  name: "spec-person",
  components: {
    NavBar,
    personNameCard,
    personCompanyCard,
    personCasesCard,
    personContractCard,
  },
  mounted() {
    this.$store.dispatch("PersonModule/fetchIdperson", this.$route.params.id);
  },
};
</script>
