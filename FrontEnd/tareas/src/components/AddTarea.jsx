import { useState } from "react"

const AddTarea = ({onAdd}) => {

    const [texto, setTexto] = useState('')
    const [fecha, setFecha] = useState('')
    const [terminada, setTerminada] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!texto) {
            alert('Por favor ingresa un texto')
            return
        }

        onAdd({texto, fecha, terminada})

        setTexto('')
        setFecha('')
        setTerminada(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Tareas</label>
                <input type="text" placeholder="Ingresa una Tarea" value={texto} onChange={(e) => setTexto(e.target.value)} />
            </div>

            <div className="form-control">
                <label>Fecha</label>
                <input type="text" placeholder="Ingresa una Fecha" value={fecha} onChange={(e) => setFecha(e.target.value)}/>
            </div>
            
            <div className="form-control form-control-check">
                <label>Terminada</label>
                <input type="checkbox" checked={terminada} value={terminada} onChange={(e) => setTerminada(e.currentTarget.checked)} />
            </div>

            <input className="btn btn-block" type="submit" value="Agregar Nueva Tarea" />
        </form>
    )
}

export default AddTarea