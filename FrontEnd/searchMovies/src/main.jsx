// estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// librerías
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// componentes
import Paths from './Paths'

// PD.borrar el strictmode antes de desplegar
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Paths />
  </BrowserRouter>
)
