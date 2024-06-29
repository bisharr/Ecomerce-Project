import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import ProductDetails from '../pages/ProductDetails';
import Signup from '../pages/Signup';
import Shop from '../pages/Shop';
import Checkout from '../pages/Checkout';
import ProtectedRout from './ProtectedRout';
import AdProducts from '../admin/AdProducts';
import AllProducts from '../admin/AllProducts';
import Dashboard from '../admin/Dashboard';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='home' element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='cart' element={<Cart />} />

      <Route path='/*' element={<ProtectedRout />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='dashboard/all-products' element={<AllProducts />} />
      <Route path='dashboard/add-product' element={<AdProducts />} />
      <Route path='dashboard' element={<Dashboard />} />

      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='shop/:id' element={<ProductDetails />} />
    </Routes>
  );
};

export default Routers;
