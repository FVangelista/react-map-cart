import { useContext, createContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

import cartItems from "../mock/data.js";
import { getTotals } from "../utils/funcs";

import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }) => {
  const [state, dispath] = useReducer(reducer, initialState);
  const { totalAmount, totalPrice } = getTotals(state.cart);

  const clearCart = () => {
    dispath({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispath({ type: REMOVE, payload: { id } });
  };

  const increaseItem = (id) => {
    dispath({ type: INCREASE, payload: { id } });
  };

  const decreaseItem = (id) => {
    dispath({ type: DECREASE, payload: { id } });
  };

  const fetchData = async () => {
    dispath({ type: LOADING });
    const res = await fetch(import.meta.env.VITE_API);
    const data = await res.json();
    dispath({ type: DISPLAY_ITEMS, payload: { data } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
        totalAmount,
        totalPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
