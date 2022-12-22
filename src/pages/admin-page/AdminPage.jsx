import React, { useState, useRef } from "react";
import UseGetProduct from "../../custom-hooks/UseGetProduct";
import { useDispatch, useSelector } from "react-redux";
import ProductPagination from "../../components/product-pagination/ProductPagination";
import ModalService from "../../service/ModalService";
import { setModal, setDialog, setSnackBar } from "./AdminPageSlice";
import EditContent from "../../components/edit-content/EditContent";
import ConfirmDialog from "../../components/confirmation-dialog/ConfirmDialog";

import { deleteProduct } from "../../repository/AsyncThunk";
import Snackbar from "@mui/material/Snackbar";

const AdminPage = () => {
  const dispatch = useDispatch();
  const size = useSelector((state) => state.mainpage.limit);
  const isLoading = useSelector((state) => state.mainpage.isLoading);
  const isLoadingDelete = useSelector(
    (state) => state.adminpage.isLoadingDelete
  );
  const maxPage = useSelector((state) => state.mainpage.maxPage);
  const isModalOpen = useSelector((state) => state.adminpage.isEditModalOpen);
  const isDialogOpen = useSelector((state) => state.adminpage.isDialogOpen);
  const snackBarMessage = useSelector(
    (state) => state.adminpage.snackBarMessage
  );
  const isSnackBarOpen = useSelector((state) => state.adminpage.isSnackBarOpen);

  const [page, setPage] = useState(1);

  const handlePageChange = (e, page) => {
    setPage(page);
  };
  const handleSnackClose = () => {
    dispatch(setSnackBar(false));
  };
  const [products] = UseGetProduct({
    page: page,
    limit: size,
    showAll: true,
  });
  const productData = useRef(null);
  const deleteId = useRef(null);
  function componentFunction(Component) {
    return (props) => <Component {...props} />;
  }
  const ModalContent = componentFunction(EditContent);
  const ModalEdit = componentFunction(ModalService);
  const handleClose = () => {
    dispatch(setModal(false));
  };
  const handleOpenModal = (product) => {
    productData.current = product;
    dispatch(setModal(true));
  };
  const handleCloseDialog = () => {
    dispatch(setDialog(false));
  };
  const handleOpenDialog = (id) => {
    deleteId.current = id;

    dispatch(setDialog(true));
  };
  const handleDelete = (product) => {
    // console.log(product, "product");
    const productId = deleteId.current;
    if (!productId) {
      return;
    }

    dispatch(deleteProduct(productId));
    deleteId.current = null;
  };
  return (
    <div className="container">
      <Snackbar
        open={isSnackBarOpen}
        autoHideDuration={4000}
        onClose={handleSnackClose}
        message={snackBarMessage}
      />
      <ConfirmDialog
        open={isDialogOpen}
        handleClose={handleCloseDialog}
        isLoading={isLoadingDelete}
        handleDelete={handleDelete}
      />
      <ModalEdit
        isModalOpen={isModalOpen}
        closeModal={handleClose}
        modalTitle={"Edit product"}
      >
        <ModalContent productData={productData.current}></ModalContent>
      </ModalEdit>
      <div className="mainpage-header">
        <h1>Admin</h1>
      </div>
      <ProductPagination
        isAdmin={true}
        products={products}
        isLoading={isLoading}
        maxPage={maxPage}
        handlePageChange={handlePageChange}
        handleEditModal={handleOpenModal}
        handleDialog={handleOpenDialog}
      />
    </div>
  );
};

export default AdminPage;
