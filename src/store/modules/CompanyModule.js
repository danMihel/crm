import API from "@/API/index"

export  const CompanyModule = {
    namespaced: true,
    actions: {
        async getCompany({ commit }) {
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
                router.push("/user");
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
}
