import bsdwebsite from "../assets/projects/BSD.webp";
import umkmKarangbendo from "../assets/projects/umkm-desa-karangbendo.webp";
import akrab from "../assets/projects/akrab.webp";
import panda from "../assets/photo/panda.webp";
import restaurant from "../assets/projects/restaurant-app.webp";

export const PROFILEPICT = {
  name: "Rahmad Fahrurrozi",
  image: panda,
};

export const HERO_CONTENT = `Hi, I'm Rahmad Fahrurrozi, a fourth-semester student in Business and Informatics at Politeknik Negeri Banyuwangi. I'm a graduate of the 2024 DBS Foundation Scholarship Program by Dicoding and DBS, specializing in Frontend Development.`;

export const EXPERIENCES = [
  {
    id: 1,
    year: "April - Now (2025)",
    role: "Frontend Engineer",
    company: "PT Mitramedis Inovasi Solusindo",
    description:
      "Responsible for developing and maintaining the backoffice system for Mitra Medis, focusing on creating responsive, user-friendly interfaces using modern frontend technologies. Collaborated with cross-functional teams to implement new features, improve system performance, and ensure seamless integration with backend services.",
    technologies: [
      { id: 1, nama: "TypeScript", icon: "SiTypescript" },
      { id: 2, nama: "Vite", icon: "SiVite" },
      { id: 3, nama: "React", icon: "FaReact" },
      { id: 4, nama: "shadcn/ui", icon: "SiShadcnui" },
      { id: 5, nama: "Tailwind CSS", icon: "RiTailwindCssFill" },
      { id: 6, nama: "React Router", icon: "SiReactrouter" },
      { id: 7, nama: "Context API", icon: "FaReact" },
      { id: 8, nama: "React Hook Form", icon: "SiReacthookform" },
      { id: 9, nama: "TansTack Query", icon: "SiReactquery" },
      { id: 10, nama: "Git", icon: "FaGitAlt" },
      { id: 11, nama: "GitHub ", icon: "FaGithub" },
    ],
  },
  {
    id: 2,
    year: "January (2025)",
    role: "Frontend Developer",
    company: "Politeknik Negeri Banyuwangi",
    description: `Developed and maintained the official website of the Digital Business program, focusing on modern and responsive designs. The website was built using AngularJS and Bootstrap, providing detailed program information for prospective students.`,
    technologies: [
      { id: 1, nama: "AngularJS", icon: "FaAngular" },
      { id: 2, nama: "Bootstrap", icon: "FaBootstrap" },
      { id: 3, nama: "HTML", icon: "FaHtml5" },
      { id: 4, nama: "CSS", icon: "FaCss3Alt" },
      { id: 5, nama: "Javascript", icon: "IoLogoJavascript" },
      { id: 6, nama: "Node Js", icon: "FaNodeJs" },
    ],
  },
  {
    id: 3,
    year: "february - December (2024)",
    role: "Frontend Developer",
    company: "Dicoding Academy",
    description: `Built a Restaurant App as part of the Frontend Web Developer Expert course. The app was designed with progressive web app (PWA) features and utilized advanced technologies to enhance performance and user experience.`,
    technologies: [
      { id: 1, nama: "HTML", icon: "FaHtml5" },
      { id: 2, nama: "CSS", icon: "FaCss3Alt" },
      { id: 3, nama: "Javascript", icon: "IoLogoJavascript" },
      { id: 4, nama: "Node Js", icon: "FaNodeJs" },
      { id: 5, nama: "CodeceptJS", icon: "SiCodeceptjs" },
      { id: 6, nama: "Cache API (Workbox)", icon: "SiGooglecloud" },
      { id: 7, nama: "Progressive Web Apps (PWA)", icon: "FaPwa" },
      { id: 8, nama: "IndexedDB", icon: "SiIndexdb" },
      { id: 9, nama: "Image Min", icon: "SiImagemin" },
      { id: 10, nama: "Sharp", icon: "SiSharp" },
      { id: 11, nama: "Lazy Load", icon: "FaInfinity" },
    ],
  },
  {
    id: 4,
    year: "Juli - Agust (2024)",
    role: "Full Stack Developer",
    company: "Politeknik Negeri Banyuwangi",
    description: `Created and managed a website for promoting and supporting UMKM in Karangbendo Village. The platform allows businesses to showcase and promote their products effectively.`,
    technologies: [
      { id: 1, nama: "Laravel", icon: "FaLaravel" },
      { id: 2, nama: "Tailwind CSS", icon: "RiTailwindCssFill" },
      { id: 3, nama: "HTML", icon: "FaHtml5" },
      { id: 4, nama: "CSS", icon: "FaCss3Alt" },
      { id: 5, nama: "Javascript", icon: "IoLogoJavascript" },
      { id: 6, nama: "Node Js", icon: "FaNodeJs" },
      { id: 7, nama: "MySQL", icon: "SiMysql" },
    ],
  },
  {
    id: 5,
    year: "Agust - September (2024)",
    role: "Fullstack Developer",
    company: "Akrab E-commerce Project",
    description: `Developed an e-commerce website to facilitate business operations and provide an easy-to-use platform for UMKM members to sell and promote their products.`,
    technologies: [
      { id: 1, nama: "Wordpress", icon: "FaWordpress" },
      { id: 2, nama: "Elementor", icon: "FaElementor" },
      { id: 3, nama: "Woocommerce", icon: "SiWoocommerce" },
      { id: 4, nama: "PHP", icon: "FaPhp" },
      { id: 5, nama: "MySQL", icon: "SiMysql" },
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Digital Business Website",
    link: "https://bisnisdigital.poliwangi.ac.id/",
    image: bsdwebsite,

    description:
      "A modern and responsive profile website for the Digital Business Study Program designed using AngularJS and Bootstrap. It provides informative details about the program for prospective new students.",
    technologies: [
      { id: 1, nama: "AngularJS", icon: "FaAngular" },
      { id: 2, nama: "Bootstrap", icon: "FaBootstrap" },
      { id: 3, nama: "HTML", icon: "FaHtml5" },
      { id: 4, nama: "CSS", icon: "FaCss3Alt" },
      { id: 5, nama: "JavaScript", icon: "IoLogoJavascript" },
      { id: 6, nama: "Node.js", icon: "FaNodeJs" },
    ],
  },
  {
    id: 2,
    title: "Karangbendo Village UMKM Website",
    link: "https://umkmdesakarangbendo.com/",
    image: umkmKarangbendo,
    description:
      "A modernly designed website for promoting local SMEs (UMKM) in Karangbendo Village. It provides a platform for showcasing and promoting their products.",
    technologies: [
      {
        id: 1,
        nama: "Laravel",
        icon: "FaLaravel",
      },
      {
        id: 2,
        nama: "Tailwind CSS",
        icon: "RiTailwindCssFill",
      },
      {
        id: 3,
        nama: "HTML",
        icon: "FaHtml5",
      },
      {
        id: 4,
        nama: "CSS",
        icon: "FaCss3Alt",
      },
      {
        id: 5,
        nama: "JavaScript",
        icon: "IoLogoJavascript",
      },
      {
        id: 6,
        nama: "Node.js",
        icon: "FaNodeJs",
      },
      {
        id: 7,
        nama: "MySQL",
        icon: "SiMysql",
      },
    ],
  },
  {
    id: 3,
    title: "Akrab E-commerce",
    link: "https://ta.poliwangi.ac.id/~ti22003/akrabbwi/",
    image: akrab,
    description:
      "The Akrab E-commerce website was created to support business processes and help SME members sell and promote their products easily.",
    technologies: [
      {
        id: 1,
        nama: "WordPress",
        icon: "FaWordpress",
      },
      { id: 2, nama: "Elementor", icon: "FaElementor" },
      { id: 3, nama: "WooCommerce", icon: "SiWoocommerce" },
      { id: 4, nama: "PHP", icon: "FaPhp" },
      { id: 5, nama: "MySQL", icon: "SiMysql" },
    ],
  },
  {
    id: 4,
    title: "Restaurant Website",
    link: "https://restaurant-app-rahmadfahrurrozi.vercel.app/",
    image: restaurant,
    description:
      "Submission Project: A Restaurant App created for the completion of the Frontend Web Developer Expert class at Dicoding.",
    technologies: [
      { id: 1, nama: "HTML", icon: "FaHtml5" },
      { id: 2, nama: "CSS", icon: "FaCss3Alt" },
      { id: 3, nama: "JavaScript", icon: "IoLogoJavascript" },
      { id: 5, nama: "Node.js", icon: "FaNodeJs" },
      { id: 6, nama: "Codecept", icon: "SiCodeceptjs" },
    ],
  },
];

export const SOCIALMEDIA = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/RahmadFahrurrozi",
  },
  {
    id: 2,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/rahmad-fahrurrozi-38424829b/",
  },
  {
    id: 3,
    name: "Instagram",
    link: "https://www.instagram.com/fahrurrr_ozi/",
  },
];

export const CONTACT = {
  address: "Banyuwangi, jawa timur, Indonesia",
  phone: "085746574319",
  email: "zfahrur150105@gmail.com",
};
