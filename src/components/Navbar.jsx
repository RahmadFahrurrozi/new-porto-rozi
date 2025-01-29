import { GiPanda } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <div className="rounded-full flex items-center gap-3 px-6 py-2 border border-stone-400 dark:border-stone-100">
            <p className="text-gray-900 dark:text-white transition-transform duration-300 hover:scale-105">
              Panda!
            </p>
            <GiPanda
              className="text-xl text-indigo-600 dark:text-yellow-400
            "
            />
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
