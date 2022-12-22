import ProductForm from "../product-form/ProductForm";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProduct } from "../../repository/AsyncThunk";

const AddContent = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.adminpage.isLoadingPostPut);
  const handleOnSubmit = (payload) => {
    console.log("====================================");
    console.log(payload);
    console.log(
      "====================================handleOnSubmit EditContent"
    );
    const formData = new FormData();
    formData.append(`name`, payload.name);
    formData.append(`image`, payload.image);
    formData.append(`description`, payload.description);
    formData.append(`price`, payload.price);
    formData.append(`stock`, payload.stock);
    dispatch(postProduct(formData));
  };
  return (
    <div className="edit-content-container">
      <ProductForm
        handleOnSubmit={handleOnSubmit}
        isLoading={isLoading}
      ></ProductForm>
    </div>
  );
};

export default AddContent;
