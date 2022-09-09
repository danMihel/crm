<template>
  <div class="add-sign-container">
    <img src="@/assets/icons/plus.svg" />
  </div>
</template>
<script>
export default {
  name: "add-btn",
};
</script>
<style>
.add-sign-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid rgb(219, 217, 217);
  border-radius: 10px;
  background-color: rgb(228, 228, 228);
}
.add-sign-container:hover {
  background: #5e78ecbe;
  color: azure;
  transition: 0.4 s ease;
}
</style>
