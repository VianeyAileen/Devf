
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Movie = ({ data }) => {
  const { movieId } = useParams()
  const navigate = useNavigate()

  const uniqueMovie = data.map(item => item.imdbID === movieId)

  useEffect(() => {
    uniqueMovie === undefined && navigate('/404')
  }, [])
  return uniqueMovie && (
    <article className=''>
      <img
        className='img-fluid'
        src={uniqueMovie?.Poster}
        alt={uniqueMovie?.Title}
        height={400}
      />
      <div className='mt-4'>
        <h5 className='card-title line-clamp'>{uniqueMovie?.Title}</h5>
        <p>{uniqueMovie?.Year}</p>
        <p>Hola</p>
      </div>
    </article>
  )
}

export default Movie
