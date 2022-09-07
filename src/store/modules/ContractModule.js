import API from "@/API/index";

export const ContractModule = {
  namespaced: true,
  state() {
    return {
      contract: {},
      allContracts: [],
      totalPages:'',
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  mutations: {
    setContract(state, data) {
      state.contract = data;
    },
    setAllContract(state, data) {
      state.allContracts = data;
    },
     setTotlaPages(state, data) {
      state.totalPages = data;
    },
    setItemsPerPages(state, data) {
      state.itemsPerPage = data;
    },
  },
  actions: {
    async fetchIdContract({ commit }, id) {
      const url = "/contracts";
      return API.getElement(id, url).then((res) => {
        console.log(res.data)
        commit("setContract", res.data);
      });
    },
    async fetchAllContracts({ commit, state },
      page = 1,
      items = state.itemsPerPage) {
      const url = `/contracts/${page}/${items}`;
      return API.getElement("", url).then((res) => {
        commit("setAllContract", res.data.page);
        commit("setTotlaPages", res.data.count);
      });
    },
  },
};
