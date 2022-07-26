
const Header = () => {
  return (
    <div className='header text-light text-center mt-3'>
      <h1>NASA Astronomy Picture of the Day</h1>
      <p>Desarrollado por: Vianey Borras</p>
      <p>
        <span>
          <strong>API: </strong>
        </span>
        <a href='https://api.nasa.gov/planetary/apod?api_key=cJ2Dyy3rzE7ryj6QoBTBKa0yu5GvbINIKVHwQ8mF' target='_blank' rel='noopener noreferrer'> https://api.nasa.gov/planetary/apod</a>
      </p>
    </div>
  )
}

export default Header
