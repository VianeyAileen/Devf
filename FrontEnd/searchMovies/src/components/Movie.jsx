import { useParams } from 'react-router-dom'
import useFetcherSingle from '../hooks/useFetcherSingle'
import CardSingleMovie from './CardSingleMovie'
import Loading from './Loading'

const Movie = () => {
  const { movieId } = useParams()
  const { dataMovie: singleMovie, loading } = useFetcherSingle(movieId)
  return (
    loading
      ? <Loading />
      : (
        <div className='container movie'>
          <CardSingleMovie data={singleMovie} {...singleMovie} />
        </div>
        )
  )
}

export default Movie
