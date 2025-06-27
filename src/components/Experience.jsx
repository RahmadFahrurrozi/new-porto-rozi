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
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiMysql,
  SiGooglecloud,
  SiWoocommerce,
  SiTypescript,
  SiVite,
  SiShadcnui,
  SiReactquery,
  SiReacthookform,
  SiReactrouter,
  SiCodeceptjs,
} from "react-icons/si";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

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
  SiCodeceptjs: <SiCodeceptjs className="text-red-600" />,
  SiGooglecloud: <SiGooglecloud className="text-blue-600" />,
  SiWoocommerce: <SiWoocommerce className="text-indigo-400" />,
  SiTypescript: <SiTypescript className="text-blue-500" />,
  SiVite: <SiVite className="text-purple-500" />,
  SiShadcnui: <SiShadcnui className="text-sky-500" />,
  SiReactquery: <SiReactquery className="text-pink-500" />,
  SiReacthookform: (
    <SiReacthookform className="text-blue-500 dark:text-white " />
  ),
  FaGitAlt: <FaGitAlt className="text-orange-500" />,
  FaGithub: <FaGithub className="text-gray-800" />,
  SiReactrouter: <SiReactrouter className="text-red-500" />,
};

const Experience = () => {
  return (
    <>
      <div id="experience" className="py-10 px-4 sm:px-8 md:px-16 lg:px-32">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="my-16 text-center text-3xl lg:text-4xl font-bold bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text tracking-tight text-transparent"
        >
          Experience
        </motion.h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-stone-700" />

          {EXPERIENCES.map((experience) => (
            <div
              key={experience.id}
              className="mb-12 flex flex-wrap lg:flex-nowrap relative items-start"
            >
              {/* Timeline dot */}
              <motion.div className="absolute left-1/2 transform -translate-x-1/2 top-[24px] lg:top-0  w-4 h-4 bg-stone-600 rounded-full border-4 border-stone-800" />

              {/* Year section */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/2 lg:pr-16 text-center lg:text-right"
              >
                <p className="text-sm text-stone-400 font-medium">
                  {experience.year}
                </p>
              </motion.div>

              {/* Content section */}
              <div className="w-full lg:w-1/2 lg:pl-16 mt-6 lg:mt-0">
                <div className="mb-4">
                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="mb-2 font-semibold text-stone-800 dark:text-white"
                  >
                    {experience.role} -{" "}
                    <span className="text-sm text-stone-400">
                      {experience.company}
                    </span>
                  </motion.div>
                  <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="mb-4 text-stone-400"
                  >
                    {experience.description}
                  </motion.p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <motion.span
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        key={tech.id}
                        className="flex flex-row items-center gap-2 rounded-full bg-white text-stone-600 px-3 py-1 text-sm font-semibold shadow-sm dark:bg-stone-600 dark:text-white"
                      >
                        {iconMap[tech.icon]} {tech.nama}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pb-28 flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-32">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="my-16 text-center text-3xl lg:text-4xl font-bold bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text tracking-tight text-transparent"
        >
          Github Contributions
        </motion.h2>
        <GitHubCalendar
          username="rahmadfahrurrozi"
          blockSize={12}
          blockMargin={5}
          fontSize={12}
        />
      </div>
    </>
  );
};

export default Experience;
