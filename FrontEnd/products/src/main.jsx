// Estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/styles/index.css'

// Librerías
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Componentes
import Paths from './Paths'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Paths />
  </BrowserRouter>
)
