import React, { useState } from "react";
import "./ProductData.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import { Edit, Delete } from "@mui/icons-material";

const ProductData = ({
  handleEditModal,
  handleDelete,
  isAdmin,
  id,
  price,
  name,
  stock,
  description,
  image_url,
  addItem = () => {},
}) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image_url} alt={name} className="product-image" />
        <p className="product-price">{price ? `$ ${price}` : null}</p>
        {isAdmin ? (
          <div className="edit-product-button">
            <IconButton
              aria-label="edit product"
              onClick={() => {
                handleEditModal({
                  id,
                  price,
                  name,
                  stock,
                  description,
                  image_url,
                });
              }}
            >
              <Edit></Edit>
            </IconButton>
            <IconButton
              onClick={() => {
                handleDelete(id);
              }}
            >
              <Delete></Delete>
            </IconButton>
          </div>
        ) : null}
      </div>
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <div className="stock-cart">
          {!isAdmin ? (
            stock ? (
              <>
                <IconButton
                  aria-label="add product to cart"
                  onClick={() => {
                    addItem({ id, price, name, stock, description, image_url });
                  }}
                >
                  <AddShoppingCartIcon></AddShoppingCartIcon>
                </IconButton>
                <p className="product-stock">{stock} in stock</p>
              </>
            ) : (
              ""
            )
          ) : (
            <p className="product-stock">{stock} in stock</p>
          )}
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
