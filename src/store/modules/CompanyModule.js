import API from "@/API/index";

export const CompanyModule = {
  namespaced: true,
  state() {
    return {
      company: {},
      name: "",
      inn: "",
      kpp: "",
      address: "",
      address: "",
      phoneNumber: "",
      persons: [],
    };
  },
  mutations: {
    setCompany(state, data) {
      state.company = data;
    },
  },
  actions: {
   async fetchCompany({ commit }) {
      return API.getCompanies(1).then((res) => {
        console.log(res.data)
        commit("setCompany", res.data)
      });
    },
  },
};
