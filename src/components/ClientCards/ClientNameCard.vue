<template> 
    <h2>
      {{ client.firstName }} {{ client.lastName }}
    </h2>
    <div> Телефон {{client.phoneNumber}}</div>
    <div> Электронная почта {{client.email}}</div>
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
 
  </style>
  