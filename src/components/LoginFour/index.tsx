import Trees from "@/assets/trees.jpg";

const LoginFour = () => {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      {/* BACKGROUND IMAGE */}
      <img className="h-full w-full object-cover" src={Trees} alt="/" />

      {/* LOGIN CONTAINER */}
      <div className="absolute rounded bg-white p-8">
        {/* BRAND PHOTO GOES HERE */}
        <div className="flex items-center justify-center py-8">
          <div className="h-20 w-20 rounded-lg border bg-gray-100" />
        </div>

        <div className="mb-8 text-center">
          <p className="font-bold text-amber-400">Bon retour parmi nous</p>
          <p>Connecter vous pour commencer le travail</p>
        </div>

        {/* LOGIN FORM */}
        <div className="flex flex-col justify-between">
          <form action="">
            <div className="mb-4 flex flex-col gap-1">
              <label className="text-sm" htmlFor="">
                Nom d'utilisateur
              </label>
              <input
                className="w-full rounded border bg-amber-200 px-4 py-2"
                type="text"
                placeholder="Nom d'utilisateur"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="">
                Mot de passe
              </label>
              <input
                className="w-full rounded border bg-amber-200 px-4 py-2"
                type="password"
                placeholder="Mot de passe"
              />
            </div>
            <p className="mt-1 flex items-center gap-1 text-sm">
              <input type="checkbox" />
              Se souvenir de moi
            </p>
            <button className="mt-4 w-full rounded border bg-amber-700 py-2 text-white transition duration-500 hover:bg-amber-500 ">
              Se connecter
            </button>
          </form>
          <div className="mt-8 flex w-full items-center gap-4">
            <div className="h-[1px] w-full bg-gray-200"></div>
            <p>Login</p>
            <div className="h-[1px] w-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFour;
