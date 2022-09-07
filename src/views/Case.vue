<template>
  <NavBar />
  <div v-for="item in this.$store.state.CaseModule.allCases" :key="item.id">
    <div @click="$router.push(`/case/${item.id}`)">
      <p>{{ item.number }}</p>
      <p>{{ item.description }}</p>
      <p>{{ item.id }}</p>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "case",
  components: { NavBar },
  mounted() {
    this.$store.dispatch("CaseModule/fetchAllCases");
  },
};
</script>
