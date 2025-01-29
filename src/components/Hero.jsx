import { HERO_CONTENT } from "../constants/data-content";
import { PROFILEPICT } from "../constants/data-content";
import { motion } from "framer-motion";
import { CONTACT } from "../constants/data-content";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Hero = () => {
  return (
    <div id="home" className="py-5 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/* image profile */}
        <div className="w-full lg:w-1/2">
          <LazyLoadImage
            src={PROFILEPICT.image}
            alt="Rahmad Fahrurrozi"
            className="rounded-3xl w-full lg:w-3/4 transition duration-300 ease-in-out filter grayscale hover:filter-none"
            effect="blur"
            placeholderSrc={PROFILEPICT.placeholder}
            onContextMenu={(e) => e.preventDefault()}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            >
              Rozi
            </motion.h2>
            <motion.span
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            >
              Front-End Developer
            </motion.span>
            <motion.p
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            >
              <a
                className=" hover:text-stone-500 transition-all duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://wa.me/${CONTACT.phone}`}
              >
                <button className="bg-white rounded-full py-4 px-8 text-sm text-stone-800 mb-10 shadow-md hover:shadow-lg transition-transform transform">
                  Hire Me
                </button>
              </a>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
