<template>
  <div>
    <input v-model="query" @input="findCompany" type="text" />
    <div v-for="item in searchedCompany" :key="item.id">
      <div @click="addCompany(item)">{{ item.name }}</div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "case-add-card",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    async addCompany(item) {
      await this.$store.dispatch("CaseModule/postCompany", item.id);
      await this.$store.dispatch("CaseModule/fetchIdCase", this.$route.params.id);
      await this.$store.commit("CaseModule/setSearchedCompany", "");
      this.query = "";
    },
    async findCompany() {
      await this.$store.commit("CaseModule/setSearchQuery", this.query);
      await this.$store.dispatch("CaseModule/findCompany",);
    },
  },
  computed: {
    ...mapState({
      cases: (state) => state.CaseModule.case,
      searchedCompany: (state) => state.CaseModule.searchedCompany,
    }),
  },
};
</script>
<style></style>
