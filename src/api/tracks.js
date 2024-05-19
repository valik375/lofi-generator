import axios from 'axios'

export default {
  async getTracks(params) {
    const response = await axios.get('/tracks?format=json&client_id=502adce9&order=listens_total', { params })
    return response.data
  },
}