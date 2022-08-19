import { Link } from 'react-router-dom'
import CardMovie from './CardMovie'

const Movies = ({ data }) => {
  return (
    data.length === 0
      ? <p className='text-center'>No movie found</p>
      : (
        <ul className='row gx-0 gx-md-5 gy-4'>
          {data.map(item => (
            <li className='col-12 col-md-6 col-lg-3' key={item.imdbID}>
              <Link className='hover' to={`/${item.imdbID}`}>
                <CardMovie {...item} />
              </Link>
            </li>
          ))}
        </ul>
        )
  )
}

export default Movies
