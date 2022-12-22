import { configureStore } from "@reduxjs/toolkit";
import MainPageSlice from "../pages/main-page/MainPageSlice";
export const store = configureStore({
  reducer: {
    mainpage: MainPageSlice,
  },
});
