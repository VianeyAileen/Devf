import { useEffect, useState } from 'react'
import { getMovie } from '../utils/getMovies'

const useFetcherSingle = (id) => {
  const [dataMovie, setMovie] = useState({})
  const [loading, setLoading] = useState(true)

  const getDataDetail = async () => {
    const { data } = await getMovie(id)
    // setMovie(data)
    // console.log(data)
    // setLoading(false)
    if (data.Response !== 'False') {
      setMovie(data)
      console.log(data)
    } else {
      setMovie({})
    }
    setLoading(false)
  }

  useEffect(() => {
    getDataDetail()
  }, [id])

  return { dataMovie, loading }
}

export default useFetcherSingle
