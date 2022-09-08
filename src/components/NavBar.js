import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {BiLogIn} from 'react-icons/bi'

const NavBar = () => {
  return (
    <div className="NavBar bg-white gap-5 flex px-3 py-3 fixed w-full top-0 shadow-md">
      <div className="logo">
        <Link to="/">xShoes</Link>
      </div>
      <ul className="nav-items flex gap-3">
        <li>About</li>
        <li>Project</li>
        <li>Discount</li>
      </ul>
      <div className="shop text-3xl items-center ml-auto flex gap-3">
      <div className="cart">
          <Link className="" to="/">
            <AiOutlineShoppingCart />
          </Link>
        </div>
        <div className="login">
          <Link to="login"><BiLogIn/></Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
