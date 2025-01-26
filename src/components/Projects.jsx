import { PROJECTS } from "../constants/data-content";
import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaLaravel,
  FaNodeJs,
  FaWordpress,
  FaElementor,
  FaPhp,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { SiWoocommerce } from "react-icons/si";

const iconMap = {
  FaAngular: <FaAngular className="text-red-600" />,
  FaBootstrap: <FaBootstrap className="text-indigo-600" />,
  FaCss3Alt: <FaCss3Alt className="text-blue-600" />,
  FaHtml5: <FaHtml5 className="text-orange-600" />,
  FaLaravel: <FaLaravel className="text-red-600" />,
  FaNodeJs: <FaNodeJs className="text-green-500" />,
  RiTailwindCssFill: <RiTailwindCssFill className="text-sky-500" />,
  IoLogoJavascript: <IoLogoJavascript className="text-yellow-400" />,
  SiMysql: <SiMysql className="text-blue-600" />,
  FaWordpress: <FaWordpress className="text-blue-400" />,
  FaElementor: <FaElementor className="text-pink-500" />,
  SiWoocommerce: <SiWoocommerce className="text-indigo-400" />,
  FaPhp: <FaPhp className="text-indigo-300" />,
};

const Projects = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((Project) => (
          <div
            key={Project.id}
            className="mb-8 flex flex-wrap gap-8 lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <img
                src={Project.image}
                alt={Project.title}
                className="w-full mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold text-2xl">{Project.title}</h3>
              <p className="mb-4 text-stone-400">{Project.description}</p>
              <div className="mb-2 flex flex-row flex-wrap items-center gap-2">
                {Project.technologies.map((tech) => (
                  <span
                    className="flex flex-row mr-2 items-center gap-2 rounded-full bg-stone-800 px-3 py-1 text-sm font-semibold text-white"
                    key={tech.id}
                  >
                    {iconMap[tech.icon]} {tech.nama}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
