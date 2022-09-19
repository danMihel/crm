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
    <input type="text"/>
    <button @click="addCompany">Добавить</button>
  </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import { mapState } from "vuex";
export default {
  name: "spec-case",
  components: { NavBar },
  methods:{
   async addCompany(){
      console.log(this.cases.id)
      await this.$store.dispatch("CaseModule/postCompany");
      await this.$store.dispatch("CaseModule/fetchIdCase", this.$route.params.id);
    }
  },
  computed: {
    ...mapState({
      cases: (state) => state.CaseModule.case,
    }),
  },
  mounted() {
    this.$store.dispatch("CaseModule/fetchIdCase", this.$route.params.id);
  },
};
</script>
