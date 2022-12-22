import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import { postCreateOrder, getProductsData } from "../../repository/AsyncThunk";
import { useDispatch, useSelector } from "react-redux";

const CustomerDialog = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.mainpage.cart);
  const [customerName, setCustomerName] = useState("");
  const [customerSelect, setCustomerSelect] = useState(``);
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    setCustomerName(event.target.value);
  };

  useEffect(() => {
    if (customerName) {
      setIsError(false);
    }
  }, [customerName]);
  function onSubmit() {
    console.log(customerName, "customerNameRef");
    if (!customerName) {
      setIsError(true);
      return;
    }
    dispatch(postCreateOrder({ cart, customerData: { name: customerName } }));
    handleClose();
    const names = localStorage.getItem(`names`)
      ? localStorage.getItem(`names`).split(",")
      : [];
    names.push(customerName);
    const namesUnique = [...new Set(names)];
    localStorage.setItem(`names`, namesUnique.join(","));
    console.log("====================================");
    console.log(localStorage.getItem(`names`));
    console.log(
      "====================================localStorage.getItem(`names`)"
    );
  }
  const names = localStorage.getItem(`names`).split(",");
  const handleSelect = (e) => {
    const customer = e.target.value;
    setCustomerName(customer);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Customer data</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To order on this website we need your data, please enter your name
          here. We will send your order accoding to your data
        </DialogContentText>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Prev Customer</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={customerSelect}
            label="Prev Customer"
            onChange={handleSelect}
          >
            {names
              ? names.map((name) => <MenuItem value={name}>{name}</MenuItem>)
              : null}
          </Select>
        </FormControl>
        <TextField
          error={isError}
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="email"
          fullWidth
          variant="standard"
          helperText={isError ? "Name must be filled" : ""}
          onChange={handleChange}
          value={customerName}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={onSubmit}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomerDialog;
