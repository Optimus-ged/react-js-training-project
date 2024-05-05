import Trees from "@/assets/trees.jpg";

const LoginFour = () => {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <img className="h-full w-full object-cover" src={Trees} alt="/" />
      <div className="absolute max-w-[400px]">
        <div className="m-auto bg-white p-12 rounded">
          {/* TOP IMAGE AREA */}
          <div className="mb-8 flex justify-center">
            <div className="boder h-20 w-20 rounded-full bg-gray-100"></div>
          </div>

          {/* TEXT AREA */}
          <div className="mb-8 text-center">
            <p className="font-semibold text-amber-800">
              Bon retour parmi nous
            </p>
            <p>Connecter pour commencer votre travail</p>
          </div>

          {/* LOGIN FORM */}
          <form action="">
            <div className="mb-2 flex flex-col gap-1">
              <label className="text-sm">Nom d'utilisateur</label>
              <input
                className="border bg-amber-200 px-4 py-2 rounded"
                type="text"
                placeholder="Nom d'utilisateur"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm">Mot de passe</label>
              <input
                className="border bg-amber-200 px-4 py-2 rounded"
                type="password"
                placeholder="Mot de passe"
              />
            </div>
            <p className="my-4 flex items-center text-sm">
              <input className="mr-2" type="checkbox" />
              Bon retour parmi nous
            </p>
            <button className="bg-amber-600 py-2 text-center rounded text-white hover:bg-amber-500 w-full">
              Connection
            </button>
          </form>
          <div className="py-4 text-center flex gap-2 items-center">
            <div className="bg-gray-200 h-[1px] w-full"></div>
            <p>Login</p>
            <div className="bg-gray-200 h-[1px] w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFour;
