<template>
      <div class="company__main-title">
        {{ this.$store.state.CompanyModule.company.name }}
      </div>
        <div>
          <div class="company-data__header">Реквизиты</div>
          <div class="company-data-container">
            <div class="company-element">
              <div class="company-element__title">ИНН</div>
              <div class="company-element__data">
                {{ this.$store.state.CompanyModule.company.inn }}
              </div>
            </div>
            <div class="company-element">
              <div class="company-element__title">ОГРН</div>
              <div class="company-element__data">1027700229193</div>
            </div>
            <div class="company-element">
              <div class="company-element__title">КПП</div>
              <div class="company-element__data">
                {{ this.$store.state.CompanyModule.company.kpp }}
              </div>
            </div>
            <div class="company-element">
              <div class="company-element__title">Адрес</div>
              <div class="company-element__data">
                {{ this.$store.state.CompanyModule.company.address }}
              </div>
            </div>
            <div class="company-element">
              <div class="company-element__title">Телефон</div>
              <div class="company-element__data">
                {{ this.$store.state.CompanyModule.company.phoneNumber }}
              </div>
            </div>
          </div>
        </div>
  </template>
  <script>
  export default {
    name: "company-card",
  };
  </script>
  <style>
  .company-data-container {
    padding: 30px;
    border-radius: 0px 0px 10px 10px;
    border: solid rgb(219, 217, 217) 1px;
    background-color: rgb(250, 250, 250);
  }
  .company__main-title {
    font-weight: 600;
    font-size: 1.5rem;
  }
  .company-data__header {
    font-weight: 600;
    font-size: 1.5rem;
    background-color: #42b983;
    padding: 1rem;
    border: solid rgb(219, 217, 217) 1px 1px 1px 0;
  }
  .company-element {
    display: flex;
    padding: 1rem;
    align-items: center;
  }
  .company-element:not(:last-child) {
    border-bottom: 1px solid rgb(117, 117, 117);
  }
  .company-element__title {
    font-weight: 600;
    width: 50%;
  }
  .company-element__data {
    width: 50%;
  }
  .no-text-wrap {
    white-space: nowrap;
  }
  </style>
  