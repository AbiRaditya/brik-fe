import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";

const ConfirmDialog = ({
  isLoading,
  open,
  handleClose,
  handleDelete = () => {},
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Delete Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>
          The product will be soft deleted, please confirm your action
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <LoadingButton loading={isLoading} onClick={handleClose}>
          Cancel
        </LoadingButton>
        <LoadingButton loading={isLoading} onClick={handleDelete}>
          Confirm
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
