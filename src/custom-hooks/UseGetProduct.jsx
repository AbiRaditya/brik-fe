import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../repository/AsyncThunk";
const UseGetProduct = ({ page, limit, search, showAll }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.mainpage.products);
  useEffect(() => {
    dispatch(getProductsData({ page, limit, search, showAll }));
  }, [page, limit, search]);
  return [products];
};
export default UseGetProduct;
