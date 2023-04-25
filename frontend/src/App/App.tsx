import NotFound from '../components/404/NotFound';
import { Route, Routes } from 'react-router';
import React, { useEffect } from 'react';
import './App.css';
import MainPage from '../components/main/MainPage';
import Navbar from '../components/navbar/Navbar';
import { getService } from '../json/jsonSlice';

import { useAppDispatch } from '../store';
import Login from '../components/Auth/Login';
import SerchOrderList from '../components/SerchOrder/SerchOrderList';
import { getServiceOrders } from '../components/SerchOrder/SerchOrderSlice';
import UpdateFormOrderItem from '../components/SerchOrder/UpdateFormOrderItem';
import { getProduct } from '../json/jsonSlice';
import { useAppDispatch } from '../store';

import ServiceList from '../components/services/ServiceList';
import ProductList from '../components/productCart/ProductList';



function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getService());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getServiceOrders());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route
            path="/serviceorders/edit/:id"
            element={<UpdateFormOrderItem />}
          />
          <Route index element={<MainPage />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/list" element={<SerchOrderList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
