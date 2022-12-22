import { createAsyncThunk } from "@reduxjs/toolkit";
import RequestClass from "./RequestClass";

export const getProductsData = createAsyncThunk(
  `getProductsData/pagination`,
  async ({ page, limit, search, showAll }, { rejectWithValue }) => {
    try {
      const response = await RequestClass.getProducts({
        page,
        limit,
        search,
        showAll,
      });

      console.log(response, "getProductsData response data ");
      return response;
    } catch (error) {
      console.log(error, "error createAsyncThunk getProductsData");
      rejectWithValue(error);
    }
  }
);
