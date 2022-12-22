import React, { useState } from "react";
import ProductData from "../ProductCard/ProductCard";
import TextField from "@mui/material/TextField";
import ProductForm from "../product-form/ProductForm";

const EditContent = ({ productData }) => {
  return (
    <div className="edit-content-container">
      <ProductForm productData={productData}></ProductForm>
    </div>
  );
};

export default EditContent;
