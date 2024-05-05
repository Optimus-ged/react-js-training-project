import Tree from "@/assets/trees.jpg";

const LoginFour = () => {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <img className="h-full w-full object-cover" src={Tree} alt="/" />
      <div className="absolute rounded bg-white p-8">
        {/* LOGIN IMAGE BRAND */}
        <div className="flex w-full justify-center">
          <div className="mb-8 h-20 w-20 rounded-lg bg-gray-100" />
        </div>

        <div className="mb-8 text-center">
          <p className="font-bold text-amber-500">Bon retour parmi nous</p>
          <p>Connecter vous pour commencer le travail</p>
        </div>

        {/* LOGIN FORM */}
        <form action="">
          <div className="mb-4 flex flex-col gap-1">
            <label className="text-sm text-gray-600" htmlFor="">
              Nom d'utilisateur
            </label>
            <input
              className="rounded border w-full bg-amber-100 px-4 py-2"
              type="text"
              placeholder="Nom d'utilisateur"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600" htmlFor="">
              Mot de passe
            </label>
            <input
              className="rounded border w-full bg-amber-100 px-4 py-2"
              type="password"
              placeholder="Mot de passe"
            />
          </div>
          <p className="mt-4 flex items-center">
            <input className="mr-2" type="checkbox" />
            Se souvenir de moi
          </p>
          <button className="mt-2 w-full rounded bg-amber-500 py-2 text-center text-white hover:bg-amber-600">
            Connection
          </button>
        </form>
        <div className="mt-5 flex w-full items-center gap-2">
          <div className="h-[1px] w-full bg-gray-200" />
          <p>Login</p>
          <div className="h-[1px] w-full bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default LoginFour;
