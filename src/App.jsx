import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Sidebar from "./components/sidebar.jsx";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sinkronisasi dark mode dengan localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Cek preferensi tema dan bahasa saat pertama kali dimuat
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-gray-900 transition-colors duration-300 dark:text-white">
      {/* Background untuk Light Mode */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white transition-opacity duration-300 dark:opacity-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
        </div>
      </div>

      {/* Background untuk Dark Mode */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black opacity-0 transition-opacity duration-300 dark:opacity-100">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
      </div>

      <main className="container relative mx-auto px-8">
        <Header />
        {/* Control Buttons Group */}
        <div className="fixed z-20 top-4 right-4 ">
          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="rounded-full bg-gray-200 p-2 text-gray-900 shadow-lg transition-colors duration-300 hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            aria-label={
              isDarkMode ? "Beralih ke Mode Terang" : "Beralih ke Mode Gelap"
            }
          >
            {isDarkMode ? (
              <span className="flex items-center">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>
            ) : (
              <span className="flex items-center">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </span>
            )}
          </button>
        </div>

        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Sidebar isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
