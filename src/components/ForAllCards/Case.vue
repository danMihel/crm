<template>
      <div class="case-element">
        <div class="case-number">{{ this.case.number }}</div>
        <div class="case-name">{{ this.case.description }}</div>
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
.case-name {
  font-weight: 600;
  margin-left: 1rem;
}
.person-data {
  margin-left: 3rem;
}
.case-element {
  display: flex;
  padding: 1rem;
  align-items: center;
}
.case-element:not(:last-child) {
  border-bottom: 1px solid rgb(117, 117, 117);
}
</style>