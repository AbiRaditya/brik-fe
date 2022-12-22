import React, { useState, useRef } from "react";
import UseGetProduct from "../../custom-hooks/UseGetProduct";
import { useDispatch, useSelector } from "react-redux";
import ProductPagination from "../../components/product-pagination/ProductPagination";
import ModalService from "../../service/ModalService";
import {
  setModal,
  setDialog,
  setSnackBar,
  setAddModal,
} from "./AdminPageSlice";
import EditContent from "../../components/edit-content/EditContent";
import ConfirmDialog from "../../components/confirmation-dialog/ConfirmDialog";
import IconButton from "@mui/material/IconButton";
import { AddBox } from "@mui/icons-material";
import { deleteProduct } from "../../repository/AsyncThunk";
import Snackbar from "@mui/material/Snackbar";
import AddContent from "../../components/add-content/AddContent";

const AdminPage = () => {
  const dispatch = useDispatch();
  const size = useSelector((state) => state.mainpage.limit);
  const isLoading = useSelector((state) => state.mainpage.isLoading);
  const isLoadingDelete = useSelector(
    (state) => state.adminpage.isLoadingDelete
  );
  const maxPage = useSelector((state) => state.mainpage.maxPage);
  const isModalOpen = useSelector((state) => state.adminpage.isEditModalOpen);
  const isAddModalOpen = useSelector((state) => state.adminpage.isAddModalOpen);
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
  const ModalContentEdit = componentFunction(EditContent);
  const ModalProduct = componentFunction(ModalService);
  const handleClose = () => {
    dispatch(setModal(false));
  };
  const handleCloseAddModal = () => {
    dispatch(setAddModal(false));
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
      <ModalProduct
        isModalOpen={isModalOpen}
        closeModal={handleClose}
        modalTitle={"Edit product"}
      >
        <ModalContentEdit productData={productData.current}></ModalContentEdit>
      </ModalProduct>
      <ModalProduct
        isModalOpen={isAddModalOpen}
        closeModal={handleCloseAddModal}
        modalTitle={"Add product"}
      >
        <AddContent></AddContent>
      </ModalProduct>
      <div className="mainpage-header">
        <h1>Admin</h1>
        <IconButton
          onClick={() => {
            dispatch(setAddModal(true));
          }}
        >
          <AddBox></AddBox>
        </IconButton>
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
