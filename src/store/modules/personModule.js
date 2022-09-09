import API from "@/API/index";

export const personModule = {
  namespaced: true,
  state() {
    return {
      person: {},
      allpersons: [],
      totalPages: '',
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  mutations: {
    setperson(state, data) {
      state.person = data;
    },
    setAllpersons(state, data) {
      state.allpersons = data;
    },
    setTotlaPages(state, data) {
      state.totalPages = data;
    },
    setItemsPerPages(state, data) {
      state.itemsPerPage = data;
    },
  },
  actions: {
    async fetchIdperson({ commit}, id,) {
      const url = '/persons'
      return API.getElement(id, url).then((res) => {
        console.log(res.data)
        commit("setperson", res.data)
      });
    },

    async fetchAllpersons( { commit, state },
      page = 1,
      items = state.itemsPerPage) {
      const url = `/persons/${page}/${items}`
      return API.getElement("", url).then((res) => {
        commit("setAllpersons", res.data.page);
        commit("setTotlaPages", res.data.count);
      });
    },
  },
};
