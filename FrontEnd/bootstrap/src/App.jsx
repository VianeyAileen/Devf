import NavBar from "./components/NavBar"
import Formulario from "./components/Formulario"
import Carousel from "./components/Carousel"
import Cards from "./components/Cards"

function App() {

  return (
    <div className='container-fluid'>
      <NavBar />
      <p>App sencilla para probar cosas de Bootstrap y temas de Bootswatch</p>
      <Formulario />
      <Carousel />
      <Cards />
    </div>
  )
}

export default App
