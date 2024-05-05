import Tree from "@/assets/trees.jpg";

const LoginThree = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="border-gray m-auto grid h-[555px] grid-cols-1 border lg:grid-cols-2">
        <div className="h-[555px] w-full">
          <img className="h-full w-full" src={Tree} alt="" />
        </div>
        <div className="flex flex-col justify-between p-4">
          <form action="">
            <h2 className="mt-8 text-center text-2xl font-bold">BRAND.</h2>
            <div className="mt-8 flex gap-2">
              <input
                className="w-full border px-4 py-2"
                type="text"
                placeholder="Username"
              />
              <input
                className="w-full border px-4 py-2"
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="mt-4 w-full py-2 bg-green-700 text-white hover:bg-green-600">
              Singin
            </button>
            <p className="mt-4 text-center">Forget username or Password?</p>
          </form>
          <p className="text-center">Signup</p>
        </div>
      </div>
    </div>
  );
};

export default LoginThree;
