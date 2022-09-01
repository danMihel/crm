import { createStore } from 'vuex'
import { AuthModule } from "@/store/modules/AuthModule";
import {CompanyModule} from '@/store/modules/CompanyModule'


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
  }
})
