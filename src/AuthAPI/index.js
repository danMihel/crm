import store from "@/store";
import axios from "axios";

export default {
     async login(){ 
      axios.post('http://192.168.0.254:8080/api/auth/login', {
        login: 'admin', 
        password:'admin'
      }).then(res => (console.log(res)))
    },
  errorHandler(error) {
    !error
      ? (store.state.AuthModule.errors = "Проверьте подключение к интернету")
      : error == 404
      ? (store.state.AuthModule.errors = "Ой - ошибка 404")
      : (error + "")[0] == 5
      ? (store.state.AuthModule.errors =
          "Сервер сеичас недоступен, но скоро мы все починим")
      : null;
  },
};
