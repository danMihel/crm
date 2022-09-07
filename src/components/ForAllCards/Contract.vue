<template>
    <div class="contract-element" @click="$router.push(`/contract/${contract.id}`)">
      <div class="contract-number">{{ this.contract.number }}</div>
      <div class="contract-name">{{ this.contract.description }}</div>
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
.contract-name {
font-weight: 600;
margin-left: 1rem;
}
.contract-data {
margin-left: 3rem;
}
.contract-element {
display: flex;
padding: 1rem;
align-items: center;
}
.contract-element:not(:last-child) {
border-bottom: 1px solid rgb(117, 117, 117);
}
</style>