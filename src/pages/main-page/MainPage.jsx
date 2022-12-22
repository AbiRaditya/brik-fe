import React, { useState } from "react";
import UseGetProduct from "../../custom-hooks/UseGetProduct";
import { useDispatch, useSelector } from "react-redux";
import "./MainPage.scss";
import { setPage, setSnackBar, setIsCartModalOpen } from "./MainPageSlice";
import { ShoppingCart } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ModalService from "../../service/ModalService";
import ProductPagination from "../../components/product-pagination/ProductPagination";
import CartContent from "../../components/cart-content/CartContent";
import Snackbar from "@mui/material/Snackbar";

const MainPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.mainpage.currentPage);
  const size = useSelector((state) => state.mainpage.limit);
  const isLoading = useSelector((state) => state.mainpage.isLoading);
  const maxPage = useSelector((state) => state.mainpage.maxPage);
  const cartCount = useSelector((state) => state.mainpage.cartCount);
  const isSnackBarOpen = useSelector((state) => state.mainpage.isSnackBarOpen);
  const snackBarMessage = useSelector(
    (state) => state.mainpage.snackBarMessage
  );
  const isCartModalOpen = useSelector(
    (state) => state.mainpage.isCartModalOpen
  );

  const [searchQUery, setSearchQUery] = useState(``);
  // const [isCartModalOpen, setIsCartModalOpen] = useState(false);

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
  const handleSnackClose = () => {
    dispatch(setSnackBar(false));
  };
  const handleSnackOpen = () => {
    dispatch(setSnackBar(true));
  };
  const handleClose = () => {
    dispatch(setIsCartModalOpen(false));
  };
  const handleOpen = () => {
    dispatch(setIsCartModalOpen(true));
  };

  return (
    <div className="container">
      <Snackbar
        open={isSnackBarOpen}
        autoHideDuration={4000}
        onClose={handleSnackClose}
        message={snackBarMessage}
      />
      <ModalCart
        isModalOpen={isCartModalOpen}
        closeModal={handleClose}
        modalTitle={"Cart"}
      >
        <CartContent></CartContent>
      </ModalCart>
      <div className="mainpage-header">
        <h1>Products</h1>

        <IconButton onClick={handleOpen} aria-label="cart">
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
