<template> 
    <h2>
      {{ person.firstName }} {{ person.lastName }}
    </h2>
    <div> Телефон {{person.phoneNumber}}</div>
    <div> Электронная почта {{person.email}}</div>
  </template>
  <script>
  import { mapState } from "vuex";
  export default {
    name: "person-name",
    computed: {
      ...mapState({
        person: (state) => state.personModule.person,
      }),
    },
  };
  </script>
  <style scoped>
 
  </style>
  