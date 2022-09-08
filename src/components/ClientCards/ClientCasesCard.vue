<template>
 <div>
    <div class="client-case__main-title h2">Дела</div>
    <div class="client-case-container">
      <div class="client-case-element" v-for="item in cases" :key="item.id">
        <Case :case ="item"/>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Case from "@/components/ForAllCards/Case.vue";
export default {
    name: "client-cases",
    computed: {
        ...mapState({
          cases: (state) => state.ClientModule.client.cases,
        }),
    },
    components: { Case }
};
</script>
<style scoped>
  .client-case__main-title {
    background-color: #5e79ec;
    padding: 1rem;
    border: solid rgb(219, 217, 217) 1px 1px 1px 0;
  }
  .client-case-container {
    padding: 30px;
    border-radius: 0px 0px 10px 10px;
    border: solid rgb(219, 217, 217) 1px;
    background-color: rgb(250, 250, 250);
  }
  .client-case-element {
    display: flex;
    padding: 1rem;
    align-items: center;
  }
  .client-case-element:not(:last-child) {
    border-bottom: 1px solid rgb(117, 117, 117);
  }

  </style>
