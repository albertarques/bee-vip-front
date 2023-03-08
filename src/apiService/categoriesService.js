import axios from 'axios'
const CATEGORIES_URL = 'http://localhost:8000/api/categories'

const getCategoriesData = async () => {
  try{
    const response = await axios.get(CATEGORIES_URL)
    return response.data
  } catch($err){
    return $err
  }
}

export {
  getCategoriesData
}