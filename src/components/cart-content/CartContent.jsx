import React from "react";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import { Delete } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { removeAnItemFromCart } from "../../pages/main-page/MainPageSlice";

const CartContent = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.mainpage.cart);
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.count,
    0
  );
  return (
    <div className="cart-content">
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
                  <p className="cart-price">$ {item.price}</p>

                  <p className="cart-price">$ {item.price * item.count}</p>
                </div>
              </div>
              <div className="cart-action">
                <p>{item.count}</p>
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
          <Button variant="contained">Order</Button>
        </>
      ) : (
        <h1>Cart Empty</h1>
      )}
    </div>
  );
};

export default CartContent;
