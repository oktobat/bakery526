import React from 'react';
import {Route, Routes}  from 'react-router-dom'
import Layout from '@/Layout'
import HomeView from '@/views/HomeView'
import CartView from '@/views/CartView'
import EmployeeView from '@/views/EmployeeView'
import MovieView from '@/views/MovieView'
import ProductView from '@/views/ProductView'
import ProductDetailView from '@/views/ProductDetailView'
import StoreView from '@/views/StoreView'
import LoginView from '@/views/LoginView'
import JoinView from '@/views/JoinView'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={ <HomeView /> } />
        <Route path="/cart" element={ <CartView /> } />
        <Route path="/movie" element={ <MovieView /> } />
        <Route path="/product" element={ <ProductView /> } />
        <Route path="/product/:prno" element={ <ProductDetailView /> } />
        <Route path="/employee" element={ <EmployeeView /> } />
        <Route path="/store" element={ <StoreView /> } />
        <Route path="/login" element={ <LoginView /> } />
        <Route path="/join" element={ <JoinView /> } />
      </Route>
    </Routes>
  );
};

export default App;