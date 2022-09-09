<template>
  <div class="person-case__main-title">Дела</div>
  <div class="person-case-container">
    <div class="person-case-element" v-for="item in cases" :key="item.id">
      <Case :case="item" />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Case from "@/components/ForAllCards/Case.vue";
export default {
  name: "person-cases",
  computed: {
    ...mapState({
      cases: (state) => state.PersonModule.person.cases,
    }),
  },
  components: { Case },
};
</script>
<style scoped>
.person-case__main-title {
  font-weight: 600;
  font-size: 1.5rem;
  background-color: #5e79ec;
  padding: 1rem;
  border: solid rgb(219, 217, 217) 1px 1px 1px 0;
}
.person-case-container {
  padding: 30px;
  border: solid rgb(219, 217, 217) 1px;
  background-color: rgb(250, 250, 250);
}
.person-case-element {
  display: flex;
  padding: 1rem;
  align-items: center;
}
.person-case-element:not(:last-child) {
  border-bottom: 1px solid rgb(117, 117, 117);
}
</style>
