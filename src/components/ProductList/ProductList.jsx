/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import like from '../../images/icon.png';

import './ProductList.scss';
import { ModalEdit } from '../ModalEdit';

export const ProductList = ({ products, onEdit }) => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const view = (product) => {
    console.log('product: ', product);
    setCurrentProduct(product);
  };

  return (
    <>
      <Box mt={10} ml={5}>
        <Button variant="contained" color="secondary">
          <Link
            to="/addProducts"
            className="product__button-add"
          >
            Add new Product
          </Link>
        </Button>
      </Box>

      <Box mt={1} ml={5} display="flex" flexDirection="column">
        <ul className="product-list">
          {products.map((product) => (
            <Box mr={3}>
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

                <Box display="flex" justifyContent="space-between">
                  <Button
                    variant="contained"
                    type="button"
                    color="primary"
                    onClick={() => {
                      view(product);
                      setOpenModal(true);
                    }}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="contained"
                    type="button"
                    style={{ backgroundColor: '#DB4E3F', color: '#ffff' }}
                  >
                    Delete
                  </Button>
                </Box>

                <p className="product__description">{product.description}</p>

                <p>
                  {`Count: ${product.count}`}
                </p>

                <p>
                  {`Color: ${product.color}`}
                </p>

                <p>
                  {`Size: ${product.width} x ${product.height}`}
                </p>

                <div className="product__container">
                  <img alt="iphone" src={like} className="product__like" />
                  <img alt="iphone" src={like} className="product__like" />
                </div>
                <ModalEdit
                  name={currentProduct.name}
                  imageUrl={currentProduct.imageUrl}
                  description={currentProduct.description}
                  count={currentProduct.count}
                  color={currentProduct.color}
                  width={currentProduct.width}
                  height={currentProduct.height}
                  isOpen={isOpenModal}
                  setOpenModal={setOpenModal}
                  edit={onEdit}
                />

              </li>
            </Box>
          ))}
        </ul>
      </Box>

    </>
  );
};

ProductList.propTypes = PropTypes.shape({
  products: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequireds,
    count: PropTypes.number.isRequiredm,
    size: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
    weight: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
}).isRequired;
