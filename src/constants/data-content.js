import bsdwebsite from "../assets/projects/BSD.png";
import umkmKarangbendo from "../assets/projects/umkm-desa-karangbendo.png";
import akrab from "../assets/projects/akrab.png";
import panda from "../assets/photo/panda.jpeg";
import restaurant from "../assets/projects/restaurant-app.png";

export const PROFILEPICT = {
  name: "Rahmad Fahrurrozi",
  image: panda,
};

export const HERO_CONTENT = `Hi, my name is Rahmad Fahrurrozi. I am a Frontend Developer with a passion for creating innovative and user-friendly web applications. I am currently working as a Frontend Developer at Adobe.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    id: 1,
    year: "Jnuary (2024)",
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
    id: 2,
    year: "february - Desember (2024)",
    role: "Frontend Developer",
    company: "Dicoding Academy",
    description: `Built a Restaurant App as part of the Frontend Web Developer Expert course. The app was designed with progressive web app (PWA) features and utilized advanced technologies to enhance performance and user experience.`,
    technologies: [
      { id: 1, nama: "HTML", icon: "FaHtml5" },
      { id: 2, nama: "CSS", icon: "FaCss3Alt" },
      { id: 3, nama: "Javascript", icon: "IoLogoJavascript" },
      { id: 4, nama: "Node Js", icon: "FaNodeJs" },
      { id: 5, nama: "Jest", icon: "SiJest" },
      { id: 6, nama: "Cache API (Workbox)", icon: "SiGooglecloud" },
      { id: 7, nama: "Progressive Web Apps (PWA)", icon: "FaPwa" },
      { id: 8, nama: "IndexedDB", icon: "SiIndexdb" },
      { id: 9, nama: "Image Min", icon: "SiImagemin" },
      { id: 10, nama: "Sharp", icon: "SiSharp" },
      { id: 11, nama: "Lazy Load", icon: "FaInfinity" },
    ],
  },
  {
    id: 3,
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
    id: 4,
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
    title: "Website Bisnis Digital",
    link: "https://bisnisdigital.poliwangi.ac.id/",
    image: bsdwebsite,

    description:
      "Website profil Program Studi Bisnis Digital dirancang modern dan responsif menggunakan AngularJS dan Bootstrap, menampilkan informasi prodi secara informatif untuk kebutuhan calon mahasiswa baru.",
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
    id: 2,
    title: "Website UMKM Desa Karangbendo",
    link: "https://umkmdesakarangbendo.com/",
    image: umkmKarangbendo,
    description:
      "Website UMKM Desa Karangbendo dibuat dan dirancang modern untuk mempromosikan UMKM yang ada pada desa karangbendo dan menyediakan platform untuk mempromosikan produk-produknya.",
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
        nama: "Javascript",
        icon: "IoLogoJavascript",
      },
      {
        id: 6,
        nama: "Node Js",
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
      "Website Akrab  E-commerce dibuat untuk menunjang proses bisnis dan memudahkan para anggota umkm untuk berjualan dan mempromosikannya secara mudah.",
    technologies: [
      {
        id: 1,
        nama: "Wordpress",
        icon: "FaWordpress",
      },
      { id: 2, nama: "Elementor", icon: "FaElementor" },
      { id: 3, nama: "Woocommerce", icon: "SiWoocommerce" },
      { id: 4, nama: "PHP", icon: "FaPhp" },
      { id: 5, nama: "MySQL", icon: "SiMysql" },
    ],
  },
  {
    id: 4,
    title: "Website Restaurant",
    link: "https://restaurant-app-rahmadfahrurrozi.vercel.app/",
    image: restaurant,
    description:
      "Tugas Submission: Restaurant App yang digunakan untuk kelulusan dikelas Frontend Web developer Expert dari Dicoding.",
    technologies: [
      { id: 1, nama: "HTML", icon: "FaHtml5" },
      { id: 2, nama: "CSS", icon: "FaCss3Alt" },
      { id: 3, nama: "Javascript", icon: "IoLogoJavascript" },
      { id: 5, nama: "Node Js", icon: "FaNodeJs" },
      { id: 6, nama: "Jest", icon: "SiJest" },
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
  address: "Banyuwangi, Jawa Timur, Indonesia",
  phone: "085746574319",
  email: "zfahrur150105@gmail.com",
};
