import { createStore } from 'vuex'
import { AuthModule } from "@/store/modules/AuthModule";
import { CompanyModule } from '@/store/modules/CompanyModule';
import { personModule } from '@/store/modules/personModule';
import { ContractModule } from '@/store/modules/ContractModule';
import { CaseModule } from '@/store/modules/CaseModule';

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    AuthModule,
    CompanyModule,
    personModule,
    ContractModule, 
    CaseModule,
  }
})
