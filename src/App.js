import React, { useEffect, useState } from 'react';
import {
  Link, Route, Switch, Redirect,
} from 'react-router-dom';
import {
  AppBar, Container, Typography, Box, Toolbar,
} from '@material-ui/core';
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
    ref
      .doc(newProduct.id)
      .set(newProduct);
  };

  const editProduct = (updateProduct) => {
    ref
      .doc(updateProduct.id)
      .set(updateProduct);
  };

  const deleteProduct = (product) => {
    ref
      .doc(product.id)
      .delete();
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <AppBar position="fixed">
        <Container fixed>

          <Toolbar className="header">
            <Typography className="header__logo-title">
              Product App
            </Typography>

            <Box
              className="header__navigation navigation"
              display="flex"
            >

              <Link
                to="/"
                className="navigation__title"
                color="primary"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="navigation__title"
                color="secondary"
              >
                Products
              </Link>

            </Box>
          </Toolbar>

        </Container>
      </AppBar>

      <div className="products">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/products">
            <ProductList products={products} onEdit={editProduct} onDelete={deleteProduct} />
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
