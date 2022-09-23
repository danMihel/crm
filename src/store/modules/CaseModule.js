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
      searchQuery:'',
      searchedCompany:''
    };
  },
  mutations: {
    setSearchedCompany(state, data){
      state.searchedCompany = data
    },
    setSearchQuery(state, data){
      state.searchQuery = data
    },
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
    async postCompany({state}, company ) {
      const url = "/cases/addcompany";
      return API.postElement(url, state.case.id, company );
    },
    async postPerson({state}, person ) {
      const url = "/cases/addperson";
      return API.postElement(url, state.case.id, person );
    },
    async findCompany({commit,state}) {
      if(state.searchQuery.length < 1){
        commit("setSearchedCompany", '');
      } else{
        const url = "/search";
        const dataObj = {
          company: state.searchQuery,
        }
      return API.findElement(url, dataObj).then((res) => {
        commit("setSearchedCompany", res.data);
      });
      }
    },
  },
};
