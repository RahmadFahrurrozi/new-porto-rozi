const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <div className="rounded-full flex gap-3 px-6 py-2 border border-stone-100">
            <p className="text-white transition-transform duration-300 hover:scale-105">
              Panda!
            </p>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
