import { useState } from "react";

export default function ResponsiveNavExample() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={`h-screen w-screen bg-slate-200 ${isVisible ? "overflow-y-hidden" : "overflow-y-auto"}`}
    >
      <CustomHeader setIsVisible={() => setIsVisible(!isVisible)} />
      <CustomNav
        isVisible={isVisible}
        setIsVisible={() => setIsVisible(!isVisible)}
      />
      <CustomBody />
    </div>
  );
}

type CustomHeaderProps = {
  setIsVisible: () => void;
};

function CustomHeader({ setIsVisible }: CustomHeaderProps) {
  return (
    <header className="sticky top-0 flex items-center justify-between bg-white p-4 drop-shadow-md">
      <h1>Logo</h1>
      <h1 className="md:hidden cursor-pointer" onClick={setIsVisible}>
        Menu
      </h1>
      <nav className="hidden md:block">
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Articles</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

type CustomNavProps = {
  isVisible: boolean;
  setIsVisible: () => void;
};

function CustomNav({ isVisible, setIsVisible }: CustomNavProps) {
  return (
    <nav
      className={`fixed inset-0 top-0 backdrop-blur transition duration-300 ${isVisible ? "translate-x-0" : "translate-x-full"}`}
      onClick={setIsVisible}
    >
      <ul className="absolute bottom-0 right-0 top-0 flex w-5/6 flex-col gap-6 bg-white px-4 py-8">
        <li>Home</li>
        <li>About</li>
        <li>Articles</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function CustomBody() {
  return (
    <div className="h-[1000px] p-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        voluptatibus illum quisquam reprehenderit sapiente hic illo vero aut
        voluptas, rerum perspiciatis natus mollitia soluta reiciendis magni,
        inventore ut porro delectus.
      </p>
    </div>
  );
}
