<template>
  <div class="person-company-element"
    @click="$router.push(`/company/${company.id}`)">
    <div class="person-company-name">{{ company.company }}</div>
    <div class="person-company-data">{{ company.position }}</div>
  </div>
</template>
<script>
export default {
  name: "person-company",
  props: {
    company: {
      type: Object,
      require: true,
    },
  },
};
</script>
<style scoped>
.person-company-element {
  display: flex;
  padding: 1rem;
  align-items: center;
}

.person-company-element:not(:last-child) {
  border-bottom: 1px solid rgb(117, 117, 117);
}
.person-company-name {
  font-weight: 600;
}
.person-company-data {
  margin-left: 3rem;
}
</style>
