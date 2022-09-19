import { useContext } from "react";
import { useDispatch } from "../cart/cartContext";
import { ACTION } from "../cart/cartContext";
import { useCart } from "./cartContext";

const Cart = () => {
  const cartItems = useCart();
  const dispatch = useDispatch();
  function remove(item) {
    dispatch({ type: ACTION.DEL, payload: { item } });
  }
  console.log(cartItems);
  return (
    <div className="wrapper mx-auto max-w-md p-3 pt-16">
      <div className="product">
        {cartItems ? (
          <h1>your total items : {cartItems.length}</h1>
        ) : (
          <h1>your cart is zero</h1>
        )}
        {cartItems.map((item, idx) => {
          return (
            <div key={idx} className="item flex justify-between p-3 shadow-md">
              <span>{item.name}</span>
              <button onClick={() => remove(item)} className="bg-red-400 p-2">
                -
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
