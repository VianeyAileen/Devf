import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Product from './components/Product'
import Products from './components/Products'

const Paths = () => {
  return (
    <section className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<p>Home</p>} />
        <Route path='/about' element={<p>About</p>} />
        <Route path='/portfolio' element={<Outlet />}>
          <Route index element={<Products />} />
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/contact' element={<p>Contact</p>} />
        <Route path='404' element={<p>404</p>} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </section>
  )
}

export default Paths
