import { Routes, Route, Link } from "react-router-dom";
import Cart from "./components/cart/cart";
import CheckoutPage from "./components/CheckoutPage";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import ReagisterForm from "./components/ReagisterForm";
// import Cart from "./components/cart/cart";
import MainPage from "./components/shop/MainPage";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      {/* <nav>
        <ul>
          <Link to={"/"}>main</Link>
          <Link to={"cart"}>cart</Link>
        </ul>
      </nav> */}
      <Routes>
        <Route path="cart" element={<Cart />} />
        {/* <Route path="/" element={<MainPage />} /> */}
        <Route path="/" element={<Home />}></Route>
        <Route path="payment" element={<CheckoutPage />} />
        <Route path="login" element={<Login />}>
          <Route index element={<LoginForm />} />
          <Route path="logForm" element={<LoginForm />} />
          <Route path="regForm" element={<ReagisterForm />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
