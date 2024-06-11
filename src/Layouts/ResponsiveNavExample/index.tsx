import { useState } from "react";

export default function ResponsiveNavExample() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={`h-screen w-screen bg-slate-200 ${isVisible ? "overflow-hidden" : "overflow-auto"}`}
    >
      <header className="sticky top-0 flex items-center justify-between bg-white px-4 py-8 drop-shadow-lg">
        <h1>Logo</h1>
        <h1 className="md:hidden" onClick={() => setIsVisible(!isVisible)}>
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
      <nav
        className={`fixed inset-0 backdrop-blur transition duration-300 ${isVisible ? "translate-x-0" : "translate-x-full"}`}
        onClick={() => setIsVisible(!isVisible)}
      >
        <ul className="absolute bottom-0 right-0 top-0 flex w-5/6 flex-col gap-4 bg-white px-4 py-8">
          <li>Home</li>
          <li>About</li>
          <li>Articles</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="h-[1000px] bg-orange-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, ex
        fuga! Eveniet ex iusto et ut eaque ipsa fugit ullam accusantium
        perferendis debitis atque quia aut, alias eius maiores sapiente
      </div>
    </div>
  );
}
