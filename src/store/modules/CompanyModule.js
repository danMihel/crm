import API from "@/API/index";

export const CompanyModule = {
  namespaced: true,
  state() {
    return {
      company: {},
      allCompanies: [],
    };
  },
  mutations: {
    setCompany(state, data) {
      state.company = data;
    },
    setAllCompanies(state, data) {
      state.allCompanies = data;
    },
  },
  actions: {
   async fetchIdCompany({ commit}, id ) {
      return API.getCompanies(id).then((res) => {
        console.log(res.data)
        commit("setCompany", res.data)
      });
    },
    async fetchAllCompanies({ commit }) {
      return API.getCompanies().then((res) => {
        console.log(res.data)
        commit("setAllCompanies", res.data.page)
      });
    },
  },
};
