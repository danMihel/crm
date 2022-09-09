<template>
  <NavBar />
  <div class="wraper">
    <h2>Все клиенты</h2>
    <div class="list-group-wraper">
      <div class="list-group"
        v-for="item in this.$store.state.PersonModule.allpersons"
        :key="item.id">
        <div class="list-group-item"
          @click="$router.push(`/person/${item.id}`)">
          {{ item.name }}
        </div>
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
</template>
<script>
import { mapState } from "vuex";
import NavBar from "@/components/NavBar.vue";
import Paginator from "@/components/ForAllCards/Paginator.vue";
export default {
  name: "person",
  components: { NavBar, Paginator },
  data() {
    return {
      page: 1,
      items: 5,
    };
  },
  computed: {
    ...mapState({
      totalPages: (state) => state.PersonModule.totalPages,
      allCompanies: (state) => state.PersonModule.allCompanies,
      itemsPerPage: (state) => state.PersonModule.itemsPerPage,
    }),
  },
  methods: {
    setPage(number) {
      (this.page = number),
        this.$store.dispatch("PersonModule/fetchAllpersons", this.page);
    },
    setItems(event) {
      (this.items = event.target.value),
        this.$store.commit("PersonModule/setItemsPerPages", this.items);
      this.$store.dispatch("PersonModule/fetchAllpersons", 1, this.items);
      this.page = 1;
    },
  },
  mounted() {
    this.$store.dispatch("PersonModule/fetchAllpersons", this.page, 5);
  },
};
</script>
<style scoped></style>
