import { CONTACT } from "../constants/data-content";
import { SOCIALMEDIA } from "../constants/data-content";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const iconMap = {
  FaGithub: <FaGithub className="text-2xl text-white" />,
  FaLinkedin: <FaLinkedin className="text-2xl text-blue-600" />,
  FaInstagram: <FaInstagram className="text-2xl text-pink-500" />,
};
const Contact = () => {
  return (
    <footer
      id="contact"
      className="relative border-t border-stone-800 pb-20 h-[50vh] overflow-hidden pt-5"
    >
      <h2 className="my-10 text-center text-4xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text tracking-tight text-transparent">
        Contact Me
      </h2>
      <div className="flex flex-col items-center tracking-tighter gap-2">
        <p className="">{CONTACT.address}</p>
        <a
          className=" hover:text-stone-500 transition-all duration-300 ease-in-out"
          href={`https://wa.me/${CONTACT.phone}`}
        >
          {CONTACT.phone}
        </a>
        <a
          className=" hover:text-stone-500 transition-all duration-300 ease-in-out"
          href={CONTACT.email}
        >
          {CONTACT.email}
        </a>
        <div className="flex gap-4 items-center">
          {SOCIALMEDIA.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name === "Github" && iconMap.FaGithub}
              {social.name === "Linkedin" && iconMap.FaLinkedin}
              {social.name === "Instagram" && iconMap.FaInstagram}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
