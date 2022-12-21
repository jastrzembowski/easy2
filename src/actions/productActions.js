import { getAllFoodItems } from "../utils/firebaseFunctions";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../context/productConstants";

export const listProducts = () => async (dispatch) => {
  const productsData = [];

  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });
    await getAllFoodItems().then((data) => {
        productsData.push(data)
        console.log(data)
    })
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: productsData });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.message
          ? error.response.data.message
          : error.message,
    });
  }
};
