import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({titulo}) => {

const onClick = () => {
    console.log('click desde el padre')
}
  return (
    <header className='header'>
        <h2>{titulo}</h2>
        <Button color='green' text='Agregar' onClick={onClick}/>
    </header>
  )
}

// Podemos mandar los props dentro del mismo componente
// Header.defaultProps = {
//     titulo: 'Administrador de tareas'
// }

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

// const estilos = {
//     color: 'red',
//     background: 'black'
// }

export default Header