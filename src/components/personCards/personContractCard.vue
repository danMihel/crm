<template>
       <div class="person-case__main-title">Договоры</div>
       <div class="person-case-container">
        <div>
          <AddBtn/>
        </div>
         <div v-for="item in contracts" :key="item.id">
           <Contract :contract ="item"/>
         </div>
       </div>
   </template>
   <script>
   import { mapState } from "vuex";
   import Contract from "@/components/ForAllCards/Contract.vue";
import AddBtn from "../UI/AddBtn.vue";
   export default {
       name: "person-contracts",
       computed: {
           ...mapState({
               contracts: (state) => state.PersonModule.person.contracts,
           }),
       },
       components: { Contract, AddBtn }
   };
   </script>
   <style scoped>
     .person-case__main-title {
       font-weight: 600;
       font-size: 1.5rem;
       background-color: #5e79ec;
       padding: 1rem;
       border: solid rgb(219, 217, 217) 1px 1px 1px 0;
     }
     .person-case-container {
       padding: 30px;
       border: solid rgb(219, 217, 217) 1px;
       background-color: rgb(250, 250, 250);
     }   
     </style>
   