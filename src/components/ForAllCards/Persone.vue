<template>
    <div class="person-element" @click="$router.push(`/client/${person.id}`)">
      <div class="person-name no-text-wrap">{{ person.person }}</div>
      <div class="person-data">{{ person.position }}</div>
    </div>
  </template>
  <script>
  export default {
    name: "persone",
    props: {
      person: {
        type: Object,
        require: true,
      },
    },
  };
  </script>
  <style>
  .person-element {
    display: flex;
    padding: 1rem;
    align-items: center;
  }
  .person-element:not(:last-child) {
    border-bottom: 1px solid rgb(117, 117, 117);
  }
  .person-name {
    font-weight: 600;
  }
  .person-data {
    margin-left: 3rem;
  }
  .no-text-wrap {
    white-space: nowrap;
  }
  </style>