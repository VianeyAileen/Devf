import Header from "./components/Header"
import Tareas from "./components/Tareas"
import AddTarea from "./components/AddTarea"

import { useState } from "react"

function App() {

  const [tareas, setTareas] = useState([
    {
        id: 1,
        texto: 'Ir al doctor',
        fecha: '5 de Julio del 2022',
        terminada: true
    },
    {
        id: 2,
        texto: 'Ir al cine',
        fecha: '10 de Julio del 2022',
        terminada: false
    },
    {
        id: 3,
        texto: 'Ir al supermercado',
        fecha: '11 de Julio del 2022',
        terminada: false
    }
])

  // Función para agregar una tarea
  const addTarea = (tarea) => {
    console.log(tarea);
  }

  // Función para borrar una tarea
  const deleteTarea = (id) => {
    // console.log('borrar', id);
    setTareas(tareas.filter((tarea) => tarea.id !== id))
  }

  // Toggle terminado
  const toggleTerminado = (id) => {
    // console.log(id);
    setTareas(tareas.map((tarea) => tarea.id === id ? {...tarea, terminada: !tarea.terminada} : tarea))
  }

  return (
    <>
    <div className="container">
      <Header titulo='Administrador de Tareas' />
      <AddTarea onAdd={addTarea} />
      {tareas.length > 0 ? (<Tareas tareas={tareas} onDelete={deleteTarea} onToggle={toggleTerminado} />) : ('No hay tareas para mostrar')}
    </div>
    </>
  )
}

export default App
