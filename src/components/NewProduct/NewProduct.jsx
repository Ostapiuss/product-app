import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import './NewProduct.scss';
import './NewProductForm.scss';

export const NewProduct = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({});
  const [isError, setError] = useState(false);

  // eslint-disable-next-line consistent-return
  const isValidProductLink = (currentURL) => {
    // eslint-disable-next-line
    const isValidURL = /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/;

    if (isValidURL.test(currentURL)) {
      return isValidURL;
    }
  };

  const inputHandler = (event) => {
    const { value, name } = event.target;

    setNewProduct({ ...newProduct, [name]: value });
  };

  const submitNewProduct = (event) => {
    event.preventDefault();
    if (isValidProductLink(newProduct.imageUrl)) {
      setError(false);
      onAddProduct(newProduct);
      setNewProduct({
        id: '',
        name: '',
        imageUrl: '',
        description: '',
        count: '',
        color: '',
        width: '',
        height: '',
      });
    } else {
      setError(true);
    }
  };

  return (
    <div className="new-product">
      <form
        onSubmit={submitNewProduct}
        className="new-product__form form"
      >
        <label htmlFor="product-id">
          <input
            id="product-id"
            className="form__item"
            name="id"
            type="number"
            placeholder="ID"
            value={newProduct.id}
            onChange={inputHandler}
            required
          />
        </label>
        <label htmlFor="product-name">
          <input
            id="product-name"
            className="form__item"
            name="name"
            type="text"
            placeholder="Name"
            value={newProduct.name}
            onChange={inputHandler}
            required
          />
        </label>
        <label htmlFor="product-img">
          {isError && (
          <p style={{ color: 'red' }}>Not Valid URL </p>
          )}
          <input
            id="product-img"
            className={classNames('form__item', { error: isError })}
            name="imageUrl"
            type="text"
            placeholder="Image URL"
            value={newProduct.imageUrl}
            onChange={inputHandler}
            required
          />
        </label>
        <label htmlFor="product-description">
          <textarea
            id="product-description"
            className="form__item"
            name="description"
            type="text"
            placeholder="Description"
            value={newProduct.description}
            onChange={inputHandler}
            required
          />
        </label>
        <label htmlFor="product-count">
          <input
            id="product-count"
            className="form__item"
            name="count"
            type="number"
            placeholder="Count of product"
            value={newProduct.count}
            onChange={inputHandler}
            required
          />
        </label>
        <label htmlFor="product-color">
          <input
            id="product-color"
            className="form__item"
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
            id="product-width"
            className="form__item"
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
            id="product-height"
            className="form__item"
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
