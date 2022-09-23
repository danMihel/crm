<template>
  <br>
  <div v-if="!visible" @click="visible = !visible">Добавить</div>
  <div v-if="visible">
    <div @click=" closeSearchInput">Закрыть</div>
    <input v-model="query" @input="findResponsible" type="text" class="add-responsible-input"/>
    <div v-for="item in searchedResponsible" :key="item.id" class="add-responsible-output">
      <div class="add-responsible-output-item" @click="addResponsible(item)">{{ item.name }}</div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "case-add-responsible-card",
  data() {
    return {
      visible: false,
      query: "",
    };
  },
  methods: {
    async addResponsible(item) {
      console.log('addresponsible')
      await this.$store.dispatch("CaseModule/postResponsible", item.id);
      await this.$store.dispatch("CaseModule/fetchIdCase", this.$route.params.id);
      await this.$store.commit("CaseModule/setSearchedResponsible", "");
      this.query = "";
      this.visible = false;
    },
    async findResponsible() {
      console.log('find responsible')
      await this.$store.commit("CaseModule/setSearchQuery", this.query);
      await this.$store.dispatch("CaseModule/findResponsible",);
    },
    closeSearchInput(){
      this.query = "";
      this.visible = false;
      this.$store.commit("CaseModule/setSearchedResponsible", "");
    }
  },
  computed: {
    ...mapState({
      cases: (state) => state.CaseModule.case,
      searchedresponsible: (state) => state.CaseModule.searchedresponsible,
    }),
  },
};
</script>
<style>
  .add-responsible-output{
    border-right: 1px solid black;
    border-left: 1px solid black;
    width: 200px;
  }
  .add-responsible-output:last-child{
    border-bottom: 1px solid black;
  }
  .add-responsible-output-item:hover{
    background-color: #5e78ecbe;
    cursor: pointer;
  }
  .add-responsible-input{
    width: 200px;
  }
</style>
