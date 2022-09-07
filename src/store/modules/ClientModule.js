import API from "@/API/index";

export const ClientModule = {
  namespaced: true,
  state() {
    return {
      client: {},
      allClients: [],
    };
  },
  mutations: {
    setClient(state, data) {
      state.client = data;
    },
    setAllClients(state, data) {
      state.allClients = data;
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
