import axios from "axios";

const API = axios.create({
  baseURL: 'https://erytyu.onrender.com',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;

  
});

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const createTour = (formData) => API.post("/products", formData);
export const createMessage = (formData) => API.post("/message", formData);
export const createHelp = (formData) => API.post("/help", formData);
export const createAnswer = (formData) => API.post("/answer", formData);
export const user = (updatedTourData, id) =>
  API.patch(`users/update/${id}`, updatedTourData);