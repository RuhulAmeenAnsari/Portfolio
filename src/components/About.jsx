import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/profile.jpg";
import Tilt from "react-parallax-tilt";
const About = () => {
  return (
    <>
      <section
        id="about"
        className="min-h-screen w-auto md:w-full bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative mb-10 sm:mb-1"
      >
        <div className="absolute z-10 top-[55%] md:top-[25%] p-10 xl:z-10 ">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              delay: 1.3,
              stiffness: 40,
              damping: 25,
              duration: 1.5,
            }}
            className="text-3xl md:text-7xl lg:8xl font-bold z-10 mb-5  "
          >
            Ruhul Ameen <br />
            <span className="text-purple-300">
              <Typewriter
                words={[
                  "Web Developer.",
                  "React Developer.",
                  "MERN Developer.",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              delay: 1.8,
              stiffness: 40,
              damping: 25,
              duration: 1.5,
            }}
            className=" text-sm md:text-xl lg:text-2xl text-purple-200 max-w-2xl  "
          >
            {" "}
            I deliver robust, production-ready websites and web apps with speed
            and precision. Every project is backed by clean code, clear
            communication, and a commitment to getting it done, on time, every
            time. <br />
            <a
              className=" absolute mt-10  tifycen z-10 text-xl bg-gradient-to-r font-bold from-violet-900 to-purple-900 rounded-2xl px-4 py-2 md:mt-10 hover:from-violet-900 hover:to-black hover:shadow hover:shadow-purple-900 md:text-xl lg:text-2xl text-purple-200 max-w-2xl  "
              href=""
            >
              Download cv
            </a>
          </motion.p>
        </div>
        <div  className="md:w-1/2 md:justify-end  flex justify-center">
          <Tilt className="h-[300px]   rounded-full absolute top-20 md:h-[350px] md:right-48 md:top-52 md:scale-115">
            <motion.img
            initial={{y:20,x:20,opacity:0}} animate={{y:0,x:0,opacity:1}} transition={{duration:3}}
              src={profile}
              className="h-[300px] md:h-[350px] rounded-full border-4 border-purple-700 shadow-[0_10px_20px_rgba(130,69,236,0.5)] "
              alt="Ruhul Ameen"
            />
          </Tilt>
        </div>
      </section>
    </>
  );
};

export default About;
