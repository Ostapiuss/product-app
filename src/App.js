import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.scss';
import { product } from './products';
import { ProductList } from './components/ProductList';
import './nav.scss';
import { NewProduct } from './components/NewProduct';

// import { NewProduct } from './components/NewProduct';

export const App = () => {
  const [currentData, setData] = useState([]);
  // const [isShowData, setShowData] = useState(false);
  // const [isAddNewProdut, addNewProduct] = useState(false);

  useEffect(() => {
    setData(product);
  }, []);

  return (
    <>
      <nav className="nav">
        <ul className="nav__links">
          <li className="nav__item item">
            <Link
              to="/products"
              className="item__title"
            >
              Show Products
            </Link>
          </li>

          <li className="nav__item">
            <Link
              to="/addProducts"
              className="item__title"
            >
              Add new Product
            </Link>
          </li>
        </ul>
      </nav>

      <div className="products">

        <Route path="/products">
          <ProductList products={currentData} />
        </Route>

        <Route path="/addProducts">
          <NewProduct />
        </Route>

      </div>
    </>
  );
};
