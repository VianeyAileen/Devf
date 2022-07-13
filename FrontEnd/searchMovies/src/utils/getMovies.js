import axios from 'axios'

const apiKey = 'ca342987'

const getMovies = (query) => {
  return axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${query}`)
}

export default getMovies
