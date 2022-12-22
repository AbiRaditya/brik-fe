import { createSlice } from "@reduxjs/toolkit";
import { deleteProduct } from "../../repository/AsyncThunk";

const initialState = {
  isLoadingDelete: false,
  isEditModalOpen: false,
  isDialogOpen: false,
  isSnackBarOpen: false,
  snackBarMessage: ``,
};

export const AdminPageSlice = createSlice({
  name: "adminpage",
  initialState,
  reducers: {
    setModal: (state, { payload }) => {
      state.isEditModalOpen = payload;
    },
    setDialog: (state, { payload }) => {
      state.isDialogOpen = payload;
    },
    setSnackBar: (state, { payload }) => {
      state.isSnackBarOpen = payload;
    },
  },
  extraReducers: {
    [deleteProduct.pending]: (state, { payload }) => {
      state.isLoadingDelete = true;
    },
    [deleteProduct.fulfilled]: (state, { payload }) => {
      state.isLoadingDelete = false;
      state.isDialogOpen = false;

      state.isSnackBarOpen = true;
      state.snackBarMessage = `Product deleted successfully`;
    },
    [deleteProduct.rejected]: (state, { payload }) => {
      state.isLoadingDelete = false;
    },
  },
});

export const { setModal, setDialog, setSnackBar } = AdminPageSlice.actions;
export default AdminPageSlice.reducer;
