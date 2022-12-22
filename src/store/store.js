import { configureStore } from "@reduxjs/toolkit";
import MainPageSlice from "../pages/main-page/MainPageSlice";
import AdminPageSlice from "../pages/admin-page/AdminPageSlice";
export const store = configureStore({
  reducer: {
    mainpage: MainPageSlice,
    adminpage: AdminPageSlice,
  },
});
