import axios from 'axios'
const BASE_URL = 'http://localhost:8000/api/entrepreneurships'

const getEntrepreneurshipData = async () => {
  const response = await axios.get(BASE_URL);
  console.log(response.data.entrepreneurships);
};

export {
  getEntrepreneurshipData,
}