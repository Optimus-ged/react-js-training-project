import Trees from "@/assets/trees.jpg";

const LoginThree = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="m-auto grid h-[455px] grid-cols-1 border lg:grid-cols-2">
        <div className="hidden h-[455px] w-full lg:block">
          <img className="h-full w-full object-cover" src={Trees} alt="/" />
        </div>
        <div className="flex flex-col justify-between p-8">
          <form>
            <h2 className="mt-8 text-center text-2xl font-bold">BRAND.</h2>
            <div className="mt-8 flex gap-2">
              <input
                className="w-full border px-4 py-2"
                type="text"
                placeholder="Username"
              />
              <input
                className="w-full border px-4 py-2"
                type="text"
                placeholder="Password"
              />
            </div>
            <button className="mt-2 w-full bg-green-700 py-2 text-white hover:bg-green-600">
              Singin
            </button>
            <p className="mt-8 text-center">Forget username or Password?</p>
          </form>
          <p className="text-center">Signup</p>
        </div>
      </div>
    </div>
  );
};

export default LoginThree;
