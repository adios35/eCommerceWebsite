import { BiCheck } from "react-icons/bi";
import { useDispatch } from "../cart/cartContext";
import { useCart } from "../cart/cartContext";
import { ACTION } from "../cart/cartContext";

const Card = ({ item, name }) => {
  const cartItem = useCart();
  const sameId = cartItem.find((e) => e.id === item.id);
  const dispatch = useDispatch();
  function add(e) {
    dispatch({ type: ACTION.ADD, payload: { item } });
  }
  function remove(e) {
    dispatch({ type: ACTION.DEL, payload: { item } });
  }

  return (
    <div className="card group relative max-w-xs cursor-pointer overflow-hidden rounded-2xl border-[2px] p-2 text-white shadow-xl transition-all duration-100">
      <img className="w-full bg-top" src={item.img} alt="img" />
      <div className="desc absolute  bottom-0 right-0 left-0 h-16 bg-black/30 text-center text-white group-hover:h-20">
        <p>{item.name}</p>
        <small>{item.price} $</small>
      </div>
      {sameId !== item ? (
        <button
          onClick={() => add(item)}
          className="absolute top-3 right-3 h-[25px] w-[25px] rounded-lg bg-green-400"
        >
          +
        </button>
      ) : (
        <button
          onClick={() => remove(item)}
          className="absolute top-3 right-3 flex h-[25px] w-[25px] items-center justify-center rounded-lg bg-cyan-600 text-center text-xl"
        >
          <BiCheck />
        </button>
      )}
    </div>
  );
};

export default Card;
