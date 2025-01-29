import { CONTACT } from "../constants/data-content";
import { SOCIALMEDIA } from "../constants/data-content";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const iconMap = {
  FaGithub: <FaGithub className="text-2xl text-gray-800 dark:text-white" />,
  FaLinkedin: <FaLinkedin className="text-2xl text-blue-600" />,
  FaInstagram: <FaInstagram className="text-2xl text-pink-500" />,
};
const Contact = () => {
  return (
    <footer
      id="contact"
      className="relative border-t border-stone-800 pb-20 h-[60vh] overflow-hidden pt-5"
    >
      <motion.h2
        className="my-10 text-center text-4xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text tracking-tight text-transparent"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
      >
        Let's Work Together
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center tracking-tighter gap-2"
      >
        <p className="">{CONTACT.address}</p>
        <a
          className=" hover:text-stone-500 transition-all duration-300 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://wa.me/${CONTACT.phone}`}
        >
          {CONTACT.phone}
        </a>
        <a
          className=" hover:text-stone-500 transition-all duration-300 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
          href={CONTACT.email}
        >
          {CONTACT.email}
        </a>
        <div className="flex gap-4 items-center">
          {SOCIALMEDIA.map((social) => (
            <motion.a
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name === "Github" && iconMap.FaGithub}
              {social.name === "Linkedin" && iconMap.FaLinkedin}
              {social.name === "Instagram" && iconMap.FaInstagram}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Contact;
