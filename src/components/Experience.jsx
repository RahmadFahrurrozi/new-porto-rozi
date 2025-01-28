import React from "react";
import { EXPERIENCES } from "../constants/data-content";
import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaBootstrap,
  FaAngular,
  FaWordpress,
  FaElementor,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiJest, SiMysql, SiGooglecloud, SiWoocommerce } from "react-icons/si";

const iconMap = {
  FaReact: <FaReact className="text-cyan-400" />,
  FaNodeJs: <FaNodeJs className="text-green-500" />,
  FaLaravel: <FaLaravel className="text-red-600" />,
  FaHtml5: <FaHtml5 className="text-orange-600" />,
  FaCss3Alt: <FaCss3Alt className="text-blue-600" />,
  FaPhp: <FaPhp className="text-indigo-500" />,
  FaBootstrap: <FaBootstrap className="text-purple-600" />,
  RiTailwindCssFill: <RiTailwindCssFill className="text-sky-500" />,
  IoLogoJavascript: <IoLogoJavascript className="text-yellow-400" />,
  SiMysql: <SiMysql className="text-blue-600" />,
  FaAngular: <FaAngular className="text-red-600" />,
  FaWordpress: <FaWordpress className="text-blue-400" />,
  FaElementor: <FaElementor className="text-pink-500" />,
  SiJest: <SiJest className="text-red-600" />,
  SiGooglecloud: <SiGooglecloud className="text-blue-600" />,
  SiWoocommerce: <SiWoocommerce className="text-indigo-400" />,
};

const Experience = () => {
  return (
    <div id="experience" className="py-10 px-4 sm:px-8 md:px-16 lg:px-32">
      <h2 className="my-16 text-center text-3xl lg:text-4xl font-bold bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text tracking-tight text-transparent">
        Experience
      </h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-stone-700" />

        {EXPERIENCES.map((experience) => (
          <div
            key={experience.id}
            className="mb-12 flex flex-wrap lg:flex-nowrap relative items-start"
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[24px] lg:top-0 w-4 h-4 bg-stone-600 rounded-full border-4 border-stone-800" />

            {/* Year section */}
            <div className="w-full lg:w-1/2 lg:pr-16 text-center lg:text-right">
              <p className="text-sm text-stone-400 font-medium">
                {experience.year}
              </p>
            </div>

            {/* Content section */}
            <div className="w-full lg:w-1/2 lg:pl-16 mt-6 lg:mt-0">
              <div className="mb-4">
                <h3 className="mb-2 font-semibold text-white">
                  {experience.role} -{" "}
                  <span className="text-sm text-stone-400">
                    {experience.company}
                  </span>
                </h3>
                <p className="mb-4 text-stone-400">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech.id}
                      className="flex flex-row items-center gap-2 rounded-full bg-stone-700 px-3 py-1 text-sm font-semibold text-white"
                    >
                      {iconMap[tech.icon]} {tech.nama}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
