import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import App from './components/App'
import Movie from './components/Movie'

// hooks
import useFetcher from './hooks/useFetcher'
import Loading from './components/Loading'

const Paths = () => {
  const { dataState: movies, loading } = useFetcher('avengers')
  return (
    <Routes>
      <Route path='/' element={<Outlet />}>
        <Route index element={<App />} />
        <Route path=':movieId' element={<Movie />} />
      </Route>
      <Route path='404' element={<p>404</p>} />
      <Route path='*' element={loading ? <Loading /> : <Navigate to='/404' data={movies} />} />
    </Routes>
  )
}

export default Paths
