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
    async fetchIdCompany({ commit }, id) {
      const url = "companies";
      return API.getElement(id, url).then((res) => {
        commit("setCompany", res.data);
      });
    },
    async fetchAllCompanies({ commit }) {
      const url = "companies";
      return API.getElement("", url).then((res) => {
        commit("setAllCompanies", res.data.page);
      });
    },
  },
};
