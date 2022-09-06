<template>
  <div>
    Связанные компании
    <div class="case-element" v-for="item in companies" :key="item.id">
      <div class="case-number">{{ item.company }}</div>
      <div class="case-name">{{ item.position }}</div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "client-company-card",
  computed: {
    ...mapState({
      companies: (state) => state.ClientModule.client.companies,
    }),
  },
};
</script>
