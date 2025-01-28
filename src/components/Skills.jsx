import React from "react";
import { motion } from "framer-motion";
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
      icon: <FaHtml5 className="text-7xl text-orange-600" />,
      key: "html",
    },
    {
      icon: <FaCss3Alt className="text-7xl text-blue-600" />,
      key: "css",
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
      icon: <FaAngular className="text-7xl text-red-600" />,
      key: "angular",
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
      icon: <FaBootstrap className="text-7xl text-purple-600" />,
      key: "bootstrap",
    },
    {
      icon: <SiMysql className="text-7xl text-stone-200" />,
      key: "mysql",
    },
    {
      icon: <FaFigma className="text-6xl text-violet-600" />,
      key: "figma",
    },
  ];

  return (
    <div id="skills" className="pb-24 pt-5 min-h-[60vh]">
      <h2 className="my-20 text-center text-4xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text tracking-tight text-transparent">
        Skills
      </h2>
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
