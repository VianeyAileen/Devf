const CardMovie = ({ Poster, Title, Year }) => {
  const noImage = 'https://comnplayscience.eu/app/images/notfound.png'

  return (
    <article className='card'>
      <img className='card-img-top' src={Poster !== 'N/A' ? Poster : noImage} alt={Title} height={400} />
      <div className='card-body text-light text-center'>
        <h5 className='card-title line-clamp'>{Title}</h5>
        <p>{Year}</p>
      </div>
    </article>
  )
}

export default CardMovie
