import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Dialog, DialogTitle, DialogContent, DialogActions,
} from '@material-ui/core';
import './ModalComments.scss';

export const ModalComments = ({ isOpen, setOpenComments, comments }) => (
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
        {comments.map((comment) => (
          <li className="comments">
            <p>{`${comment.description} - ${comment.date}`}</p>
          </li>
        ))}

      </ul>
    </DialogContent>

    <DialogActions>
      <Button
        color="primary"
      >
        Add Comments
      </Button>
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

ModalComments.propTypes = PropTypes.shape({
  isOpen: PropTypes.bool.isRequired,
  setOpenComments: PropTypes.bool.isRequired,
  comments: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    productId: PropTypes.string.isRequired,
  }).isRequired,
}).isRequired;
