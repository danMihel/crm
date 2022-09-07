import API from "@/API/index";

export const ContractModule = {
  namespaced: true,
  state() {
    return {
      contract: {},
      allContracts: [],
    };
  },
  mutations: {
    setContract(state, data) {
      state.contract = data;
    },
    setAllContract(state, data) {
      state.allContracts = data;
    },
  },
  actions: {
    async fetchIdContract({ commit }, id) {
      const url = "contracts";
      return API.getElement(id, url).then((res) => {
        console.log(res.data)
        commit("setContract", res.data);
      });
    },
    async fetchAllContracts({ commit }) {
        console.log('fetchAllContracts')
      const url = "contracts";
      return API.getElement("", url).then((res) => {
        commit("setAllContract", res.data.page);
      });
    },
  },
};
