import API from "@/API/index";

export const ClientModule = {
  namespaced: true,
  state() {
    return {
      client: {},
      allClients: [],
      totalPages: 1,
      currentPage: 1,
      itemsPerPage: 1,
    };
  },
  mutations: {
    setClient(state, data) {
      state.client = data;
    },
    setAllClients(state, data) {
      state.allClients = data;
    },
    setTotlaPages(state, data) {
      state.totalPages = data;
    },
    setItemsPerPages(state, data) {
      state.itemsPerPage = data;
    },
  },
  actions: {
    async fetchIdClient({ commit}, id,) {
      const url = '/persons'
      return API.getElement(id, url).then((res) => {
        console.log(res.data)
        commit("setClient", res.data)
      });
    },

    async fetchAllClients({ commit }) {
      const url = '/persons'
      return API.getElement('', url).then((res) => {
        commit("setAllClients", res.data.page);
      });
    },
  },
};
