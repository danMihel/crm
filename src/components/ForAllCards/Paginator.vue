<template>
  <div
    v-for="pageNumber in this.$store.state.CompanyModule.totalPages"
    :key="pageNumber">
    <p @click="setPage(pageNumber)">{{ pageNumber }}</p>
  </div>
</template>
<script>
export default {
  name: "paginator",
  props:{
    component: String
  }
};
</script>
