import bsdwebsite from "../assets/projects/BSD.png";
import umkmKarangbendo from "../assets/projects/umkm-desa-karangbendo.png";
import akrab from "../assets/projects/akrab.png";
import restaurant from "../assets/projects/restaurant-app.png";

export const HERO_CONTENT = `Hi, my name is Rahmad Fahrurrozi. I am a Frontend Developer with a passion for creating innovative and user-friendly web applications. I am currently working as a Frontend Developer at Adobe.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
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
    link: "/",
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
    ],
  },
];

export const SOCIALMEDIA = [
  {
    name: "Github",
    link: "https://github.com/RahmadFahrurrozi",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/rahmad-fahrurrozi-38424829b/",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/fahrurrr_ozi/",
  },
];

export const CONTACT = {
  address: "Banyuwangi, Jawa Timur, Indonesia",
  phoneNo: "085746574319",
  email: "zfahrur150105@gmail.com",
};
