<template>
  <h2>{{ person.firstName }} {{ person.lastName }}</h2>
  <div class="company-data-container">
    <div class="company-element">
      <div class="company-element__title">Телефон</div>
      <div class="company-element__data">
        {{ person.phoneNumber }}
      </div>
    </div>
    <div class="company-element">
      <div class="company-element__title">Почта</div>
      <div class="company-element__data">
        {{ person.email }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "person-name",
  computed: {
    ...mapState({
      person: (state) => state.PersonModule.person,
    }),
  },
};
</script>
<style scoped></style>
