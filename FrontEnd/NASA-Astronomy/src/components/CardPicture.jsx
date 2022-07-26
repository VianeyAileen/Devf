const CardPicture = ({ title, url, copyright, explanation }) => {
  return (
    <div className='card mx-auto'>
      <h3 className='card-title text-center'>{title}</h3>
      <img className='card-img-top' src={url} alt={title} />
      <div className='card-body'>
        <h6 className='card-subtitle mb-2'>{copyright}</h6>
        <p className='card-text'>{explanation}</p>
      </div>
    </div>
  )
}

export default CardPicture
