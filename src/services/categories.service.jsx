import axios from 'axios'

const baseUrl = import.meta.env.VITE_BACKEND_URL

export const getCategories = () => {
  return axios.get(baseUrl + "/categories")
}

export const getCategoryById = (id) => {
  return axios.get(baseUrl + "/categories/" + id)
}

export const createCategory = (data) => {
  return axios.post(baseUrl + "/categories", data)
}

export const updateCategory = (id, data) => {
  return axios.put(baseUrl + "/categories/" + id, data)
}

export const deleteCategory = (id) => {
  return axios.delete(baseUrl + "/categories/" + id)
}