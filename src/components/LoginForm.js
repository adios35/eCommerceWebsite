import { Link } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc'
import { BsFacebook } from "react-icons/bs";

const LoginForm = () => {
  return (<>
    <form className="flex gap-5 flex-col mb-2 text-gray-600" action="">
      <h1 className="text-2xl text-white">Sign Up</h1>
        <div className="google hover:opacity-90 cursor-pointer  bg-gray-50 shadow-sm p-2 items-center gap-5 flex "><FcGoogle/>Continue with Google</div>
        <div className="facebook cursor-pointer hover:opacity-90 shadow-sm p-2 items-center bg-white gap-5 text-blue-500 flex"><BsFacebook/>Continue with facebook</div>
      <input type="text" placeholder="Username..." />
      <input type="password" placeholder="Password..." />
      <button className="px-3 py-2 bg-gray-700 hover:opacity-90 text-white duration-100">
        submit
      </button>
    </form>
    <p className="text-white">dont have acount? <Link className="text-blue-300 underline" to={'regForm'}>Register</Link></p>
    </>
  );
};

export default LoginForm;