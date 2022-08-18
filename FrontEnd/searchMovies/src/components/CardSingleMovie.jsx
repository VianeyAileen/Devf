const CardSingleMovie = ({ Poster, Title, Released, Director, Genre, Rated, Runtime, Plot, Ratings, Actors, Language, Country }) => {
  const noImage = 'https://comnplayscience.eu/app/images/notfound.png'
  return (
    <article className='single-movie p-1'>
      <section className='d-flex mt-3'>
        <div className='image mx-2 mt-2'>
          <img src={Poster !== 'N/A' ? Poster : noImage} alt={Title} />
        </div>

        <div className='main-info mt-2 mx-4 text-light'>
          <h2>{Title}</h2>
          <div className='mb-3 in'>
            <p>{Director}</p>
            <p>{Released}</p>
          </div>
          <span className='rated'>{Rated}</span>
          <span className='runtime'>{Runtime}</span>
          <span className='genre'>{Genre}</span>
          <p className='mt-5'><strong>Plot</strong></p>
          <p>{Plot}</p>
        </div>
      </section>

      <section className='secondary-info mx-3 mt-4 text-light'>
        {/* <div className='mb-4'>
          <p className='m-0'><strong>Ratings</strong></p>
          {Ratings?.map(items => (
            <div key={items.Value}>
              <label>{items.Source}:</label>
              <span className='mx-1'>{items.Value}</span>
            </div>
          ))}
        </div> */}

        <div className='mb-2'>
          <p>
            <strong>Actors: </strong>{Actors}
          </p>
          <p>
            <strong>Language: </strong>{Language}
          </p>
          <p>
            <strong>Country: </strong>{Country}
          </p>
        </div>
      </section>
    </article>
  )
}

export default CardSingleMovie
