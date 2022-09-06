<template>
    <div>
        Договоры
    </div>
    <div v-for="item in contracts" :key="item.id">
      <div>{{ item.company }}</div>
      <div>{{ item.position }}</div>
    </div>
</template>
<script>
    import { mapState } from "vuex";
    export default{
        name: 'client-contracts-card',
        computed: {
    ...mapState({
        contracts: (state) => state.ClientModule.client.contracts,
    }),
  },
    }
    
</script>