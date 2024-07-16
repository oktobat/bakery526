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
import BoardListView from '@/views/BoardListView'
import BoardWriteView from '@/views/BoardWriteView'
import BoardDetailView from '@/views/BoardDetailView'
import BoardModifyView from '@/views/BoardModifyView'

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
        <Route path="/boardList" element={ <BoardListView /> } />
        <Route path="/boardWrite" element={ <BoardWriteView /> } />
        <Route path="/boardDetail/:subject" element={ <BoardDetailView /> } />
        <Route path="/boardModify/:subject" element={ <BoardModifyView /> } />
      </Route>
    </Routes>
  );
};

export default App;