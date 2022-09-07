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
  },
  actions: {
    async fetchIdCase({ commit }, id) {
      const url = "/cases";
      return API.getElement(id, url).then((res) => {
        commit("setCase", res.data);
      });
    },

    async fetchAllCases({ commit }) {
      const url = "/cases";
      return API.getElement("", url).then((res) => {
        commit("setAllCases", res.data.page);
      });
    },
  },
};
