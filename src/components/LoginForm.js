import { Link } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";
// import { BsFacebook } from "react-icons/bs";

const LoginForm = () => {
  return (
    <>
      <form className="mb-2 flex flex-col gap-5 text-gray-600" action="">
        <h1 className="text-2xl text-white">Sign Up</h1>
        <input type="text" placeholder="Email/Username..." />
        <input type="password" placeholder="Password..." />
        <button className="bg-gray-700 px-3 py-2 text-white duration-100 hover:opacity-90">
          submit
        </button>
      </form>
      <p className="text-white">
        dont have acount?{" "}
        <Link className="text-blue-300 underline" to={"regForm"}>
          Register
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
