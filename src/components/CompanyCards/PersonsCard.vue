<template>
  <div>
    <div class="person__header">Контактные лица</div>
    <div class="person-container">
      <div
        class="person-element"
        v-for="item in $store.state.CompanyModule.company.persons"
        :key="item.id">
        <div class="person-name no-text-wrap">{{ item.person }}</div>
        <div class="person-data">{{ item.position }}</div>
        <div class="person-data">{{ item.phone }} +79555222552</div>
        <div class="person-data">{{ item.email }} kjasfasfs@jasfaiunas.com</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "persons-card",
};
</script>
<style>
.person-container {
  padding: 30px;
  border-radius: 0px 0px 10px 10px;
  border: solid rgb(219, 217, 217) 1px;
  background-color: rgb(250, 250, 250);
}
.card-company__main-title {
  font-weight: 600;
  font-size: 1.5rem;
  padding: 1rem;
}
.person__header {
  font-weight: 600;
  font-size: 1.5rem;
  background-color: #42b983;
  padding: 1rem;
  border: solid rgb(219, 217, 217) 1px 1px 1px 0;
}
.person-element {
  display: flex;
  padding: 1rem;
  align-items: center;
}
.person-element:not(:last-child) {
  border-bottom: 1px solid rgb(117, 117, 117);
}
.person-name {
  font-weight: 600;
}
.person-data {
  margin-left: 3rem;
}
.no-text-wrap {
  white-space: nowrap;
}
</style>
