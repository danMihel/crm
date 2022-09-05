<template>
  <nav>
    <router-link to="/">Главная</router-link>
    <router-link to="/company">Компании</router-link>
  </nav>
</template>
<script>
export default {
  name: "nav-bar",
};
</script>
<style>
nav {
  display: flex;
  background-color: black;
  margin-bottom: 2rem;
  padding: 2rem;
}
nav a {
  font-weight: bold;
  color: #ffffff;
  margin-left: 4rem;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
