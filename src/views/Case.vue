<template>
  <NavBar />
  <div class="wraper">
    <h2>Все дела</h2>
    <div class="list-group-wraper">
      <div class="list-group" v-for="item in this.$store.state.CaseModule.allCases" :key="item.id">
        <li class="list-group-item"
        @click="$router.push(`/case/${item.id}`)">
        {{ item.number }} {{ item.description }}
        </li>
      </div>
    </div>
      <Paginator @change="setPage" :page="page" :totalPage="totalPages" />
      <div >
        Вывести на старинцу:
        <select class="paginator-select" @change="setItems($event)">
          <option value="" disabled selected>{{ itemsPerPage }}</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
 
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import NavBar from "@/components/NavBar.vue";
import Paginator from "@/components/ForAllCards/Paginator.vue";
export default {
  name: "case",
  data() {
    return {
      page: 1,
      items: 5,
    };
  },
  computed: {
    ...mapState({
      totalPages: (state) => state.CaseModule.totalPages,
      allCompanies: (state) => state.CaseModule.allCompanies,
      itemsPerPage: (state) => state.CaseModule.itemsPerPage,
    }),
  },
  components: { NavBar, Paginator },
  methods: {
    setPage(number) {
      (this.page = number),
        this.$store.dispatch("CaseModule/fetchAllCases", this.page);
    },
    setItems(event) {
      (this.items = event.target.value),
        this.$store.commit("CaseModule/setItemsPerPages", this.items);
      this.$store.dispatch("CaseModule/fetchAllCases", 1, this.items);
      this.page = 1;
    },
  },
  mounted() {
    this.$store.dispatch("CaseModule/fetchAllCases");
  },
};
</script>
