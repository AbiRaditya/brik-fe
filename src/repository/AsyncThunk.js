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

export const postCreateOrder = createAsyncThunk(
  `postCreateOrder/post`,
  async ({ cart, customerData }, { rejectWithValue }) => {
    try {
      const products = cart.map((product) => {
        return {
          id: +product.id,
          stock: +product.count,
        };
      });
      const payload = {
        customerData,
        products,
      };
      const response = await RequestClass.postOrder(payload);
      return response;
    } catch (error) {
      console.log(error, "error createAsyncThunk postCreateOrder");
      rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  `deleteProduct/del`,
  async (id, { rejectWithValue }) => {
    try {
      const response = await RequestClass.deleteProduct(id);

      return response;
    } catch (error) {
      console.log(error, "error createAsyncThunk deleteProduct");
      rejectWithValue(error);
    }
  }
);
