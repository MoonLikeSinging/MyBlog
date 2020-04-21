import axios from 'axios'

//Create axios instance
const service = axios.create({
  baseURL: 'http://localhost:9000',
  timeout: 15000
})  

export default service