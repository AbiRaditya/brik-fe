import { createSlice } from "@reduxjs/toolkit";
import { getProductsData } from "../../repository/AsyncThunk";

const initialState = {
  products: [],
  isLoading: false,
  maxPage: 0,
  limit: 10,
  currentPage: 1,
  totalCount: 0,
  cart: [],
  cartCount: 0,
};

export const MainPageSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {
    setProductSize: (state, { payload }) => {
      state.limit = payload;
    },
    setPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    addItemsTocart: (state, { payload }) => {
      let existingProduct = state.cart.find((p) => p.id === payload.id);
      if (existingProduct && existingProduct.count < payload.stock) {
        existingProduct.count++;
      } else if (!existingProduct) {
        state.cart.push({ ...payload, count: 1 });
      }
      state.cartCount = state.cart.reduce((total, p) => total + p.count, 0);
    },
    removeAnItemFromCart: (state, { payload }) => {
      let product = state.cart.find((product) => product.id === payload.id);

      if (product && product.count > 1) {
        product.count--;
      } else if (product) {
        let index = state.cart.findIndex(
          (product) => product.id === payload.id
        );
        if (index !== -1) {
          state.cart.splice(index, 1);
        }
      }
      state.cartCount = state.cart.reduce((total, p) => total + p.count, 0);
    },
    resetCart: (state) => {
      state.cart = [];
      state.cartCount = 0;
    },
  },
  extraReducers: {
    [getProductsData.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductsData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.totalCount = payload.totalCount;
      state.products = payload.data;
      state.maxPage = Math.ceil(+payload.totalCount / state.limit);
    },
    [getProductsData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setProductSize, setPage, addItemsTocart, removeAnItemFromCart } =
  MainPageSlice.actions;
export default MainPageSlice.reducer;
