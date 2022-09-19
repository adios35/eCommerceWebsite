import { useReducer } from "react";
import data from "../../data/data";
export const ACTION = {
  ADD: "ADD_TO_CART",
  DEl: "DELETE_ITEM",
  UPDATE: "UPDATE_PRICE",
};

export const intialState = {
  total: 0,
  items: [],
};

function shopReducer(items, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTION.ADD:
      return { ...items, total: items.total + 1, items: payload.product };
    case ACTION.DEl:
      return { ...items };
    case ACTION.UPDATE:
      return { ...items, total: payload.total };
    default:
      return new Error();
  }
}
export default shopReducer;
