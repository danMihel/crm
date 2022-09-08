<template>
  <div class="row mt-3">
    <h3 class="client-conmpany__main-title">Связанные компании</h3>
    <div v-for="item in companies" :key="item.id">
      <ClientCompany :company="item" />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import ClientCompany from "./ClientCompany.vue";
export default {
  name: "client-company-card",
  computed: {
    ...mapState({
      companies: (state) => state.ClientModule.client.companies,
    }),
  },
  components: { ClientCompany },
};
</script>
<style>
.client-conmpany__main-title {
  background-color: #5e79ec;
  padding: 1rem;
  border: solid rgb(219, 217, 217) 1px 1px 1px 0;
}
</style>
