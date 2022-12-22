import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import { Delete } from "@mui/icons-material";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import CustomerDialog from "./CustomerDialog";
import { removeAnItemFromCart } from "../../pages/main-page/MainPageSlice";

const CartContent = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.mainpage.cart);
  const isLoading = useSelector((state) => state.mainpage.isOrderLoading);
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.count,
    0
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleClickOpen = () => {
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="cart-content">
      <CustomerDialog
        open={isDialogOpen}
        handleClose={handleClose}
      ></CustomerDialog>
      {cart.length ? (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-product">
              <div className="cart-product-info">
                <img
                  className="cart-product-image"
                  src={item.image_url}
                  alt={item.name}
                />
                <div>
                  <p className="product-name">{item.name}</p>

                  <p className="cart-price">
                    $ {item.price} X {item.count}
                  </p>
                </div>
              </div>
              <div className="cart-action">
                <IconButton
                  onClick={() => {
                    dispatch(removeAnItemFromCart(item));
                  }}
                >
                  <Delete></Delete>
                </IconButton>
              </div>
            </div>
          ))}
          <p>Total Price: $ {totalPrice}</p>
          <LoadingButton
            loading={isLoading}
            onClick={handleClickOpen}
            variant="contained"
          >
            Order
          </LoadingButton>
        </>
      ) : (
        <div className="empty-cart">
          <div>
            <h1>Cart Empty</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContent;
