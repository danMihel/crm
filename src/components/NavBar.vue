<template>
  <nav>
    <router-link to="/">Главная</router-link>
    <router-link to="/company">Компании</router-link>
    <router-link to="/client">Клиенты</router-link>
    <router-link to="/contract">Договоры</router-link>
    <router-link to="/case">Дела</router-link>
  </nav>
</template>
<script>
export default {
  name: "nav-bar",
};
</script>
<style scoped>
nav {
  display: flex;
  background-color:  #5e79ec;
  margin-bottom: 2rem;
  padding: 2rem;
}
nav a {
  font-weight: bold;
  color: #ffffff;
  margin-left: 4rem;
}
nav a.router-link-exact-active {
  color: rgb(85, 85, 85);
}
</style>
