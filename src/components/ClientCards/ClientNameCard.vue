<template> 
    <div class="client__main-title">
      {{ client.firstName }} {{ client.lastName }}
    </div>
    <div> Телефон {{client.phoneNumber}}</div>
  </template>
  <script>
  import { mapState } from "vuex";
  export default {
    name: "client-name",
    computed: {
      ...mapState({
        client: (state) => state.ClientModule.client,
      }),
    },
  };
  </script>
  <style scoped>
  .client__main-title {
    font-weight: 600;
    font-size: 1.5rem;
  }
  </style>
  