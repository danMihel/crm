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
li{
  list-style: none;
}
h2{
  text-align: center;
}
.wraper{
  margin-left: 17rem;
  padding: 1rem 5rem;
}
.list-group-wraper {
  min-height: 50vh;
}
.list-group {
  margin: 1rem 0;
}
.list-group-item {
  padding: 1rem;
  border: 1px solid rgb(219, 217, 217);
  border-radius: 10px;
}
.list-group-item:hover{
  background: #5e78ecbe;
  color: azure;
  transition: 0.4 s ease;
}
.spec-item-wraper {
  margin: 2rem 0;
}
.paginator-select{
  border: none;
  outline: none;
}

</style>
