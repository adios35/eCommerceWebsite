import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import ReagisterForm from "./components/ReagisterForm";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}>
          <Route index element={<LoginForm />} />
          <Route path="logForm" element={<LoginForm />} />
          <Route path="regForm" element={<ReagisterForm />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
