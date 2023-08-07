import { Routes, Route } from 'react-router-dom'

import { Layout } from '../components/layout/Layout'
import App from '../App'
import {Cart} from '../pages/cart/Cart'
import { ProductPage } from '../pages/singleProduct/ProductPage'
import { NotFound } from '../pages/NotFound'
 

export const AppRoutes = () => {

  return (

    <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='/' element={<App />} />    
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:id' element={<ProductPage />} />
        </Route>
        <Route path='*' element={<NotFound />} />
    </Routes>
   
  )
}
