import React from "react";
import { Pagination } from "@mui/material";
import ProductData from "../ProductCard/ProductCard";
import { addItemsTocart } from "../../pages/main-page/MainPageSlice";
import { useDispatch } from "react-redux";

const ProductPagination = ({
  isAdmin,
  products,
  isLoading,
  maxPage,
  handlePageChange,
  handleEditModal,
  handleDialog,
}) => {
  const dispatch = useDispatch();
  function addItem(product) {
    dispatch(addItemsTocart(product));
  }
  return (
    <>
      <Pagination count={maxPage} onChange={handlePageChange} />
      <div className="card-container">
        {isLoading ? (
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : products.length ? (
          products.map((product) => (
            <ProductData
              isAdmin={isAdmin}
              id={product.id}
              price={product.price}
              name={product.name}
              stock={product.stock}
              description={product.description}
              image_url={product.image_url}
              key={product.id}
              handleEditModal={handleEditModal}
              addItem={addItem}
              handleDelete={handleDialog}
            />
          ))
        ) : (
          <div className="empty-data">No Products</div>
        )}
      </div>
    </>
  );
};

export default ProductPagination;
