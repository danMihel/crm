<template>
  <NavBar />
  <div v-for="item in this.$store.state.ContractModule.allContracts" :key="item.id">
    <div @click="$router.push(`/contract/${item.id}`)">
      Дата:  {{ item.date }} / Номер: {{ item.number }} / Описание: {{ item.description }}
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "contract",
  components: { NavBar },
  mounted() {
    this.$store.dispatch("ContractModule/fetchAllContracts");
  },
};
</script>
<style scoped></style>
