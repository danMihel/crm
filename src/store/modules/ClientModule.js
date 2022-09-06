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
    async fetchIdClient({ commit}, id ) {
      return API.getClients(id).then((res) => {
        console.log(res.data)
        commit("setClient", res.data)
      });
    },

    async fetchAllClients({ commit }) {
      return API.getClients().then((res) => {
        console.log(res.data)
        commit("setAllClients", res.data.page);
      });
    },
  },
};
