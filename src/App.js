import React, { useEffect, useState } from 'react';
import './App.scss';
import { product } from './products';
import { ProductList } from './components/ProductList';

export const App = () => {
  const [currentData, setData] = useState([]);
  const [isShowData, setShowData] = useState(false);

  useEffect(() => {
    setData(product);
  }, []);

  return (
    <div className="products">
      <button
        className="products__show-button"
        type="button"
        onClick={() => {
          setShowData(!isShowData);
        }}
      >
        {isShowData ? 'Hide Products' : 'Show Products'}
      </button>

      {isShowData && (
        <ProductList products={currentData} />
      )}
    </div>
  );
};
