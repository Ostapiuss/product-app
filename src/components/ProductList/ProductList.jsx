/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import like from '../../images/icon.png';

import './ProductList.scss';

export const ProductList = ({ products }) => (
  <ul className="product-list">
    {products.map((product) => (
      <li
        key={product.id}
        className="product-list__product product"
        style={{ width: '500px' }}
      >
        <h2
          className="product__title"
        >
          {product.name.toUpperCase()}
        </h2>

        <div>
          <img
            className="product__photo"
            alt="iphone 12"
            src={product.imageUrl}
            style={{ height: '300px' }}
          />
        </div>

        <button
          type="button"
        >
          Edit
        </button>

        <p className="product__description">{product.description}</p>

        <p>
          {`Count: ${product.count}`}
        </p>

        <p>
          {`Color: ${product.color}`}
        </p>

        <p>
          {`Size: ${product.size.width} x ${product.size.height}`}
        </p>

        <div className="product__container">
          <img alt="iphone" src={like} className="product__like" />
          <img alt="iphone" src={like} className="product__like" />
        </div>

      </li>
    ))}
  </ul>
);

ProductList.propTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequireds,
  count: PropTypes.number.isRequiredm,
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  weight: PropTypes.string.isRequired,
}).isRequired;
