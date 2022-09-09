<template>
    <div class="client-company_main-title">Связанные компании</div>
    <div class="client-company-container">
      <div
        class="client-company-element"
        v-for="item in companies"
        :key="item.id"
      >
        <Company :company="item" />
      </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
import Company from "@/components/ForAllCards/Company.vue";
export default {
  name: "client-company-card",
  computed: {
    ...mapState({
      companies: (state) => state.ClientModule.client.companies,
    }),
  },
  components: { Company },
};
</script>
<style scoped>
.client-company_main-title {
  font-weight: 600;
  font-size: 1.5rem;
  background-color: #5e79ec;
  padding: 1rem;
  border: solid rgb(219, 217, 217) 1px 1px 1px 0;
}
.client-company-element {
  display: flex;
  padding: 1rem;
  align-items: center;
}
.client-company-container {
  display: flex;
  padding: 30px;
  border: solid rgb(219, 217, 217) 1px;
  background-color: rgb(250, 250, 250);
}
</style>
