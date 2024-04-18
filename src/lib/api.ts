import axios from 'axios'

const baseURL = 'https://rolling-api.vercel.app/5-3'

const api = axios.create({
  baseURL,
})

export default api
