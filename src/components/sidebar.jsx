import {
  FaBriefcase,
  FaEnvelope,
  FaHome,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    { icon: <FaHome />, label: "Home", link: "#home" },
    { icon: <FaTools />, label: "Skills", link: "#skills" },
    { icon: <FaProjectDiagram />, label: "Projects", link: "#projects" },
    { icon: <FaBriefcase />, label: "Experience", link: "#experience" },
    { icon: <FaEnvelope />, label: "Contact", link: "#contact" },
  ];

  return (
    <div>
      <div className="hidden lg:fixed lg:rounded-full lg:border lg:border-stone-700 lg:top-1/2 lg:right-4 lg:transform lg:-translate-y-1/2 lg:h-fit lg:flex lg:flex-col lg:items-center lg:bg-black lg:text-stone-300 lg:py-6 lg:space-y-6">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex justify-center items-center w-12 h-12 rounded-full m-1 text-gray-500 hover:text-white transition duration-500 ease-in-out"
          >
            {item.icon}
          </a>
        ))}
      </div>

      <div className="lg:hidden rounded-full border border-stone-700 m-4 fixed bottom-0 left-0 right-0 flex justify-center items-center bg-black/50 text-stone-300 py-3">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex justify-center items-center w-12 h-12 mx-2 text-gray-500 hover:text-white transition duration-500 ease-in-out"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
