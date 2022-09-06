<template>
  <div class="company__main-title">
    {{ companyName }}
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "company-name",
  computed: {
    ...mapState({
      companyName: (state) => state.CompanyModule.company.name,
    }),
  },
};
</script>
<style>
.company__main-title {
  font-weight: 600;
  font-size: 1.5rem;
}
</style>
