<template>
  <NavBar />
  <div class="wraper">
    <ContractCard/>
  </div>
</template>
<script>
import { mapState } from "vuex";
import NavBar from "@/components/NavBar.vue";
import ContractCard from '@/components/ContractCards/ContractCard.vue'
export default {
  name: "spec-contract",
  computed: {
    ...mapState({
      contract: (state) => state.ContractModule.contract,
    }),
  },
  components: { NavBar, ContractCard },
  mounted() {
    this.$store.dispatch(
      "ContractModule/fetchIdContract",
      this.$route.params.id
    );
  },
};
</script>
<style></style>
