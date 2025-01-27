import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills" className="pb-24">
      <h2 className="my-20 text-center text-4xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text tracking-tight text-transparent">
        Skills
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <FaHtml5 className="text-7xl text-orange-600" />
        </div>
        <div>
          <FaCss3Alt className="text-7xl text-blue-600" />
        </div>
        <div>
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </div>
        <div>
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
        <div>
          <FaReact className="text-7xl text-cyan-400" />
        </div>
        <div>
          <FaAngular className="text-7xl text-red-600" />
        </div>
        <div>
          <FaLaravel className="text-7xl text-red-600" />
        </div>
        <div>
          <RiTailwindCssFill className="text-7xl text-sky-500" />
        </div>
        <div>
          <FaBootstrap className="text-7xl text-purple-600 " />
        </div>
        <div>
          <SiMysql className="text-7xl text-stone-200" />
        </div>
        <div>
          <FaFigma className="text-6xl text-violet-600" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
