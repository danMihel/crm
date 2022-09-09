<template>
    <div>
       <div class="client-case__main-title">Догвооры</div>
       <div class="client-case-container">
         <div class="client-case-element" v-for="item in contracts" :key="item.id">
           <Contract :contract ="item"/>
         </div>
       </div>
     </div>
   </template>
   <script>
   import { mapState } from "vuex";
   import Contract from "@/components/ForAllCards/Contract.vue";
   export default {
       name: "client-contracts",
       computed: {
           ...mapState({
               contracts: (state) => state.ClientModule.client.contracts,
           }),
       },
       components: { Contract }
   };
   </script>
   <style scoped>
     .client-case__main-title {
       font-weight: 600;
       font-size: 1.5rem;
       background-color: #5e79ec;
       padding: 1rem;
       border: solid rgb(219, 217, 217) 1px 1px 1px 0;
     }
     .client-case-container {
       padding: 30px;
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
   