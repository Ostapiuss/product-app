/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import {
  Button, Dialog, DialogTitle, DialogContent, DialogActions,
} from '@material-ui/core';

export const ModalComments = ({ isOpen, setOpenComments, productWithComments }) => {
  // const [isCommentsClose, setCommentsClose] = useState([]);
  // const [producWithCommentsm setProductWithComments] = useState([]);

  return (
    <Dialog
      className="product__comments"
      open={isOpen}
    >
      <DialogTitle
        id="product-comments"
      >
        Product Comments
      </DialogTitle>

      <DialogContent>
        <ul>
          {productWithComments.map((product) => (
            <li>{product.comment.description}</li>
          ))}
        </ul>
      </DialogContent>

      <DialogActions>
        <Button
          type="button"
          onClick={() => {
            setOpenComments(false);
          }}
        >
          X
        </Button>
      </DialogActions>
    </Dialog>
  );
};
