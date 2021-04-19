/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import './NewProduct.scss';
import './NewProductForm.scss';

export const NewProduct = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({});
  const [error, setError] = useState(false);

  const isValidProductLink = (currentURL) => {
    // eslint-disable-next-line
    const isValidURL = /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/;

    if (!isValidURL.test(currentURL)) {
      setError(true);
    } else {
      setError(false);
      onAddProduct(newProduct);
    }
  };

  const inputHandler = (event) => {
    const { value, name } = event.target;

    setNewProduct({ ...newProduct, [name]: value });
  };

  const submitNewProduct = (event) => {
    event.preventDefault();
    isValidProductLink(newProduct.imageUrl);
  };

  return (
    <div className="new-product">
      <form
        onSubmit={submitNewProduct}
        className="new-product__form form"
      >
        <label htmlFor="product-id">
          <input
            className="form__item"
            id="product-id"
            name="id"
            type="text"
            placeholder="ID"
            value={newProduct.id}
            onChange={inputHandler}
            required
          />
        </label>
        <label htmlFor="product-name">
          <input
            className="form__item"
            name="name"
            id="product-name"
            type="text"
            placeholder="Name"
            value={newProduct.name}
            onChange={inputHandler}
            required
          />
        </label>
        <label htmlFor="product-img">
          <input
            className="form__item"
            name="imageUrl"
            id="product-img"
            type="text"
            placeholder="Image URL"
            value={newProduct.imageUrl}
            onChange={inputHandler}
            required
          />
        </label>
        <label htmlFor="product-description">
          <textarea
            className="form__item"
            id="product-description"
            type="text"
            name="description"
            placeholder="Description"
            value={newProduct.description}
            onChange={inputHandler}
            required
          />
        </label>
        <label htmlFor="product-count">
          <input
            className="form__item"
            id="product-count"
            type="number"
            name="count"
            placeholder="Count of product"
            value={newProduct.count}
            onChange={inputHandler}
            required
          />
        </label>
        <label htmlFor="product-color">
          <input
            className="form__item"
            id="product-color"
            name="color"
            type="text"
            placeholder="Color"
            value={newProduct.color}
            onChange={inputHandler}
            required
          />
        </label>
        <label htmlFor="product-width">
          <input
            className="form__item"
            id="product-width"
            name="width"
            type="number"
            placeholder="Width"
            value={newProduct.width}
            onChange={inputHandler}
            required
          />
        </label>
        <label htmlFor="product-height">
          <input
            className="form__item"
            id="product-height"
            name="height"
            type="number"
            placeholder="Height"
            value={newProduct.height}
            onChange={inputHandler}
            required
          />
        </label>

        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Add new product
        </Button>

      </form>
    </div>
  );
};

NewProduct.propTypes = PropTypes.shape({
  onAddProduct: PropTypes.func.isRequired,
}).isRequired;
