<template>
    <NavBar/>
    <ClientNameCard/>
    <ClientCompanyCard/>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import ClientNameCard from "../components/ClientCards/ClientNameCard.vue";
import ClientCompanyCard from "@/components/ClientCards/ClientCompanyCard.vue";
    export default {
    name: "spec-client",
    components: { NavBar, ClientNameCard, ClientCompanyCard },
    mounted() {
    this.$store.dispatch("ClientModule/fetchIdClient", this.$route.params.id);
  },
}
</script>