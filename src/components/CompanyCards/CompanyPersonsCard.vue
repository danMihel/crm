<template>
  <div>
    <div class="person__header">Контактные лица</div>
    <div class="person-container">
      <div v-for="item in persons" :key="item.id">
        <CompanyPersone :person="item" :key="item.id"/>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  import CompanyPersone from './CompanyPersone.vue';
export default {
  name: "persons-card",
  components: { CompanyPersone },
  computed: {
      ...mapState({
        persons: (state) => state.CompanyModule.company.persons,
      }),
    },
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
  background-color: #5e79ec;
  padding: 1rem;
  border: solid rgb(219, 217, 217) 1px 1px 1px 0;
}

</style>
