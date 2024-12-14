
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutDefault from './LayoutDefault'
import Home from './pages/Home'
import Error404 from './pages/Error404'
import Cart from './pages/Cart'
import ProductDetail from './components/Product/ProductDetail'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutDefault />}>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='products/:id' element={<ProductDetail />} />
        </Route>
        <Route path='*' element={<Error404 />} />

      </Routes>
    </>
  )
}

export default App
