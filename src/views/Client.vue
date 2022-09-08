<template>
  <NavBar />
  <div class="wraper">
    <h2>Все клиенты</h2>
  <div class="list-group"  v-for="item in this.$store.state.ClientModule.allClients" :key="item.id">
      <div class="list-group-item" @click="$router.push(`/client/${item.id}`)">{{ item.name }}</div>
  </div>
  <Paginator @change="setPage" :page="page" :totalPage="totalPages" />
  <div> Вывести на старинцу:
    <select @change="setItems($event)">
    <option value="" disabled selected>{{itemsPerPage}}</option>
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
  name: "client",
  components: { NavBar, Paginator },
  data() {
    return {
      page: 1,
      items: 5,
    };
  },
  computed: {
    ...mapState({
      totalPages: (state) => state.ClientModule.totalPages,
      allCompanies: (state) => state.ClientModule.allCompanies,
      itemsPerPage: (state) => state.ClientModule.itemsPerPage
    }),
  },
  methods: {
    setPage(number) {
      (this.page = number),
        this.$store.dispatch("ClientModule/fetchAllClients", this.page);
    },
    setItems(event) {
      (this.items = event.target.value),
      this.$store.commit("ClientModule/setItemsPerPages", this.items);
      this.$store.dispatch("ClientModule/fetchAllClients", 1,  this.items);
      this.page = 1
    },
  },
  mounted() {
    this.$store.dispatch("ClientModule/fetchAllClients", this.page, 5);
  },
};
</script>
<style scoped>

</style>