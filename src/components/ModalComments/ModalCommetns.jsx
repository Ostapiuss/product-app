/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField,
} from '@material-ui/core';
import './ModalComments.scss';

export const ModalComments = React.memo(
  ({
    isOpen, setOpenComments, comments, onAddComment, productId,
  }) => {
    const [isAddComment, isSetAddComment] = useState(false);

    const [newComment, setNewComment] = useState({ description: '', productId });
    const [visibleComments, setVisibleComments] = useState(comments);

    const inputCommentHandler = (event) => {
      const { value, name } = event.target;

      setNewComment({ ...newComment, [name]: value });
    };

    useEffect(() => {
      setVisibleComments(comments);
    });

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
            {visibleComments.map((comment) => (
              <li className="comments">
                <p>{`${comment.description} - ${comment.date}`}</p>
              </li>
            ))}

          </ul>
        </DialogContent>

        <DialogActions>
          <Button
            color="primary"
            onClick={() => {
              isSetAddComment(true);
            }}
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
          <Dialog
            className="add-new-comments"
            open={isAddComment}
          >
            <DialogTitle>Add new comment</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="modal-name"
                label="Description"
                type="text"
                name="description"
                value={newComment.description}
                onChange={inputCommentHandler}
                fullWidth
              />
            </DialogContent>

            <DialogActions>
              <Button
                type="submit"
                onClick={() => {
                  onAddComment(newComment);
                  isSetAddComment(false);
                }}
              >
                ADD
              </Button>
              <Button
                color="secondary"
                onClick={() => {
                  isSetAddComment(false);
                }}
              >
                X
              </Button>
            </DialogActions>
          </Dialog>
        </DialogActions>
      </Dialog>
    );
  },
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
