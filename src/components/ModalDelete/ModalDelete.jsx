import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog, DialogTitle, DialogContent, RadioGroup, FormControlLabel, Radio, DialogActions, Button,
} from '@material-ui/core';

export const ModalDelete = ({
  isOpen, deleteProduct, setOpenDeleteModal, product,
}) => {
  const [isDelete, setDelet] = useState(false);

  return (
    <Dialog
      className="product__delete"
      open={isOpen}
    >
      <DialogTitle id="form-delete-title">
        Do you really wana delete this product?
      </DialogTitle>
      <DialogContent>
        <RadioGroup
          name="isBusiness"
        >
          <FormControlLabel
            value="true"
            control={<Radio />}
            onClick={() => {
              setDelet(true);
            }}
            label="YES"
          />
          <FormControlLabel
            value="false"
            control={<Radio />}
            label="NO"
            onClick={() => {
              setDelet(false);
            }}
          />
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          type="button"
          onClick={() => {
            if (isDelete) {
              deleteProduct(product);
              setOpenDeleteModal(false);
            } else {
              setOpenDeleteModal(false);
            }
          }}
        >
          Submit
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            setOpenDeleteModal(false);
          }}
        >
          X
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ModalDelete.propTypes = PropTypes.shape({
  isOpen: PropTypes.bool.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  setOpenDeleteModal: PropTypes.func.isRequired,
  product: PropTypes.shape({
    color: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
}).isRequired;
