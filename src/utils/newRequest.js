import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://erytyu.onrender.com",
  withCredentials: true,
});

export default newRequest;
