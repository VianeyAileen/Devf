import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import { getPicture } from '../utils/getPicture'

const useFetcher = (date = '') => {
  const [dataState, setDataState] = useState({})
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    try {
      const { data } = await getPicture(date)
      setDataState(data)
      setLoading(false)
    } catch (error) {
      const d = new Date()
      const dd = String(d.getDate()).padStart(2, '0')
      const mm = String(d.getMonth() + 1).padStart(2, '0')
      const yyyy = d.getFullYear()
      const fecha = dd + '/' + mm + '/' + yyyy
      Swal.fire({
        title: 'Fecha fuera de rango',
        text: 'Por favor seleccione una fecha que este entre el 16/06/1995 y el ' + fecha,
        icon: 'warning',
        confirmButtonText: 'Cerrar'
      })
    }
  }
  useEffect(() => {
    getData()
  }, [date])

  return { dataState, loading }
}

export default useFetcher
