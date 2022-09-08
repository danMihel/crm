<template>
  <NavBar />
  <div v-for="item in this.$store.state.ContractModule.allContracts"
    :key="item.id">
    <div @click="$router.push(`/contract/${item.id}`)">
      Дата: {{ item.date }} / Номер: {{ item.number }} / Описание:
      {{ item.description }}
    </div>
  </div>
  <div
    v-for="pageNumber in this.$store.state.CompanyModule.totalPages"
    :key="pageNumber"
  >
    <p @click="setPage(pageNumber)">{{ pageNumber }}</p>
  </div>
  <div>
    <p @click="setItems(6)">Показывать по 6</p>
    <p @click="setItems(10)">Показывать по 10</p>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "contract",
  components: { NavBar },
  methods: {
    setPage(number) {
      (this.page = number),
        this.$store.dispatch("ContractModule/fetchAllContracts", this.page);
    },
    setItems(number) {
      (this.items = number),
        this.$store.commit("CompanyModule/setItemsPerPages", this.items);
      this.$store.dispatch("ContractModule/fetchAllContracts", 1);
    },
  },
  mounted() {
    this.$store.dispatch(
      "ContractModule/fetchAllContracts",
      this.page,
      this.items
    );
  },
};
</script>
<style scoped></style>
