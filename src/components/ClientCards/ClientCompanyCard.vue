<template>
  <div>
    Связанные компании
    <div v-for="item in companies" :key="item.id">
      <ClientCompany :company="item"/>
    </div>
  </div>  
</template>
<script>
import { mapState } from "vuex";
import ClientCompany from "./ClientCompany.vue";
export default {
    name: "client-company-card",
    computed: {
        ...mapState({
            companies: (state) => state.ClientModule.client.companies,
        }),
    },
    components: { ClientCompany }
};
</script>
