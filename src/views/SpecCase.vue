<template>
  <NavBar />
  <div class="wraper">
    <div>Номер: {{ cases.number }}</div>
    <div>Описание: {{ cases.description }}</div>
    <div>Свзаные компании:</div>
    <div v-for="item in cases.companies" :key="item.id">
      <div>{{ item.name }}</div>
    </div>
    <div>
    <p>Добавить компанию</p>
    <input v-model="Query" @input="print"  type="text"/>
    <button @click="findCompany">Добавить</button>
  </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import { mapState } from "vuex";
export default {
  name: "spec-case",
  data(){
    return {
      Query:''
    }
  },
  components: { NavBar },
  methods:{
   async addCompany(){
      console.log(this.cases.id)
      await this.$store.dispatch("CaseModule/postCompany");
      await this.$store.dispatch("CaseModule/fetchIdCase", this.$route.params.id);
    },
    async findCompany (){
      await this.$store.dispatch("CaseModule/findCompany");
    },
    print(){
      this.$store.commit("CaseModule/setSearchQuery", this.Query);
      console.log(this.searchQuery);
    }
  },
  computed: {
    ...mapState({
      cases: (state) => state.CaseModule.case,
      searchQuery:(state) => state.CaseModule.searchQuery
    }),
  },
  mounted() {
    this.$store.dispatch("CaseModule/fetchIdCase", this.$route.params.id);
  },
};
</script>
