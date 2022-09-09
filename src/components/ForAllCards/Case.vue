<template>
      <div class="list-group-item margin-top" @click="$router.push(`/case/${this.case.id}`)">
        <span class="card-name">{{ this.case.number }}</span> 
        <span class="card-data">{{ this.case.description }}</span>
      </div>
</template>
<script>
export default {
    name: 'case',
    props:{
        case:{
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
  margin-top: 1rem;
}

</style>