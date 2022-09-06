<template>
  <div>
    Связанные компании
    <div class="case-element" v-for="item in client.companies" :key="item.id">
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
      client: (state) => state.ClientModule.client,
    }),
  },
};
</script>
