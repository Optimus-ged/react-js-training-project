import logimIng from "@/assets/login.jpg";
import { IoLogoFacebook } from "react-icons/io5";
import { BsGoogle } from "react-icons/bs";

const LoginTwo = () => {
  return (
    <div className="relative flex items-center h-screen w-full bg-zinc-900/90">
      {/* BACKGROUND IMAGE */}
      <img
        className=" h-full w-full  mix-blend-overlay"
        src={logimIng}
        alt="/"
      />

      {/* LOGIN FORM */}
      <div className="absolute w-full px-2 sm:px-0">
        <form className="w-full max-w-[400px] mx-auto  bg-white p-8">
          <h2 className="py-8 text-center text-2xl font-bold">BRAND.</h2>
          <div className="mb-8 flex justify-between">
            <button className="relative flex w-full max-w-[150px] items-center justify-center border bg-white py-2 shadow hover:shadow-lg">
              <BsGoogle className="mr-2" />
              <p>Google</p>
            </button>
            <button className="relative flex w-full max-w-[150px] items-center justify-center border bg-white py-2 shadow hover:shadow-lg">
              <IoLogoFacebook className="mr-2" />
              <p>Facebook</p>
            </button>
          </div>
          <div className="flex flex-col">
            <label>Username</label>
            <input className="border bg-gray-100 px-4 py-2" type="text" />
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input className="border bg-gray-100 px-4 py-2" type="password" />
          </div>
          <button className="mt-8 h-[50px]  w-full bg-blue-800 text-center text-white hover:bg-blue-700">
            Signin
          </button>
          <p className="mt-2 flex items-center">
            <input className="mr-2" type="checkbox" />
            Remember me
          </p>
          <p className="mt-8 text-center">Not a member? Signup</p>
        </form>
      </div>
    </div>
  );
};

export default LoginTwo;
