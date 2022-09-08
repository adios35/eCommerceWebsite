import Hero from "../assets/pngegg.png";
import { Outlet } from "react-router-dom";
const Login = () => {
  return (
    <div className="Login flex mt-6 ">
      <div className="col1 flex justify-around p-10 h-[95vh] w-[60%]  md:w-[70%] xl:w-[75%]">
        <div className="title  w-[40%] flex flex-col justify-center">
          <h1 className="text-center text-4xl xl:text-5xl">Desain Kuat</h1>
          <h2 className="text-center text-4xl xl:text-5xl">Dan Tahan Lama</h2>
        </div>
        <img
          className="-ml-14 pt-10  w-[60%] bg-npm start "
          src={Hero}
          alt="hero"
        />
      </div>
      <div className="col2 flex p-5  flex-col npm justify-center w-[40%] md:w-[30%] bg-blue-500 xl:w-[25%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Login;
