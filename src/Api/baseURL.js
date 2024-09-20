import axios from "axios";

const baseUrl = axios.create({baseURL:'http://127.0.0.1:8800'})
export const url = 'http://127.0.0.1:8800'
export default baseUrl