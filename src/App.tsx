import LoginImg from "@/assets/login.jpg";

function App() {
  return (
    <div className="grid h-screen w-full grid-cols-1 sm:grid-cols-2">
      {/* IMAGE */}
      <img
        className="hidden h-full w-full object-cover sm:block"
        src={LoginImg}
        alt="login image"
      />

      {/* LOGIN FORM */}
      <div className="flex h-screen w-full bg-gray-100 ">
        <form className="mx-8 my-auto w-full bg-white  p-8 sm:m-auto  sm:max-w-[400px]">
          <h2 className="py-5 text-center text-3xl font-bold">BRAND.</h2>
          <div className="flex flex-col">
            <label className="text-sm">Username</label>
            <input className="border p-2 " type="text" />
          </div>

          <div className="mt-4 flex flex-col">
            <label className="text-sm">Password</label>
            <input className="border p-2 " type="password" />
          </div>
          <button className="mt-4 w-full bg-indigo-600 py-2 text-center  text-white hover:bg-indigo-500">
            Login
          </button>
          <div className="mt-8 flex items-center justify-between">
            <p className="flex text-sm">
              <input className="mr-2" type="checkbox" />
              Remember me
            </p>
            <p className="text-sm">Create account</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
