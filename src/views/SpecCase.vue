<template>
  <NavBar />
  <div class="wraper">
    <CaseCard />
    <CaseAddCard/>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import { mapState } from "vuex";
import CaseCard from "@/components/CaseCards/CaseCard.vue";
import CaseAddCard from "@/components/CaseCards/CaseAddCard.vue";
export default {
  name: "spec-case",
  data() {
    return {
      query: "",
    };
  },
  components: { NavBar, CaseCard, CaseAddCard },
  mounted() {
    this.$store.dispatch("CaseModule/fetchIdCase", this.$route.params.id);
  },
};
</script>
