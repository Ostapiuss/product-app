/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './NewProduct.scss';
import './NewProductForm.scss';

export const NewProduct = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({});

  const inputHandler = (event) => {
    const { value, name } = event.target;

    setNewProduct({ ...newProduct, [name]: value });
  };

  const submitNewProduct = (event) => {
    event.preventDefault();
    onAddProduct(newProduct);
    setNewProduct({});
  };

  return (
    <div className="new-product">
      <form
        onSubmit={submitNewProduct}
        className="new-product__form form"
      >
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
            type="text"
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
            type="text"
            placeholder="Height"
            value={newProduct.height}
            onChange={inputHandler}
            required
          />
        </label>
        <button
          className="form__submit"
          type="submit"
        >
          ADD NEW PRODUCT
        </button>
      </form>
    </div>
  );
};
