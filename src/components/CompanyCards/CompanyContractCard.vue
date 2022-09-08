<template>
  <div class="contract__header">Договоры</div>
  <div class="contract-container">
    <div v-for="item in contracts" :key="item.id">
      <Contract :contract="item" />
    </div>
    <div class="add-contract">Добавить</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Contract from "../ForAllCards/Contract.vue";
export default {
  name: "company-contract,",
  computed: {
    ...mapState({
      contracts: (state) => state.CompanyModule.company.contracts,
    }),
  },
  components: { Contract },
};
</script>
<style scoped>
.add-contract {
  align-self: center;
  margin-left: 2rem;
}
.contract-container {
  padding: 30px;
  border: solid rgb(219, 217, 217) 1px;
  background-color: rgb(250, 250, 250);
}

.contract__header {
  font-weight: 600;
  font-size: 1.5rem;
  background-color: #5e79ec;
  padding: 1rem;
  border: solid rgb(219, 217, 217) 1px 1px 1px 0;
}
</style>
