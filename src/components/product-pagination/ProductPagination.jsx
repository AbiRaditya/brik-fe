import React from "react";
import { Pagination } from "@mui/material";
import ProductData from "../ProductCard/ProductCard";

const ProductPagination = ({
  products,
  isLoading,
  maxPage,
  handlePageChange,
}) => {
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
              id={product.id}
              price={product.price}
              name={product.name}
              stock={product.stock}
              description={product.description}
              image_url={product.image_url}
              key={product.id}
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
