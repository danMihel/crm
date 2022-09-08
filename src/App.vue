<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: content-box;
}
h2{
  text-align: center;
}
.wraper{
  padding: 0 1rem;
}
.list-group {
  margin: 1rem 0;
}
.list-group-item {
  padding: 1rem;
  list-style: none;
  border: 1px solid rgb(219, 217, 217);
  border-radius: 10px;
}
.list-group-item:hover{
  background: #5e78ecbe;
  color: azure;
  transition: 0.4 s ease;
}
</style>
