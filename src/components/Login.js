import Hero from "../assets/pngegg.png";
import { Outlet } from "react-router-dom";
const Login = () => {
  return (
    <div className="Login flex  h-screen ">
      <div className="col1 hidden h-[95vh] w-[60%] justify-around p-10 sm:flex  md:w-[70%] xl:w-[75%]">
        {/* <div className="title  w-[40%] flex flex-col justify-center">
          <h1 className="text-center text-4xl xl:text-5xl">Desain Kuat</h1>
          <h2 className="text-center text-4xl xl:text-5xl">Dan Tahan Lama</h2>
        </div> */}
        <img
          className="bg-npm start -ml-14 h-full max-w-[600px] bg-cover pt-10 "
          src={Hero}
          alt="hero"
        />
      </div>
      <div className="col2 npm flex max-h-screen w-full flex-col justify-center bg-blue-500 p-16 sm:h-screen sm:w-[40%] sm:p-5 md:w-[30%] xl:w-[25%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Login;
