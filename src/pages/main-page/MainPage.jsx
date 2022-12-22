import React, { useState } from "react";
import ProductData from "../../components/ProductCard/ProductCard";
import UseGetProduct from "../../custom-hooks/UseGetProduct";
import { useDispatch, useSelector } from "react-redux";
import "./MainPage.scss";
import { Pagination } from "@mui/material";
import { setPage } from "./MainPageSlice";
import { ShoppingCart, Delete } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ModalService from "../../service/ModalService";
import ProductPagination from "../../components/product-pagination/ProductPagination";
import CartContent from "../../components/cart-content/CartContent";

const MainPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.mainpage.currentPage);
  const size = useSelector((state) => state.mainpage.limit);
  const isLoading = useSelector((state) => state.mainpage.isLoading);
  const maxPage = useSelector((state) => state.mainpage.maxPage);
  const cartCount = useSelector((state) => state.mainpage.cartCount);

  const [searchQUery, setSearchQUery] = useState(``);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const [products] = UseGetProduct({
    page: currentPage,
    limit: size,
    search: searchQUery,
  });
  const handlePageChange = (e, page) => {
    dispatch(setPage(page));
  };
  function componentFunction(Component) {
    return (props) => <Component {...props} />;
  }
  const ModalCart = componentFunction(ModalService);

  return (
    <div className="container">
      <ModalCart
        isModalOpen={isCartModalOpen}
        closeModal={() => {
          setIsCartModalOpen(false);
        }}
        modalTitle={"Cart"}
      >
        <CartContent></CartContent>
      </ModalCart>
      <div className="mainpage-header">
        <h1>Products</h1>

        <IconButton
          onClick={() => {
            setIsCartModalOpen(true);
          }}
          aria-label="cart"
        >
          <Badge color="success" badgeContent={cartCount}>
            <ShoppingCart />
          </Badge>
        </IconButton>
      </div>
      <ProductPagination
        products={products}
        isLoading={isLoading}
        maxPage={maxPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default MainPage;
