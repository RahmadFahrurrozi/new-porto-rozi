import { HERO_CONTENT } from "../constants/data-content";
import { PROFILEPICT } from "../constants/data-content";
import { motion } from "framer-motion";

// Variants untuk animasi container
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

// Variants untuk animasi children
const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

// Variants untuk animasi gambar
const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
  hover: {
    scale: 1.05,
    rotate: 5,
    filter: "grayscale(0%)",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

// Variants untuk animasi tombol
const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } },
  hover: {
    scale: 1.1,
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const Hero = () => {
  return (
    <div id="home" className="py-5 lg:mb-36">
      <motion.div
        className="flex flex-wrap lg:flex-row-reverse"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Bagian Gambar */}
        <div className="w-full lg:w-1/2">
          <motion.img
            src={PROFILEPICT.image}
            alt="Rahmad Fahrurrozi"
            className="border border-stone-900 rounded-3xl w-full lg:w-3/4 transition duration-300 ease-in-out filter grayscale hover:filter-none"
            onContextMenu={(e) => e.preventDefault()}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          />
        </div>

        {/* Bagian Teks dan Tombol */}
        <div className="w-full lg:w-1/2">
          <motion.div
            className="flex flex-col items-center lg:items-start mt-10"
            variants={childVariants}
          >
            <motion.h2
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
              variants={childVariants}
            >
              Rozi
            </motion.h2>
            <motion.span
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
              variants={childVariants}
            >
              Front-End Developer
            </motion.span>
            <motion.p
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
              variants={childVariants}
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              variants={buttonVariants}
              whileHover="hover"
            >
              <button className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 shadow-md hover:shadow-lg transition-transform transform">
                Download CV
              </button>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
