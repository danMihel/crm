<template>
    <div class="person" @click="$router.push(`/person/${person.id}`)">
      <div class="person-name no-text-wrap">{{ person.person }}</div>
      <div class="person-data">{{ person.position }}</div>
      <div class="person-data">sdsdgsd@sdgsdg.dsfk</div>
      <div class="person-data">557755884</div>
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
  <style scoped>
  .person{
  padding: 30px;
  border: solid rgb(219, 217, 217) 1px;
  }
  .person-name {
    font-weight: 600;
  }
  .person-data {
    font-size: 0.8rem;
  }
  .no-text-wrap {
    white-space: nowrap;
  }
  </style>