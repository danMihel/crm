<template>
  <NavBar />
    <div v-for="item in this.$store.state.ClientModule.allClients" :key="item.id">
      <p @click="$router.push(`/client/${item.id}`)">{{ item.name }}</p>
    </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "client",
  components: { NavBar },
  mounted() {
    this.$store.dispatch("ClientModule/fetchAllClients");
  },
};
</script>
