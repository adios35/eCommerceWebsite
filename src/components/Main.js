import { useReducer } from "react";
import { intialState } from "./shopReducer";
import shopReducer from "./shopReducer";
import { data } from "autoprefixer";

const Main = () => {
  const [product, dispatch] = useReducer(shopReducer, intialState);
  function addItems(id) {
    console.log("asu");
  }
  return (
    <div className="items">
      {/* {data.map(e=>{
            return .
        })} */}
    </div>
  );
};

export default Main;
