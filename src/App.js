import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import firebase from './firebase';
import './App.scss';

import { ProductList } from './components/ProductList';
import './nav.scss';
import { NewProduct } from './components/NewProduct';

export const App = () => {
  const [products, setProducts] = useState([]);

  const ref = firebase.firestore().collection('products');

  const getProducts = () => {
    ref.onSnapshot((querySnapchot) => {
      const items = [];

      querySnapchot.forEach((doc) => {
        items.push(doc.data());
      });

      setProducts(items);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <>
      <nav className="nav">
        <ul className="nav__links">
          <li className="nav__item item">
            <Link
              to="/products"
              className="item__title"
            >
              Products
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
          <ProductList products={products} />
        </Route>

        <Route path="/addProducts">
          <NewProduct />
        </Route>

      </div>
    </>
  );
};
