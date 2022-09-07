<template>
  <NavBar />
  <div>Номер: {{ cases.number }}</div>
  <div>Описание: {{ cases.description }}</div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import { mapState } from "vuex";
export default {
  name: "spec-case",
  components: { NavBar },
  computed: {
    ...mapState({
      cases: (state) => state.CaseModule.case,
    }),
  },
  mounted() {
    this.$store.dispatch("CaseModule/fetchIdCase", this.$route.params.id);
  },
};
</script>
