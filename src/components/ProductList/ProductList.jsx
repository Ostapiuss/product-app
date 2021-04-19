/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './ProductList.scss';
import { ModalEdit } from '../ModalEdit';
import { ModalDelete } from '../ModalDelete';
import { ModalComments } from '../ModalComments';

export const ProductList = ({
  products, onEdit, onDelete, comments, commentFilter,
}) => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const [isOpenDeleteModal, setOpenDeleteModal] = useState(false);
  const [isOpenComments, setOpenComments] = useState(false);

  const setProduct = (product) => {
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
            <Box key={product.id} mr={3}>
              <li
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
                      setProduct(product);
                      setOpenModal(true);
                    }}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="contained"
                    type="button"
                    style={{ backgroundColor: '#DB4E3F', color: '#ffff' }}
                    onClick={() => {
                      setProduct(product);
                      setOpenDeleteModal(true);
                    }}
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

                <Button
                  variant="contained"
                  type="button"
                  color="primary"
                  style={{ color: '#ffff', width: '100%' }}
                  onClick={() => {
                    setOpenComments(true);
                    commentFilter(product.id);
                  }}
                >
                  Comments
                </Button>

                <ModalEdit
                  product={currentProduct}
                  isOpen={isOpenModal}
                  setOpenModal={setOpenModal}
                  edit={onEdit}
                />
                <ModalDelete
                  isOpen={isOpenDeleteModal}
                  deleteProduct={onDelete}
                  setOpenDeleteModal={setOpenDeleteModal}
                  product={currentProduct}
                />
                <ModalComments
                  isOpen={isOpenComments}
                  setOpenComments={setOpenComments}
                  comments={comments}
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
  onDelete: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    productId: PropTypes.string.isRequired,
  }).isRequired,
  commentsFilter: PropTypes.func.isRequired,
}).isRequired;
