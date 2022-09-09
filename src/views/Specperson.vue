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
import personNameCard from "@/components/personCards/personNameCard.vue";
import personCompanyCard from "@/components/personCards/personCompanyCard.vue";
import personCasesCard from "@/components/personCards/personCasesCard.vue";
import personContractCard from "@/components/personCards/personContractCard.vue";
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
