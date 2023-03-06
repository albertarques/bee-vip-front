import axios from 'axios'
const ENTREPRENEURSHIPS_URL = 'http://localhost:8000/api/entrepreneurships'

const getEntrepreneurshipData = async () => {
  try{
    const response = await axios.get(ENTREPRENEURSHIPS_URL)
    // console.log('Data ok on EntrepreneurshipsService')
    return response
  } catch($err){
    return $err
  }
};

export {
  getEntrepreneurshipData
}