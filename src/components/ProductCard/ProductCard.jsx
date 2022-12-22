import React, { useState } from "react";
import "./ProductData.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";

import { addItemsTocart } from "../../pages/main-page/MainPageSlice";
import { useSelector, useDispatch } from "react-redux";

const ProductData = ({ id, price, name, stock, description, image_url }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.mainpage.cart);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  function addItem(product) {
    console.log(product, "product");
    dispatch(addItemsTocart(product));
  }

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image_url} alt={name} className="product-image" />
        <p className="product-price">$ {price}</p>
      </div>
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <div className="stock-cart">
          {stock ? (
            <IconButton
              aria-label="add product to cart"
              onClick={() => {
                addItem({ id, price, name, stock, description, image_url });
              }}
            >
              <AddShoppingCartIcon></AddShoppingCartIcon>
            </IconButton>
          ) : (
            ""
          )}
          <p className="product-stock">{stock} in stock</p>
        </div>
      </div>
      <a
        className="toggle-description-link"
        onClick={(e) => {
          e.preventDefault();
          setIsDescriptionOpen(!isDescriptionOpen);
        }}
      >
        {isDescriptionOpen ? "Hide" : "Show"} Description
      </a>
      {isDescriptionOpen && (
        <div className="product-description">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductData;
