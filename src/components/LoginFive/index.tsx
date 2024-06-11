type Props = {};

const LoginFive = ({}: Props) => {
  return (
    <div className="flex h-screen  justify-center  bg-[#f6f9fb]">
      <div className="mt-32 h-[400px] max-w-[400px] flex-grow rounded border bg-white p-10">
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="pb-10">Hi welcome back</p>
        <form className="flex flex-col gap-4 rounded">
          <div className="flex flex-col gap-1">
            <label className="text-xs">Email</label>
            <input
              className="w-full rounded border px-4 py-1"
              type="text"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs">Password</label>
            <input
              className="w-full rounded border px-4 py-1"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button className="rounded bg-blue-500 py-1 text-center text-white transition duration-100 hover:bg-blue-400 ">
            Login
          </button>
          <p className="text-xs flex items-center"><input className="mr-1" type="checkbox" />Remember me</p>
        </form>
      </div>
    </div>
  );
};

export default LoginFive;
