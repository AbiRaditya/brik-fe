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
      return rejectWithValue(error.response.data);
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
      return rejectWithValue(error.response.data);
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
      return rejectWithValue(error.response.data);
    }
  }
);

export const postProduct = createAsyncThunk(
  `postProduct/post`,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await RequestClass.createProduct(payload);
      return response;
    } catch (error) {
      console.log(error, "error createAsyncThunk postProduct");
      return rejectWithValue(error.response.data);
    }
  }
);
export const editProduct = createAsyncThunk(
  `editProduct/put`,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await RequestClass.editProduct(payload);
      return response;
    } catch (error) {
      console.log(error, "error createAsyncThunk editProduct");
      return rejectWithValue(error.response.data);
    }
  }
);
