<template>
    <div class="list-group-item margin-top" @click="$router.push(`/company/${company.id}`)">
      <div class="company-name no-text-wrap">{{ company.company }}</div>
      <div class="company-data">{{ company.position }}</div>
    </div>
  </template>
  <script>
  export default {
    name: "company",
    props: {
        company: {
        type: Object,
        require: true,
      },
    },
  };
  </script>
  <style scoped>
  .company{
  padding: 30px;
  border: solid rgb(219, 217, 217) 1px;
  }
  .company-name {
    font-weight: 600;
  }
  .company-data {
    font-size: 0.8rem;
  }
  .no-text-wrap {
    white-space: nowrap;
  }
  .margin-top{
  margin: 1rem 0;
}  </style>