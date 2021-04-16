/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import './App.css';
import { product } from './products';
import { ProductList } from './components/ProductList';

export const App = () => {
  const [currentData, setData] = useState([]);

  useEffect(() => {
    setData(product);
  }, []);

  return (
    <div className="products">
      <ProductList products={currentData} />
    </div>
  );
};
