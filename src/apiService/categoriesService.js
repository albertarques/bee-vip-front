import axios from 'axios'
const CATEGORIES_URL = 'http://localhost:8000/api/categories'

const getCategoriesData = async () => {
  try{
    const response = await axios.get(CATEGORIES_URL);
    console.log('Data ok on CategoriesServices');
    return response;  
  } catch($err){
    return $err;
  }
};

export {
  getCategoriesData
}