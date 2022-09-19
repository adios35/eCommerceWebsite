import { useReducer } from "react";
import { createContext, useContext } from "react";

export const ACTION = {
  ADD: "ADD_TO_CART",
  DEL: "DELETE_FROM",
};

const cartContext = createContext();
const cartDispatch = createContext();

const reducer = (state, action) => {
  //membuat reducer
  const { type, payload } = action;
  switch (type) {
    case ACTION.ADD:
      const sameId = state.find((e) => e.id === payload.item.id);
      if (sameId === payload.item) return state;
      return [...state, payload.item];
    case ACTION.DEL:
      return state.filter((e) => e.id !== payload.item.id);
    default:
      throw new Error(`unknow action ${type} is not found `);
  }
};

export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  console.log(state);
  return (
    <cartDispatch.Provider value={dispatch}>
      <cartContext.Provider value={state}>{children}</cartContext.Provider>
    </cartDispatch.Provider>
  );
};
export const useCart = () => useContext(cartContext);
export const useDispatch = () => useContext(cartDispatch);
