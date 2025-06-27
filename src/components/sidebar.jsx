import { useState, useEffect } from "react";
import {
  FaBriefcase,
  FaEnvelope,
  FaHome,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";

const menuItems = [
  { icon: <FaHome />, label: "Home", link: "#home" },
  { icon: <FaTools />, label: "Skills", link: "#skills" },
  { icon: <FaProjectDiagram />, label: "Projects", link: "#projects" },
  { icon: <FaBriefcase />, label: "Experience", link: "#experience" },
  { icon: <FaEnvelope />, label: "Contact", link: "#contact" },
];

const Sidebar = ({ isDarkMode }) => {
  // Sstate for active section
  const [activeSection, setActiveSection] = useState("");

  // list menu items

  // useEffect for scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // get scroll position in the middle of the window
      let currentSection = "";

      // Loop through menu items to check which section is active
      menuItems.forEach((item) => {
        const section = document.querySelector(item.link);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = item.link; // if the section is active, set the current section
          }
        }
      });

      setActiveSection(currentSection); // set the active section
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup function for removing event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems]);

  // Function to handle click event
  const handleClick = (link) => {
    setActiveSection(link); // set the active section
  };

  return (
    <div>
      {/* Sidebar for large screens */}
      <div
        className={`hidden lg:fixed lg:rounded-full lg:border ${
          isDarkMode
            ? "lg:border-stone-800 lg:bg-stone-900"
            : "lg:border-stone-200 lg:bg-white"
        } lg:top-1/2 lg:right-4 lg:transform lg:-translate-y-1/2 lg:h-fit lg:flex lg:flex-col lg:items-center lg:py-6 lg:space-y-6 lg:shadow-lg transition-colors duration-300`}
      >
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            onClick={() => handleClick(item.link)}
            className={`flex justify-center items-center w-12 h-12 rounded-full m-1 transition duration-300 ease-in-out
              ${
                activeSection === item.link
                  ? isDarkMode
                    ? "bg-stone-800 text-white"
                    : "bg-stone-200 text-stone-900"
                  : isDarkMode
                  ? "text-gray-400 hover:text-white hover:bg-stone-800"
                  : "text-stone-500 hover:text-stone-900 hover:bg-stone-100"
              }`}
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`lg:hidden py-1 rounded-full border backdrop-blur-md fixed bottom-4 left-4 right-4 flex justify-center items-center shadow-lg transition-colors duration-300  ${
          isDarkMode
            ? "border-stone-700 bg-stone-900/30 text-stone-300"
            : "border-stone-200 bg-white/10 text-stone-700"
        }`}
      >
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            onClick={() => handleClick(item.link)}
            className={`flex justify-center items-center w-12 h-12 mx-2 rounded-full transition duration-300 ease-in-out
              ${
                activeSection === item.link
                  ? isDarkMode
                    ? "bg-stone-800 text-white"
                    : "bg-stone-100 text-stone-900"
                  : isDarkMode
                  ? "text-stone-400 hover:text-white hover:bg-stone-800"
                  : "text-stone-500 hover:text-stone-900 hover:bg-stone-100"
              }`}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
