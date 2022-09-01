import API from "@/API/index"
import router from "@/router";

export const AuthModule = {
  namespaced: true,

  state() {
    return {
      logged: false,
      isLoade: true,
      login: "",
      password: "",
      errors: "",
    };
  },
  mutations: {
    setError(state, error) {
      state.errors = error;
    },
    setUserData(state, userData) {
      state.userData = userData;
    },
    setSpinner(state, bool) {
      state.isLoade = bool;
    },
    setLogin(state, login) {
      state.login = login;
    },
    setPassword(state, password) {
      state.password = password;
    },
    setLogged(state, bool) {
      state.logged = bool;
    },
    setIdLogin(state, id_login) {
      state.id_login = id_login;
    },
  },
  actions: {
    async onLogin({ commit }) {
      commit("setSpinner", false);
      console.log(API)
      return API.login({
        login: this.state.AuthModule.login,
        password: this.state.AuthModule.password,
      })
        .then((res) => {
          console.log(res)
          if (res.data.accessToken.length > 0) {
           sessionStorage.accessToken = res.data.accessToken;
            commit("setLogged", true);
            commit("setSpinner", true);
            router.push("/company");
          }
        })
        .catch((error) => {
         API.errorHandler(error.response.status);
        })
        .finally(() => {
          commit("setSpinner", true);
        });
    },
  },
};
