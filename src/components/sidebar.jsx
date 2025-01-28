import React, { useState, useEffect } from "react";
import {
  FaBriefcase,
  FaEnvelope,
  FaHome,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("");

  const menuItems = [
    { icon: <FaHome />, label: "Home", link: "#home" },
    { icon: <FaTools />, label: "Skills", link: "#skills" },
    { icon: <FaProjectDiagram />, label: "Projects", link: "#projects" },
    { icon: <FaBriefcase />, label: "Experience", link: "#experience" },
    { icon: <FaEnvelope />, label: "Contact", link: "#contact" },
  ];

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = "";

      menuItems.forEach((item) => {
        const section = document.querySelector(item.link);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = item.link;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems]);

  // Handle click to make it active immediately
  const handleClick = (link) => {
    setActiveSection(link); // Update the active section on click
  };

  return (
    <div>
      {/* Sidebar for large screens */}
      <div className="hidden lg:fixed lg:rounded-full lg:border lg:border-stone-700 lg:top-1/2 lg:right-4 lg:transform lg:-translate-y-1/2 lg:h-fit lg:flex lg:flex-col lg:items-center lg:bg-black lg:text-stone-300 lg:py-6 lg:space-y-6">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            onClick={() => handleClick(item.link)}
            className={`flex justify-center items-center w-12 h-12 rounded-full m-1 text-gray-500 hover:text-stone-800 transition duration-500 ease-in-out ${
              activeSection === item.link ? "bg-white text-black" : ""
            }`}
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Navbar for small screens */}
      <div className="lg:hidden rounded-full border border-stone-700 m-4 fixed bottom-0 left-0 right-0 flex justify-center items-center bg-black/50 text-stone-300">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            onClick={() => handleClick(item.link)}
            className={`flex justify-center items-center w-12 h-12 mx-2 rounded-full text-gray-500 hover:text-stone-800 transition duration-500 ease-in-out ${
              activeSection === item.link ? "bg-white text-black" : ""
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
