<template>
  <br>
  <div v-if="!visible" @click="visible = !visible">Добавить</div>
  <div v-if="visible">
    <div @click=" closeSearchInput">Закрыть</div>
    <input v-model="query" @input="findPerson" type="text" class="add-person-input"/>
    <div v-for="item in searchedPerson" :key="item.id" class="add-person-output">
      <div class="add-person-output-item" @click="addPerson(item)">{{ item.name }}</div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "case-add-person-card",
  data() {
    return {
      visible: false,
      query: "",
    };
  },
  methods: {
    async addPerson(item) {
      console.log('addPErson')
      await this.$store.dispatch("CaseModule/postPerson", item.id);
      await this.$store.dispatch("CaseModule/fetchIdCase", this.$route.params.id);
      await this.$store.commit("CaseModule/setSearchedPerson", "");
      this.query = "";
      this.visible = false;
    },
    async findPerson() {
      console.log('find PErson')
      await this.$store.commit("CaseModule/setSearchQuery", this.query);
      await this.$store.dispatch("CaseModule/findPerson",);
    },
    closeSearchInput(){
      this.query = "";
      this.visible = false;
      this.$store.commit("CaseModule/setSearchedPerson", "");
    }
  },
  computed: {
    ...mapState({
      cases: (state) => state.CaseModule.case,
      searchedPerson: (state) => state.CaseModule.searchedPerson,
    }),
  },
};
</script>
<style>
  .add-person-output{
    border-right: 1px solid black;
    border-left: 1px solid black;
    width: 200px;
  }
  .add-person-output:last-child{
    border-bottom: 1px solid black;
  }
  .add-person-output-item:hover{
    background-color: #5e78ecbe;
    cursor: pointer;
  }
  .add-person-input{
    width: 200px;
  }
</style>
