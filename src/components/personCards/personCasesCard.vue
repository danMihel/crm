<template>
  <div class="person-case__main-title">Дела</div>
  <div class="person-case-container">
    <AddBtn />
    <div v-for="item in cases" :key="item.id">
      <Case :case="item" />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Case from "@/components/ForAllCards/Case.vue";
import AddBtn from "../UI/AddBtn.vue";
export default {
  name: "person-cases",
  computed: {
    ...mapState({
      cases: (state) => state.PersonModule.person.cases,
    }),
  },
  components: { Case, AddBtn },
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
</style>
