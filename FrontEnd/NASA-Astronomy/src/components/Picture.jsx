import CardPicture from './CardPicture'

const Picture = ({ data }) => {
  return (
    data === null
      ? <p className='text-center'>No se encontraron resultados</p>
      : (
        <div>
          <CardPicture {...data} />
        </div>
        )
  )
}

export default Picture
