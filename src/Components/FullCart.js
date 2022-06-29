import React, { createContext, useEffect, useReducer } from "react";
import "./Cart.css";
import { products } from "./Data";
import { reducer } from "./Reducer";
import ContextCart from "./ContextCart";

export const AddCartContext = createContext();
const initialstate = {
  items: products,
  totalAmount: 0,
  totalItems: 0,
};

const FullCart = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      playload: id,
    });
  };
  const ClearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
      playload: "",
    });
  };

  const pluscard = (id) => {
    return dispatch({
      type: "PLUS_BUTTON",
      playload: id,
    });
  };

  const minuscard = (id) => {
    return dispatch({
      type: "MINUS_BUTTON",
      playload: id,
    });
  };

  useEffect(() => {
    dispatch({
      type: "GET_TOTAL",
    });
    console.log("Work done");
  }, [state.items]);

  return (
    <>
      <AddCartContext.Provider
        value={{ ...state, removeItem, ClearCart, pluscard, minuscard }}
      >
        <ContextCart />
      </AddCartContext.Provider>
    </>
  );
};

export default FullCart;
