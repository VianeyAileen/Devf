import { useRef, useState } from 'react'

// hooks
import useFetcher from '../hooks/useFetcher'

// Componentes
import Loading from './Loading'
import Movies from './Movies'

function App () {
  const searchRef = useRef(null)
  const [query, setQuery] = useState('avengers')
  const { dataState: movies, loading } = useFetcher(query)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setQuery(searchRef.current.value)
    e.target.reset()
  }

  return (
    <section className='container'>
      <h4 className='py-4 text-center'>Buscador Películas</h4>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input
            ref={searchRef}
            type='search'
            placeholder='Nombre de la película...'
            className='form-control'
            name='buscador'
          />
          <button className='btn btn-primary'>Buscar</button>
        </div>
      </form>
      <section className='py-4'>
        {loading ? <Loading /> : <Movies data={movies} />}
      </section>
    </section>
  )
}

export default App
