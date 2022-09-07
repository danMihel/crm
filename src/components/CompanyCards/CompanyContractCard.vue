<template>
  <div class="contract__header">Договоры</div>
  <div class="contract-container">
    <div v-for="contract in contracts" :key="contract.id">
        sds
      {{contract.number}}
    </div>
  </div>
</template>
<script>
     import { mapState } from 'vuex';
export default {
  name: "company-contract,",
  computed: {
      ...mapState({
        contracts: (state) => state.CompanyModule.company.contracts,
      }),
    }
};
</script>
<style scoped>
.contract-container {
  padding: 30px;
  border-radius: 0px 0px 10px 10px;
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
