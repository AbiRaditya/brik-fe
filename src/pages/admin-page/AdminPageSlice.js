import { createSlice } from "@reduxjs/toolkit";
import {
  deleteProduct,
  postProduct,
  editProduct,
} from "../../repository/AsyncThunk";

const initialState = {
  isLoadingDelete: false,
  isEditModalOpen: false,
  isAddModalOpen: false,
  isDialogOpen: false,
  isSnackBarOpen: false,
  snackBarMessage: ``,
  isLoadingPostPut: false,
};

export const AdminPageSlice = createSlice({
  name: "adminpage",
  initialState,
  reducers: {
    setModal: (state, { payload }) => {
      state.isEditModalOpen = payload;
    },
    setAddModal: (state, { payload }) => {
      state.isAddModalOpen = payload;
    },
    setDialog: (state, { payload }) => {
      state.isDialogOpen = payload;
    },
    setSnackBar: (state, { payload }) => {
      state.isSnackBarOpen = payload;
    },
  },
  extraReducers: {
    [deleteProduct.pending]: (state) => {
      state.isLoadingDelete = true;
    },
    [deleteProduct.fulfilled]: (state) => {
      state.isLoadingDelete = false;
      state.isDialogOpen = false;

      state.snackBarMessage = `Product deleted successfully`;
      state.isSnackBarOpen = true;
    },
    [deleteProduct.rejected]: (state) => {
      state.isLoadingDelete = false;
    },
    [postProduct.pending]: (state) => {
      state.isLoadingPostPut = true;
    },
    [postProduct.fulfilled]: (state) => {
      state.isLoadingPostPut = false;
      state.isAddModalOpen = false;

      state.snackBarMessage = `Product created successfully`;
      state.isSnackBarOpen = true;
    },
    [postProduct.rejected]: (state, { payload }) => {
      console.log("====================================");
      console.log(payload);
      console.log("====================================");
      state.snackBarMessage = `code ${payload.statusCode} ${payload.message[0]}`;
      state.isSnackBarOpen = true;

      state.isLoadingPostPut = false;
    },
    [editProduct.pending]: (state) => {
      state.isLoadingPostPut = true;
    },
    [editProduct.fulfilled]: (state) => {
      state.isLoadingPostPut = false;
      state.isEditModalOpen = false;
      state.snackBarMessage = `Product updated successfully`;
      state.isSnackBarOpen = true;
    },
    [editProduct.rejected]: (state) => {
      state.isLoadingPostPut = false;
    },
  },
});

export const { setModal, setDialog, setSnackBar, setAddModal } =
  AdminPageSlice.actions;
export default AdminPageSlice.reducer;
