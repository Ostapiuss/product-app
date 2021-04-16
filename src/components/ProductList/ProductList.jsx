import React from 'react';
import PropTypes from 'prop-types';
import like from '../../images/icon.png';

import './ProductList.scss';

export const ProductList = ({ products }) => (
  <ul className="product-list">
    {products.map((product) => (
      <li
        key={product.id}
        className="product-list__item item"
        style={{ width: '500px', height: '450px' }}
      >
        <h2
          className="item__title"
        >
          {product.name.toUpperCase()}
        </h2>
        <div className="item__container">
          <img alt="iphone" src={like} className="item__like" />
          <img alt="iphone" src={like} className="item__like" />
        </div>

        <div>
          <img
            className="item__photo"
            alt="iphone 12"
            src={product.imageUrl}
            style={{ height: '300px' }}
          />
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
