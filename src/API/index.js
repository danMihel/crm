import axios from "axios";

const loginConfig = {
  baseURL: "http://192.168.0.254:8080/api/auth/admin",
};

export const LoginAPIInstanse = axios.create(loginConfig);
