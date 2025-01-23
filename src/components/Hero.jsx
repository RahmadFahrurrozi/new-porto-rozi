import profilepic from "../assets/photo/panda.jpeg";
import { HERO_CONTENT } from "../constants/data-content";
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <img
            src={profilepic}
            alt="Rahmad Fahrurrozi"
            className="border border-stone-900 rounded-3xl w-full lg:w-3/4 transition duration-300 ease-in-out hover:filter-none filter grayscale"
          />
          {/* <div className="absolute bottom-0 left-70 right-10 -z-10 top-50 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] blur-md"></div> */}
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">Rozi</h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Front-End Developer
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              {HERO_CONTENT}
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="nooper noreferrer"
              download
            >
              <button className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
