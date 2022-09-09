<template>
  <div>
    <div class="company-data__header">Договор № {{ contract.number }}</div>
    <div class="company-data-container">
      <div class="company-element">
        <div class="company-element__title">Дата заключения</div>
        <div class="company-element__data">
          {{ contract.date }}
        </div>
      </div>
      <div class="company-element">
        <div class="company-element__title">Контрагент</div>
        <div class="company-element__data">
          <div v-for="company in contract.company" :key="company.id">
            {{ company.name }}
          </div>
        </div>
      </div>
      <div class="company-element">
        <div class="company-element__title">Клиенты</div>
        <div class="company-element__data">
          <div v-for="person in contract.persons" :key="person.id">
            {{ person.name }}
          </div>
        </div>
      </div>
      <div class="company-element">
        <div class="company-element__title">Стоимость</div>
        <div class="company-element__data">
          {{ contract.amount }}
        </div>
      </div>
      <div class="company-element">
        <div class="company-element__title">Менеджер</div>
        <div class="company-element__data">
          <div v-for="manager in contract.responsible" :key="manager.id">
            {{ manager.name }}
          </div>
        </div>
      </div>
      <div class="company-element">
        <div class="company-element__title">Описание</div>
        <div class="company-element__data">
            {{ contract.description }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "contract-card",
  computed: {
    ...mapState({
      contract: (state) => state.ContractModule.contract,
    }),
  },
};
</script>
<style>
.company-data-container {
  padding: 30px;
  border: solid rgb(219, 217, 217) 1px;
  background-color: rgb(250, 250, 250);
}
.company-data__header {
  font-weight: 600;
  font-size: 1.5rem;
  background-color: #5e79ec;
  padding: 1rem;
  border: solid rgb(219, 217, 217) 1px 1px 1px 0;
}
.company-element {
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-around;
}
.company-element:not(:last-child) {
  border-bottom: 1px solid rgb(117, 117, 117);
}
.company-element__title {
  font-weight: 600;
}
.company-element__data {
  width: 20%;
}
.no-text-wrap {
  white-space: nowrap;
}
</style>
