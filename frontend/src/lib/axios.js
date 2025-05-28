import axios from 'axios'

export const axioisInstance = axios.create({
    baseURL:"https://localhost:5001/api",
    withCredentials:true
})
