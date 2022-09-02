<template>
    <div class="company__main-title">
      {{ this.$store.state.CompanyModule.company.name }}
    </div>
  </template>
  <script>
  export default {
    name: "company-name",
  };
  </script>
  <style>
  .company__main-title {
    font-weight: 600;
    font-size: 1.5rem;
  }
  </style>