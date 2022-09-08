<template>
  <div class="paginator-row">
    <div v-for="pageNumber in this.totalPage" :key="pageNumber"
      @click="changePage(pageNumber)" :class="{ 'active-page': page === pageNumber }">
     <div class="paginator-item">{{ pageNumber }}</div> 
  </div>
  </div>
</template>
<script>
export default {
  name: "paginator",
  props: {
    totalPage: {
      require: true,
    },
    page: {
      require: true,
    },
  },
  methods: {
    changePage(pageNumber) {
      this.$emit("change", pageNumber);
    },
  },
};
</script>
<style scoped>
.paginator-row {
  display: flex;
}
.paginator-item{
    padding: 0.5rem;
}
 .active-page >.paginator-item {
    border: 1px solid rgba(102, 51, 153, 0.199);
}
.active-page {
  color: red;
}
</style>
