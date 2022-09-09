<template>
  <NavBar />
  <div class="wraper">
    <h2>Все компании</h2>
    <div class="list-group-wraper">
      <div class="list-group" v-for="item in allCompanies" :key="item.id">
        <li
          class="list-group-item"
          @click="$router.push(`/company/${item.id}`)"
        >
          {{ item.name }}
        </li>
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
  </div>
</template>
<script>
import { mapState } from "vuex";
import NavBar from "@/components/NavBar.vue";
import Paginator from "@/components/ForAllCards/Paginator.vue";
export default {
  name: "company",
  data() {
    return {
      page: 1,
      items: 5,
    };
  },
  computed: {
    ...mapState({
      totalPages: (state) => state.CompanyModule.totalPages,
      allCompanies: (state) => state.CompanyModule.allCompanies,
      itemsPerPage: (state) => state.CompanyModule.itemsPerPage,
    }),
  },
  methods: {
    setPage(number) {
      (this.page = number),
        this.$store.dispatch("CompanyModule/fetchAllCompanies", this.page);
    },
    setItems(event) {
      (this.items = event.target.value),
        this.$store.commit("CompanyModule/setItemsPerPages", this.items);
      this.$store.dispatch("CompanyModule/fetchAllCompanies", 1, this.items);
      this.page = 1;
    },
  },
  components: { NavBar, Paginator },
  mounted() {
    this.$store.dispatch("CompanyModule/fetchAllCompanies", this.page, 5);
  },
};
</script>
<style>

</style>
