import { createStore } from 'vuex'
import { AuthModule } from "@/store/modules/AuthModule";
import { CompanyModule } from '@/store/modules/CompanyModule';
import { ClientModule } from './modules/ClientModule';
import { ContractModule } from './modules/ContractModule';


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
    ClientModule,
    ContractModule, 
  }
})
