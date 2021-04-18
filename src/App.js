import React, { useEffect, useState } from 'react';
import {
  Link, Route, Switch, Redirect,
} from 'react-router-dom';
import firebase from './firebase';

import { ProductList } from './components/ProductList';
import { NewProduct } from './components/NewProduct';
import { HomePage } from './components/HomePage';

import './App.scss';
import './nav.scss';

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

  const addProduct = (newProduct) => {
    ref.add(newProduct);
  };

  useEffect(() => {
    getProducts();
  }, []);

  // console.log(products);

  return (
    <>
      <nav className="nav">
        <ul className="nav__links">
          <li className="nav__item">
            <Link
              to="/"
              className="item__title"
            >
              Home
            </Link>
          </li>

          <li className="nav__item item">
            <Link
              to="/products"
              className="item__title"
            >
              Products
            </Link>
          </li>

        </ul>
      </nav>

      <div className="products">

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/products">
            <ProductList products={products} />
          </Route>

          <Route path="/addProducts">
            <NewProduct onAddProduct={addProduct} />
          </Route>

          <Redirect to="/" />
        </Switch>

      </div>
    </>
  );
};
