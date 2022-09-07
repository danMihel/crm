import API from "@/API/index";

export const CompanyModule = {
  namespaced: true,
  state() {
    return {
      company: {},
      allCompanies: [],
      totalPages:'',
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  mutations: {
    setCompany(state, data) {
      state.company = data;
    },
    setAllCompanies(state, data) {
      state.allCompanies = data;
    },
    setTotlaPages(state, data){
      state.totalPages = data
    },
    setItemsPerPages(state, data){
      state.itemsPerPage = data
    }
  },
  actions: {
    async fetchIdCompany({ commit }, id) {
      const url = "/companies";
      return API.getElement(id, url).then((res) => {
        commit("setCompany", res.data);
      });
    },
    async fetchAllCompanies({ commit, state }, page = 1, items = state.itemsPerPage) {
      const url = `/companies/${page}/${items}`;
      return API.getElement("", url).then((res) => {
        commit("setAllCompanies", res.data.page);
        commit("setTotlaPages", res.data.count);
      });
    },
  },
};
