import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '@/context/Auth'
import './Header.scss'

function Header () {
  const { isAuth, logout } = useContext(AuthContext)
  return (
    <nav className='header'>
      <Link to='/' className='header__logo'>LOGO</Link>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <Link to='/' className='header__item-link'>Home</Link>
        </li>
        {isAuth
          ? (
            <li className='header__list-item'>
              <Link to='/dashboard' className='header__item-link'>Dashboard</Link>
            </li>
            )
          : (
            <></>
            )}
        {isAuth
          ? (
            <li className='header__list-item'>
              <Link to='/' className='header__item-link' onClick={logout}>Logout</Link>
            </li>
            )
          : (
            <></>
            )}

        {!isAuth
          ? (
            <>
              <li className='header__list-item'>
                <Link to='/login' className='header__item-link'>Login</Link>
              </li>
              <li className='header__list-item'>
                <Link to='/register' className='header__item-link'>Register</Link>
              </li>
            </>
            )
          : (
            <></>
            )}
      </ul>
    </nav>
  )
}

export default Header
