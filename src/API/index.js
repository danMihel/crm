import store from "@/store";
import axios from "axios";

export default {
  baseURL: 'http://192.168.0.254:8080/api',

  async login() {
    const url = '/auth/login';
    return axios.post(this.baseURL + url, {
      login: store.state.AuthModule.login,
      password: store.state.AuthModule.password,
    });
  },

  async getElement(id = '', url = ''){
    return axios.get(this.baseURL + `/${url}/${id}`, {
      headers: {
       'Authorization': `Bearer ${ sessionStorage.accessToken}`
      }, 
    });
  },
  
  errorHandler(error) {
    !error
      ? (store.state.AuthModule.errors = "Проверьте подключение к интернету")
      : error == 404
      ? (store.state.AuthModule.errors = "Ой - ошибка 404")
      : (error + "")[0] == 5
      ? (store.state.AuthModule.errors = "Сервер сеичас недоступен, но скоро мы все починим")
      : (error+'')[0] == 4 
      ? (store.state.AuthModule.errors = "Неверный логин или пароль")
      : null;
  },
};
