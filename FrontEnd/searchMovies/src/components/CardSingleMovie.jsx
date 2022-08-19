const CardSingleMovie = ({ Poster, Title, Released, Director, Genre, Rated, Runtime, Plot, Ratings, Actors, Language, Country }) => {
  const noImage = 'https://comnplayscience.eu/app/images/notfound.png'
  const noInfo = 'Information not available'

  return (
    <article className='single-movie p-1'>
      <section className='d-flex mt-3'>
        <div className='image mx-2 mt-2'>
          <img src={Poster !== 'N/A' ? Poster : noImage} alt={Title} />
        </div>

        <div className='main-info mt-2 mx-4 text-light'>
          <h2>{Title}</h2>
          <div className='mb-3 in'>
            <p>{Director !== 'N/A' ? Director : noInfo}</p>
            <p>{Released !== 'N/A' ? Released : noInfo}</p>
          </div>
          <div>
            <span className='rated'>{Rated}</span>
            <span className='runtime'>{Runtime}</span>
            <span className='genre'>{Genre}</span>
          </div>
          <p className='mt-5'><strong>Plot</strong></p>
          <p>{Plot !== 'N/A' ? Plot : noInfo}</p>
        </div>
      </section>

      <section className='secondary-info mx-3 mt-4 text-light'>
        <div className='mb-2'>
          <p>
            <strong>Actors: </strong>{Actors !== 'N/A' ? Actors : noInfo}
          </p>
          <p>
            <strong>Language: </strong>{Language !== 'N/A' ? Language : noInfo}
          </p>
          <p>
            <strong>Country: </strong>{Country !== 'N/A' ? Country : noInfo}
          </p>
        </div>
      </section>
    </article>
  )
}

export default CardSingleMovie
