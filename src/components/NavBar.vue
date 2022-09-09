<template>
  <nav class="nav-container">
    <div>
      <div class="nav-items">
        <div>
         <p><router-link to="/">Главная</router-link> </p>
          <p><router-link to="/company">Компании</router-link></p>
          <p><router-link to="/person">Персоны</router-link></p>
          <p><router-link to="/contract">Договоры</router-link></p>
         <p><router-link to="/case">Дела</router-link></p> 
        </div>
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
  justify-content:flex-start;
  position: fixed;
  height: 100vh;
  top: 0;
  width: 15rem;
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
