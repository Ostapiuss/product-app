import React from 'react';
import './NewProduct.scss';

export const NewProduct = () => (
  <div className="new-product">
    <form
      className="new-product__form"
    >
      <label htmlFor="product-name">
        <input
          className="new-product__item"
          id="product-name"
          type="text"
          placeholder="Name"
        />
      </label>
      <label htmlFor="product-img">
        <input
          className="new-product__item"
          id="product-img"
          type="text"
          placeholder="Image URL"
        />
      </label>
      <label htmlFor="product-description">
        <textarea
          className="new-product__item"
          id="product-description"
          type="text"
          placeholder="Description"
        />
      </label>
      <label htmlFor="product-count">
        <input
          className="new-product__item"
          id="product-count"
          type="text"
          placeholder="Count of product"
        />
      </label>
      <label htmlFor="product-color">
        <input
          className="new-product__item"
          id="product-color"
          type="text"
          placeholder="Color"
        />
      </label>
      <label htmlFor="product-width">
        <input
          className="new-product__item"
          id="product-width"
          type="text"
          placeholder="Width"
        />
      </label>
      <label htmlFor="product-height">
        <input
          className="new-product__item"
          id="product-height"
          type="text"
          placeholder="Height"
        />
      </label>

    </form>
  </div>
);
