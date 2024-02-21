import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import './App.css';


import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from './Component/Header';
import Home from './Component/Home';
import Product from './Component/Product';
import About from './Component/About';
import Contact from './Component/Contact';

import ProductDetails from './Component/ProductDetails';
import Cart from './Component/Cart';
import Checkout from './Component/Checkout';
function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/products" element={<Product />} />
        <Route  path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        
      </Routes>
      
    </>
      
    
  );
}

export default App;
