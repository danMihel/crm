<template>
  <div>
    <div class="case__main-title">Дела</div>
    <div class="case-container">
      <div
        class="case-element"
        v-for="item in $store.state.CompanyModule.company.cases"
        :key="item.id">
        <div class="case-number">{{ item.number }}</div>
        <div class="case-name">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "case-card",
};
</script>
<style>
.case__main-title {
  font-weight: 600;
  font-size: 1.5rem;
  background-color: #42b983;
  padding: 1rem;
  border: solid rgb(219, 217, 217) 1px 1px 1px 0;
}
.case-element {
  display: flex;
  padding: 1rem;
  align-items: center;
}
.case-element:not(:last-child) {
  border-bottom: 1px solid rgb(117, 117, 117);
}
.case-name {
  font-weight: 600;
  margin-left: 1rem;
}
.person-data {
  margin-left: 3rem;
}
</style>
