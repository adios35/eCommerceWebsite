import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const ReagisterForm = () => {
  const navigate = useNavigate();
  return (
    <form className="flex flex-col gap-5 pt-10 text-gray-600" action="">
      <h1 className="text-2xl text-white ">Sign Up</h1>
      <div className="google flex cursor-pointer  items-center gap-5 bg-gray-50 p-2 shadow-sm hover:opacity-90 ">
        <FcGoogle />
        Continue with Google
      </div>
      <div className="facebook flex cursor-pointer items-center gap-5 bg-white p-2 text-blue-500 shadow-sm hover:opacity-90">
        <BsFacebook />
        Continue with facebook
      </div>
      <p className="text-center text-white">-Or-</p>
      <input type="text" placeholder="Username..." />
      <input type="password" placeholder="Password..." />
      <input type="password" placeholder="Type password again..." />
      <button
        onClick={() => navigate("/login", { replace: true })}
        className="bg-gray-700 px-3 py-2 text-white duration-100 hover:opacity-90"
      >
        submit
      </button>
    </form>
  );
};

export default ReagisterForm;
