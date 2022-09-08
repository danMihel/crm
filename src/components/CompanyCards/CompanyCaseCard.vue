<template>
  <div class="case__main-title">Дела</div>
  <div class="case-container">
    <div v-for="item in cases" :key="item.id">
      <Case :case="item" />
    </div>
    <div class="add-case">Добавить</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Case from "@/components/ForAllCards/Case.vue";
export default {
  name: "case-card",
  components: { Case },
  computed: {
    ...mapState({
      cases: (state) => state.CompanyModule.company.cases,
    }),
  },
};
</script>
<style>
.add-case {
  align-self: center;
  margin-left: 2rem;
}
.case__main-title {
  font-weight: 600;
  font-size: 1.5rem;
  background-color: #5e79ec;
  padding: 1rem;
  border: solid rgb(219, 217, 217) 1px 1px 1px 0;
}
.case-container {
  padding: 30px;
  border: solid rgb(219, 217, 217) 1px;
  background-color: rgb(250, 250, 250);
}
</style>
