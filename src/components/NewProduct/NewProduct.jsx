import React from 'react';
import './NewProduct.scss';
import './NewProductForm.scss';

export const NewProduct = () =>
// const [newTitle, setNewTitle] = useState('');
  // eslint-disable-next-line implicit-arrow-linebreak
  (
    <div className="new-product">
      <form
        className="new-product__form form"
      >
        <label htmlFor="product-name">
          <input
            className="form__item"
            name="title"
            id="product-name"
            type="text"
            placeholder="Name"
            required
          />
        </label>
        <label htmlFor="product-img">
          <input
            className="form__item"
            name=""
            id="product-img"
            type="text"
            placeholder="Image URL"
            required
          />
        </label>
        <label htmlFor="product-description">
          <textarea
            className="form__item"
            id="product-description"
            type="text"
            placeholder="Description"
            required
          />
        </label>
        <label htmlFor="product-count">
          <input
            className="form__item"
            id="product-count"
            type="text"
            placeholder="Count of product"
            required
          />
        </label>
        <label htmlFor="product-color">
          <input
            className="form__item"
            id="product-color"
            type="text"
            placeholder="Color"
            required
          />
        </label>
        <label htmlFor="product-width">
          <input
            className="form__item"
            id="product-width"
            type="text"
            placeholder="Width"
            required
          />
        </label>
        <label htmlFor="product-height">
          <input
            className="form__item"
            id="product-height"
            type="text"
            placeholder="Height"
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
