<template>
    <NavBar/>
    <ClientNameCard/>
    <ClientCompanyCard/>
    <ClientCasesCard/>
    <ClientContractCard/>
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