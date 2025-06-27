import { useState } from "react";
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
  FaExternalLinkAlt,
  FaEye,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiJest, SiWoocommerce } from "react-icons/si";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

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
  SiJest: <SiJest className="text-red-600" />,
};

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState({});

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  const handleImageLoad = (imageId) => {
    setImagesLoaded((prev) => ({
      ...prev,
      [imageId]: true,
    }));
  };

  return (
    <div id="projects" className="py-5">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text tracking-tight text-transparent"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((Project) => (
          <div
            key={Project.id}
            className="mb-8 flex flex-wrap gap-8 lg:justify-center"
          >
            <motion.div
              className="w-full lg:w-1/4 relative group"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="relative group">
                <LazyLoadImage
                  src={Project.image}
                  alt={Project.title}
                  className="w-full mb-6 rounded"
                  effect="blur"
                  afterLoad={() => handleImageLoad(Project.id)}
                  onContextMenu={(e) => e.preventDefault()}
                  placeholder={
                    <div className="animate-pulse bg-gray-200 w-full h-48 rounded"></div>
                  }
                />
                {imagesLoaded[Project.id] && (
                  <div className="absolute inset-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-t from-black opacity-90"></div>
                    <div className="absolute inset-0 flex items-center gap-2 justify-center">
                      <a
                        href={Project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="bg-stone-700 text-white dark:bg-white dark:text-stone-700 p-4 rounded-full">
                          <FaExternalLinkAlt />
                        </div>
                      </a>
                      <button
                        onClick={() => openModal(Project.image)}
                        className="bg-stone-700 text-white dark:bg-white dark:text-stone-700 p-4 rounded-full"
                      >
                        <FaEye />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
            >
              <h3 className="mb-2 font-semibold text-2xl">{Project.title}</h3>
              <p className="mb-4 text-stone-400">{Project.description}</p>
              <div className="mb-2 flex flex-row flex-wrap items-center gap-2">
                {Project.technologies.map((tech) => (
                  <motion.div
                    className="flex flex-row mr-2 items-center gap-2 rounded-full bg-white shadow-sm px-3 py-1 text-sm font-semibold text-stone-600 dark:bg-stone-800 dark:text-stone-200"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1 }}
                    key={tech.id}
                  >
                    {iconMap[tech.icon]} {tech.nama}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            isModalOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative">
            <LazyLoadImage
              src={selectedImage}
              alt="Modal Preview"
              className="max-w-full max-h-screen rounded shadow-lg"
              effect="blur"
              onContextMenu={(e) => e.preventDefault()}
              placeholder={
                <div className="animate-pulse bg-gray-200 w-full h-48 rounded"></div>
              }
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl bg-stone-500 p-2 rounded-full"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
