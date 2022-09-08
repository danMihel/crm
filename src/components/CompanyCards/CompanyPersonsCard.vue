<template>
    <div class="person__header">Контактные лица</div>
    <div class="person-container">
      <div class="person-element" v-for="item in persons" :key="item.id">
        <Persone :person="item" :key="item.id"/>
      </div>
      <div class="add-person"> Добавить</div>
    </div>
</template>
<script>
  import { mapState } from 'vuex';
  import Persone from '@/components/ForAllCards/Persone.vue';
export default {
  name: "persons-card",
  components: { Persone },
  computed: {
      ...mapState({
        persons: (state) => state.CompanyModule.company.persons,
      }),
    },
};
</script>
<style scoped>
  .add-person{
    align-self: center;
    margin-left: 2rem;
  }
  .person-element {
    display: flex;
    padding: 1rem;
    align-items: center;
  }
.person-container {
  display: flex;
  padding: 30px;
  border: solid rgb(219, 217, 217) 1px;
  background-color: rgb(250, 250, 250);
}
.person__header {
  font-weight: 600;
  font-size: 1.5rem;
  background-color: #5e79ec;
  padding: 1rem;
  border: solid rgb(219, 217, 217) 1px 1px 1px 0;
} 

</style>
