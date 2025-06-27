import { motion } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { SiMysql, SiShadcnui } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.5 },
    },
  };

  // Enhanced floating animation with more randomization
  const getFloatingAnimation = () => {
    const duration = Math.random() * 3 + 2; // Duration between 2-5 seconds
    const delay = Math.random() * 2; // Delay up to 2 seconds
    const yOffset = Math.random() * 15 + 5; // Random float distance between 5-20px
    const timingOffset = Math.random(); // Random starting point in the animation

    return {
      y: [
        -yOffset * timingOffset, // Start at random point
        -yOffset, // Peak
        0, // Back to origin
        -yOffset * 0.5, // Lower peak
        -yOffset * timingOffset, // Back to start
      ],
      transition: {
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
        times: [0, 0.25, 0.5, 0.75, 1],
      },
    };
  };

  const skills = [
    {
      icon: <SiTypescript className="text-7xl text-blue-600" />,
      key: "typescript",
    },
    {
      icon: <IoLogoJavascript className="text-7xl text-yellow-400" />,
      key: "js",
    },
    {
      icon: <FaNodeJs className="text-7xl text-green-500" />,
      key: "node",
    },
    {
      icon: <FaReact className="text-7xl text-cyan-400" />,
      key: "react",
    },
    {
      icon: <RiNextjsFill className="text-7xl text-gray-800 dark:text-white" />,
      key: "next",
    },
    {
      icon: <FaLaravel className="text-7xl text-red-600" />,
      key: "laravel",
    },
    {
      icon: <RiTailwindCssFill className="text-7xl text-sky-500" />,
      key: "tailwind",
    },
    {
      icon: <SiShadcnui className="text-5xl text-gray-800 dark:text-white" />,
      key: "bootstrap",
    },
    {
      icon: <SiMysql className="text-7xl text-stone-600 dark:text-stone-100" />,
      key: "mysql",
    },
    {
      icon: <FaGitAlt className="text-6xl text-orange-600" />,
      key: "git",
    },
    {
      icon: <FaFigma className="text-6xl text-violet-600" />,
      key: "figma",
    },
  ];

  return (
    <div id="skills" className="pb-24 pt-5 min-h-[60vh]">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text tracking-tight text-transparent"
      >
        Skills
      </motion.h2>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.key}
            variants={itemVariants}
            whileHover="hover"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            animate={getFloatingAnimation()}
            className="cursor-pointer"
          >
            {skill.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
