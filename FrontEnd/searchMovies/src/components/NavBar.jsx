import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <NavLink className='navbar-brand' to='/'>
          <img src='/src/assets/icon.png' alt width={80} height={65} />
          <span className='text-light'> Movie Finder</span>
        </NavLink>
      </div>
    </nav>

  )
}

export default NavBar
