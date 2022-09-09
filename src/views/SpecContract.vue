<template>
  <NavBar />
  <div class="wraper"> 
    <div>Описание:{{ contract.description }}</div>
  <div>Дата:{{ contract.date }}</div>
  <div>Стоимость:{{ contract.amount }}</div>
  <div>
    Компания:
    <div v-for="company in contract.company" :key="company.id">
      {{ company.name }}
    </div>
  </div>
  <div>
    Клиенты:
    <div v-for="client in contract.person" :key="client.id">
      {{ client.person }}
    </div>
  </div>
  <div>
    Менеджер:
    <div v-for="manager in contract.responsible" :key="manager.id">
      {{ manager.name }}
    </div>
  </div>

  </div>
</template>
<script>
import { mapState } from "vuex";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "spec-contract",
  computed: {
    ...mapState({
      contract: (state) => state.ContractModule.contract,
    }),
  },
  components: { NavBar },
  mounted() {
    this.$store.dispatch(
      "ContractModule/fetchIdContract",
      this.$route.params.id
    );
  },
};
</script>
<style></style>
