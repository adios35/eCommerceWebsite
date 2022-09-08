import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
const ReagisterForm = () => {
  return (
    <form className="flex gap-5 flex-col" action="">
      <h1 className="text-2xl text-gray-700 ">Sign Up</h1>
      <div className="google cursor-pointer hover:bg-gray-50 shadow-sm p-2 items-center gap-5 flex">
        <FcGoogle />
        Continue with Google
      </div>
      <div className="facebook cursor-pointer hover:opacity-90 shadow-sm p-2 items-center gap-5 text-white flex">
        <BsFacebook />
        Continue with facebook
      </div>
      <input type="text" placeholder="Username..." />
      <input type="password" placeholder="Password..." />
      <input type="password" placeholder="Type password again..." />
      <button className="px-3 py-2 bg-gray-700 hover:opacity-90 text-white duration-100">
        submit
      </button>
    </form>
  );
};

export default ReagisterForm;
