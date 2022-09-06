<template>
  <div>Дела</div>
  <div v-for="item in cases" :key="item.id">
    <div>{{ item.number }}</div>
    <div>{{ item.description }}</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "client-cases",
  computed: {
    ...mapState({
      cases: (state) => state.ClientModule.client.cases,
    }),
  },
};
</script>
