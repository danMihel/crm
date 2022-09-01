import { AuthAPI } from "@/API/AuthAPI";
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
      localStorage.logged = bool;
    },
    setIdLogin(state, id_login) {
      state.id_login = id_login;
    },
  },

  actions: {
    LoginCheck() {
      this.state.AuthModule.logged === true || localStorage.logged == "true"
        ? router.push("/user")
        : null;
    },

    async onLogin({ commit }) {
      commit("setSpinner", false);
      return AuthAPI.login({
        login: this.state.AuthModule.login,
        password: this.state.AuthModule.password,
      })
        .then((res) => {
          console.log(res)
          if (this.state.AuthModule.id_login != 0) {
            localStorage.id_login = this.state.AuthModule.id_login;
            commit("setLogged", true);
            commit("setSpinner", true);
            commit("setError", "");
            router.push("/user");
          } else {
            this.state.AuthModule.errors = "Неверные логин или пароль";
            commit("setSpinner", true);
          }
        })
        .catch((error) => {
          AuthAPI.errorHandler(error.response.status);
        })
        .finally(() => {
          commit("setSpinner", true);
        });
    },
  },
};
