<template>
  <br>
  <div v-if="!visible" @click="visible = !visible">Добавить</div>
  <div v-if="visible">
    <div @click=" closeSearchInput">Закрыть</div>
    <input v-model="query" @input="findCompany" type="text" class="add-company-input"/>
    <div v-for="item in searchedCompany" :key="item.id" class="add-company-output">
      <div class="add-company-output-item" @click="addCompany(item)">{{ item.name }}</div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "case-add-company-card",
  data() {
    return {
      visible: false,
      query: "",
    };
  },
  methods: {
    async addCompany(item) {
      await this.$store.dispatch("CaseModule/postCompany", item.id);
      await this.$store.dispatch("CaseModule/fetchIdCase", this.$route.params.id);
      await this.$store.commit("CaseModule/setSearchedCompany", "");
      this.query = "";
      this.visible = false;
    },
    async findCompany() {
      await this.$store.commit("CaseModule/setSearchQuery", this.query);
      await this.$store.dispatch("CaseModule/findCompany",);
    },
    closeSearchInput(){
      this.query = "";
      this.visible = false;
      this.$store.commit("CaseModule/setSearchedCompany", "");
    }
  },
  computed: {
    ...mapState({
      cases: (state) => state.CaseModule.case,
      searchedCompany: (state) => state.CaseModule.searchedCompany,
    }),
  },
};
</script>
<style>
  .add-company-output{
    border-right: 1px solid black;
    border-left: 1px solid black;
    width: 200px;
  }
  .add-company-output:last-child{
    border-bottom: 1px solid black;
  }
  .add-company-output-item:hover{
    background-color: #5e78ecbe;
    cursor: pointer;
  }
  .add-company-input{
    width: 200px;
  }
</style>
