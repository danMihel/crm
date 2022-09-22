<template>
  <NavBar />
  <div class="wraper">
    <CaseCard />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import CaseCard from "@/components/CaseCards/CaseCard.vue";
export default {
  name: "spec-case",
  data() {
    return {
      query: "",
    };
  },
  components: { NavBar, CaseCard},
  mounted() {
    this.$store.dispatch("CaseModule/fetchIdCase", this.$route.params.id);
  },
};
</script>
