import React from 'react';

import {
  Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions,
} from '@material-ui/core';

export const ModalAddComment = () => (
  <Dialog
    className="add-new-comments"
  >
    <DialogTitle>Add new comment</DialogTitle>
    <DialogContent>
      <TextField
        autoFocus
        margin="dense"
        id="modal-name"
        label="Name"
        type="text"
        name="name"
        fullWidth
      />
    </DialogContent>

    <DialogActions>
      <Button>
        ADD
      </Button>
    </DialogActions>
  </Dialog>
);
