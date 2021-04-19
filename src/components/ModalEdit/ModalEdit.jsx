/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions,
} from '@material-ui/core';

import './ModalEdit.scss';

export const ModalEdit = ({
  isOpen,
  product,
  edit,
  setOpenModal,
}) => {
  const [updateProduct, setUpdateProduct] = useState({ ...product });

  const inputHandler = (event) => {
    const { value, name } = event.target;

    setUpdateProduct({ ...updateProduct, [name]: value });
  };

  useEffect(() => {
    setUpdateProduct(product);
  }, [product]);

  return (
    <Dialog
      className="product__edit-form"
      open={isOpen}
    >
      <DialogTitle id="form-dialog-title">Edit Product</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="modal-name"
          label="Name"
          type="text"
          name="name"
          value={updateProduct.name}
          onChange={inputHandler}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="modal-image"
          label="Image URL"
          type="text"
          name="imageUrl"
          value={updateProduct.imageUrl}
          onChange={inputHandler}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="modal-description"
          name="description"
          label="Description"
          value={updateProduct.description}
          onChange={inputHandler}
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="modal-count"
          label="Count of products"
          name="count"
          value={updateProduct.count}
          onChange={inputHandler}
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="modal-color"
          name="color"
          label="Color"
          value={updateProduct.color}
          onChange={inputHandler}
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="modal-width"
          name="width"
          label="Width"
          value={updateProduct.width}
          onChange={inputHandler}
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="modal-height"
          name="height"
          label="Height"
          value={updateProduct.height}
          onChange={inputHandler}
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={() => {
            setUpdateProduct(updateProduct);
            edit(updateProduct);
            setOpenModal(false);
          }}
        >
          Save
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          Undo
        </Button>
      </DialogActions>
    </Dialog>
  );
};
