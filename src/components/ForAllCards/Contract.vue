<template>
    <div class="list-group-item margin-top" @click="$router.push(`/contract/${contract.id}`)">
      <span class="card-name">{{ this.contract.number }}</span>
      <span class="card-data">{{ this.contract.description }}</span>
    </div>
</template>
<script>
export default {
  name: 'contract',
  props:{
    contract:{
          type: Object,
          require: true,
      }
  }
}

</script>
<style scoped>
.card-name {
  font-weight: 600;
  margin-left: 1rem;
}
.card-data {
  margin-left: 3rem;
}
.margin-top{
  margin: 1rem 0;
}
</style>