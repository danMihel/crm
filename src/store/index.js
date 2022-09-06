import { createStore } from 'vuex'
import { AuthModule } from "@/store/modules/AuthModule";
import { CompanyModule } from '@/store/modules/CompanyModule';
import { ClientModule } from './modules/ClientModule';


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
  }
})
