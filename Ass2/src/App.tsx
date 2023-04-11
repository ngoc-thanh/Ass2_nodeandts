import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/user'
import Homepage from './pages/homepage'
import DetailsProducts from './pages/detailsproduct'
import Cart from './pages/cart'
import Signin from './pages/signin'
import Signup from './pages/signup'
import AdminLayout from './components/layout/admin'
import Dashboard from './pages/dashboard'
import AdminAdd from './pages/adminAdd'
import AdminUpdate from './pages/adminUpdate'
import ProductDetail from './pages/detailsproduct'
import CategoryFetch from './pages/category'
import CategoryAdd from './pages/categoryAdd'
import CategoryUpdate from './pages/categoryUpdate'
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/dang-nhap' element={<Signin />}></Route>
      <Route path='/dang-ky' element={<Signup />}></Route>

      <Route path='/' element={<UserLayout />}>
        <Route index element={<Homepage />} />
        <Route path='product/:id' element={<ProductDetail />}></Route>
        <Route path='cart' element={<Cart />}></Route>
      </Route>
      <Route path='/admin' element={<AdminLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path='them-san-pham' element={<AdminAdd />}></Route>
        <Route path='products/:id' element={<AdminUpdate />}></Route>
        <Route path='category' element={<CategoryFetch />}></Route>
        <Route path='category/them-the-loai' element={<CategoryAdd />}></Route>
        <Route path='category/:id' element={<CategoryUpdate />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
