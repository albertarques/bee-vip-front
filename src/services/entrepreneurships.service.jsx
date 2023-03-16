import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const getEntrepreneurships = () => {
  return axios.get(baseUrl + "/entrepreneurships");
};

export const getEntrepreneurshipById = (id) => {
  return axios.get(baseUrl + "/entrepreneurship/" + id);
};

export const createEntrepreneurship = (data) => {
  return axios.post(baseUrl + "/entrepreneurship/create", data);
};

export const updateEntrepreneurship = (id, data) => {
  return axios.put(baseUrl + "/entrepreneurships/" + id, data);
};

export const deleteEntrepreneurship = (id) => {
  return axios.delete(baseUrl + "/entrepreneurships/" + id);
};
