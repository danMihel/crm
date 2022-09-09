import API from "@/API/index";

export const CaseModule = {
  namespaced: true,
  state() {
    return {
      case: {},
      allCases: [],
      totalPages: "",
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  mutations: {
    setCase(state, data) {
      state.case = data;
    },
    setAllCases(state, data) {
      state.allCases = data;
    },
    setTotlaPages(state, data) {
      state.totalPages = data;
    },
    setItemsPerPages(state, data) {
      state.itemsPerPage = data;
    },
  },
  actions: {
    async fetchIdCase({ commit }, id) {
      const url = "/cases";
      return API.getElement(id, url).then((res) => {
        console.log(res.data)
        commit("setCase", res.data);
      });
    },
    async fetchAllCases({ commit, state },
      page = 1,
      items = state.itemsPerPage) {
      const url = `/cases/${page}/${items}`;
      return API.getElement("", url).then((res) => {
        commit("setAllCases", res.data.page);
        commit("setTotlaPages", res.data.count);
      });
    },
  },
};
