import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import MainRoutes from './Routes'

function App () {
  return (

    <BrowserRouter>
      <div className='App'>
        <Header />
        <MainRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
