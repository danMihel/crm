<template>
  <NavBar />
  <div class="wraper">
    <h2>Все договоры</h2>
    <div class="list-group-wraper">
      <div
        class="list-group"
        v-for="item in this.$store.state.ContractModule.allContracts"
        :key="item.id"
      >
        <div
          class="list-group-item"
          @click="$router.push(`/contract/${item.id}`)"
        >
          № {{ item.number }} От {{ item.date }} // {{ item.description }}
        </div>
      </div>
      <Paginator @change="setPage" :page="page" :totalPage="totalPages" />
      <div>
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
  name: "contract",
  data() {
    return {
      page: 1,
      items: 5,
    };
  },
  components: { NavBar,  Paginator  },
  computed: {
    ...mapState({
      totalPages: (state) => state.ContractModule.totalPages,
      allCompanies: (state) => state.ContractModule.allCompanies,
      itemsPerPage: (state) => state.ContractModule.itemsPerPage,
    }),
  },
  methods: {
    setPage(number) {
      (this.page = number),
      this.$store.dispatch("ContractModule/fetchAllContracts", this.page);
    },
    setItems(number) {
      (this.items = number),
      this.$store.commit("CompanyModule/setItemsPerPages", this.items);
      this.$store.dispatch("ContractModule/fetchAllContracts",  1, this.items);
      this.page = 1;
    },
  },
  mounted() {
    this.$store.dispatch("ContractModule/fetchAllContracts", this.page, 5);
  },
};
</script>
<style scoped></style>
