<template>
    <NavBar/>
    <div class="wraper">
    <div class="spec-item-wraper"><ClientNameCard/></div>
    <div class="spec-item-wraper"><ClientCompanyCard/></div>
    <div class="spec-item-wraper"><ClientCasesCard/></div>
    <div class="spec-item-wraper"><ClientContractCard/></div>
    </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import ClientNameCard from "@/components/ClientCards/ClientNameCard.vue";
import ClientCompanyCard from "@/components/ClientCards/ClientCompanyCard.vue";
import ClientCasesCard from "@/components/ClientCards/ClientCasesCard.vue";
import ClientContractCard from "@/components/ClientCards/ClientContractCard.vue";
    export default {
    name: "spec-client",
    components: { NavBar, ClientNameCard, ClientCompanyCard, ClientCasesCard, ClientContractCard },
    mounted() {
    this.$store.dispatch("ClientModule/fetchIdClient", this.$route.params.id);
  },
}
</script>