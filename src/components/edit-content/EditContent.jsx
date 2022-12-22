import React, { useState } from "react";
import ProductData from "../ProductCard/ProductCard";
import TextField from "@mui/material/TextField";
import ProductForm from "../product-form/ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../../repository/AsyncThunk";

const EditContent = ({ productData }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.adminpage.isLoadingPostPut);
  const handleOnSubmit = (payload) => {
    console.log("====================================");
    console.log(payload);
    console.log(
      "====================================handleOnSubmit EditContent"
    );
    const formData = new FormData();
    formData.append(`id`, payload.id);
    formData.append(`name`, payload.name);
    formData.append(`image`, payload.image);
    formData.append(`description`, payload.description);
    formData.append(`price`, payload.price);
    formData.append(`stock`, payload.stock);
    dispatch(editProduct(formData));
  };
  return (
    <div className="edit-content-container">
      <ProductForm
        productData={productData}
        handleOnSubmit={handleOnSubmit}
        isLoading={isLoading}
      ></ProductForm>
    </div>
  );
};

export default EditContent;
