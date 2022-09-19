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
    <input v-model="Query" @input="findCompany"  type="text"/>
    <div v-for="item in searchedCompany" :key="item.id">
      <div @click="addCompany(item)">{{item.name}}</div>
    </div>
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
   async addCompany(item){
      console.log(this.cases.id)
      await this.$store.dispatch("CaseModule/postCompany", item.id);
      await this.$store.dispatch("CaseModule/fetchIdCase", this.$route.params.id);
    },
    async findCompany (){
      await  this.$store.commit("CaseModule/setSearchQuery", this.Query);
      await this.$store.dispatch("CaseModule/findCompany");
      
    },
  },
  computed: {
    ...mapState({
      cases: (state) => state.CaseModule.case,
      searchedCompany:(state) => state.CaseModule.searchedCompany
    }),
  },
  mounted() {
    this.$store.dispatch("CaseModule/fetchIdCase", this.$route.params.id);
  },
};
</script>
