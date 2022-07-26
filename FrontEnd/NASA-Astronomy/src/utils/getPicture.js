import axios from 'axios'

const apiKey = 'cJ2Dyy3rzE7ryj6QoBTBKa0yu5GvbINIKVHwQ8mF'
const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

export const getPicture = async (date) => {
  return await axios.get(`${baseUrl}&date=${date}`)
}
