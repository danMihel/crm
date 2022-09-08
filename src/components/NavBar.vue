<template>
  <nav class="nav-container">
    <div>
      <div class="nav-items">
        <router-link to="/">Главная</router-link>
        <router-link to="/company">Компании</router-link>
        <router-link to="/client">Клиенты</router-link>
        <router-link to="/contract">Договоры</router-link>
        <router-link to="/case">Дела</router-link>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "nav-bar",
};
</script>
<style scoped>
.nav-items {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  height: 100vh;
  top:0;
  width: 5rem;
  padding: 10vh 1rem;
  background-color:#5e79ec;
}

nav a {
  font-weight: bold;
  color: black;
}
nav a.router-link-exact-active {
  color: white;
}
</style>
