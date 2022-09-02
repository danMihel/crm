import API from "@/API/index";

export const CompanyModule = {
  namespaced: true,
  state() {
    return {
      company: {},
      allCompanies: {},
      vueCompany: 0,
    };
  },
  mutations: {
    setVueCompany(state, data){
      state.vueCompany = data
      console.log(state.vueCompany)
    },
    setCompany(state, data) {
      state.company = data;
    },
    setAllCompanies(state, data) {
      state.allCompanies = data;
    },
  },
  actions: {
   async fetchCompany({ commit, state }) {
      return API.getCompanies(state.vueCompany).then((res) => {
        console.log(res.data)
        commit("setCompany", res.data)
      });
    },
    async fetchAllCompanies({ commit }) {
      return API.getCompanies().then((res) => {
        console.log(res.data.page)
        commit("setAllCompanies", res.data.page)
      });
    },
  },
};
