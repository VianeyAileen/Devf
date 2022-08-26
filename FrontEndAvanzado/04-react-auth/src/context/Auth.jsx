import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export function AuthProvider (props) {
  const [isAuth, setIsAuth] = useState(false)

  // Si existe el token, cambiamos el estado a true
  const loginUser = (token) => {
    window.sessionStorage.setItem('token', token)
    setIsAuth(true)
  }

  //  Removemos el token y cambiamos el estado a false
  const logout = () => {
    window.sessionStorage.removeItem('token')
    setIsAuth(false)
  }

  useEffect(() => {
    const token = window.sessionStorage.getItem('token')

    if (token) {
      console.log('token', token)
      setIsAuth(true)
    }
  }, [])

  // Lo que se quiere compartir
  const values = {
    isAuth,
    loginUser,
    logout
  }
  return (
    <AuthContext.Provider value={values}>
      {props.children}
    </AuthContext.Provider>
  )
}
