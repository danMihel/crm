<template>
  <div
    class="client-company-element"
    @click="$router.push(`/company/${company.id}`)"
  >
    <div class="client-company-name">{{ company.company }}</div>
    <div class="client-company-data">{{ company.position }}</div>
  </div>
</template>
<script>
export default {
  name: "client-company",
  props: {
    company: {
      type: Object,
      require: true,
    },
  },
};
</script>
<style scoped>
.client-company-element {
  display: flex;
  padding: 1rem;
  align-items: center;
}

.client-company-element:not(:last-child) {
  border-bottom: 1px solid rgb(117, 117, 117);
}
.client-company-name {
  font-weight: 600;
}
.client-company-data {
  margin-left: 3rem;
}

.case-element:not(:last-child) {
  border-bottom: 1px solid rgb(117, 117, 117);
}
</style>
