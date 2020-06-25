import axios from 'axios'

//Create axios instance
const service = axios.create({
  baseURL: 'http://120.79.23.11:9000',
  timeout: 15000
})  

export default service