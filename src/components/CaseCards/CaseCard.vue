<template>
  <div>
    <h2>Дело № {{ cases.number }}</h2>
    <div class="case-data-container">
      <div class="case-element">
        <div class="case-element__title">Описание:</div>
        <div class="case-element__data">
          {{ cases.description }}
        </div>
      </div>
      <div class="case-element">
        <div class="case-element__title">Связанные компании:</div>
        <div class="case-element__data">
          <div v-for="item in cases.companies" :key="item.id">
            <div>{{ item.name }}</div>
          </div>
          <CaseAddCompanyCard/>
        </div>
      </div>
      <div class="case-element">
        <div class="case-element__title">Клиенты:</div>
        <div class="case-element__data">
          <div v-for="item in cases.persons" :key="item.id">
            <div>{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="case-element">
        <div class="case-element__title">Ответственные</div>
        <div class="case-element__data">
          <div v-for="item in cases.responsible" :key="item.id">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import CaseAddCompanyCard from "./CaseAddCompanyCard.vue";
export default {
    name: "case-card",
    computed: {
        ...mapState({
            cases: (state) => state.CaseModule.case,
            searchedCompany: (state) => state.CaseModule.searchedCompany,
        }),
    },
    components: { CaseAddCompanyCard }
};
</script>
<style>
.case-data-container {
  padding: 30px;
  border: solid rgb(219, 217, 217) 1px;
  background-color: rgb(250, 250, 250);
}
.case-data__header {
  font-weight: 600;
  font-size: 1.5rem;
  background-color: #5e79ec;
  padding: 1rem;
  border: solid rgb(219, 217, 217) 1px 1px 1px 0;
}
.case-element {
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-around;
}
.case-element:not(:last-child) {
  border-bottom: 1px solid rgb(117, 117, 117);
}
.case-element__title {
  font-weight: 600;
}
.case-element__data {
  display: flex;
  flex-direction: column;
  width: 20%;
}
.no-text-wrap {
  white-space: nowrap;
}
</style>
