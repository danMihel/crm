<template>
  <NavBar />
  <div>
    <div
      v-for="item in this.$store.state.ClientModule.allClients"
      :key="item.id"
    >
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "clients",
  components: { NavBar },
  mounted() {
    this.$store.dispatch("ClientModule/fetchAllClients");
  },
};
</script>
