import { useRef, useState } from 'react'

import useFetcher from '../hooks/useFetcher'

import Header from './Header'
import Loading from './Loading'
import Picture from './Picture'

function App () {
  const searchRef = useRef(null)
  const [date, setDate] = useState('')
  const { dataState: picture, loading } = useFetcher(date)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setDate(searchRef.current.value)
  }

  return (
    <div className='container'>
      <Header />
      <form className='text-center' onSubmit={handleSubmit}>
        <input ref={searchRef} type='date' />
        <button>Buscar</button>
      </form>
      <section className='py-4'>
        {loading ? <Loading /> : <Picture data={picture} />}
      </section>
    </div>

  )
}

export default App
