/* eslint-disable react/prop-types */
import React, { useState } from 'react';
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
              console.log('product: ', product);
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
