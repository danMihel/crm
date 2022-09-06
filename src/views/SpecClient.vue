<template>
    <NavBar/>
    <ClientNameCard/>
    <ClientCompanyCard/>
    <ClientCasesCard/>
    <ClientContractsCard/>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import ClientNameCard from "../components/ClientCards/ClientNameCard.vue";
import ClientCompanyCard from "@/components/ClientCards/ClientCompanyCard.vue";
import ClientCasesCard from "@/components/ClientCards/ClientCasesCard.vue";
import ClientContractsCard from "@/components/ClientCards/ClientContractsCard.vue";
    export default {
    name: "spec-client",
    components: { NavBar, ClientNameCard, ClientCompanyCard, ClientCasesCard, ClientContractsCard },
    mounted() {
    this.$store.dispatch("ClientModule/fetchIdClient", this.$route.params.id);
  },
}
</script>