import CardMovie from './CardMovie'

const Movies = ({ data }) => {
  console.log(data)
  return (
    data.length === 0
      ? 'No se encontaron resultados'
      : (
        <ul className='row gx-0 gx-md-5 gy-4'>
          {data.map(item => (
            <li className='col-12  col-md-6 col-lg-3' key={item.imdbID}>
              <CardMovie {...item} />
            </li>
          ))}
        </ul>
        )
  )
}

export default Movies
