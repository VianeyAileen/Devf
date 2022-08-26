import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { AuthProvider } from './context/Auth'
import MainRoutes from './Routes'

function App () {
  return (

    <BrowserRouter>
      <div className='App'>
        <AuthProvider>
          <Header />
          <MainRoutes />
        </AuthProvider>
      </div>
    </BrowserRouter>
  )
}

export default App
