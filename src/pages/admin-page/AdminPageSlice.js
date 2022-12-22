import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditModalOpen: false,
  isDialogOpen: false,
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
  },
});

export const { setModal, setDialog } = AdminPageSlice.actions;
export default AdminPageSlice.reducer;
