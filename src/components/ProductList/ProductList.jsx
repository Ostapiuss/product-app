/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';

export const ProductList = ({ products }) => (
  <ul className="product-list">
    {products.map((product) => (
      <li
        key={product.id}
        className="product-list__item"
      >
        {product.name}
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
