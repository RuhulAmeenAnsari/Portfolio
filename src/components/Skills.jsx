import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { SkillsInfo } from "../constants";
const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="bg-gradient-to-b from-black to-gray-900 px-20 pt-5 min-h-screen "
      >
        {/* <Spline
          className="absolute z-0 xl:top-80 over opacity-45 xl:scale-y-110 scale-125"
          scene="https://prod.spline.design/e4sY6kywdIw7ahhX/scene.splinecode"
        /> */}
        <div>
          <h1 className="text-center text-5xl font-bold ">Skills</h1>
          <div className="w-32 h-1 bg-purple-600 mx-auto mt-2"></div>
          <p className="text-gray-400 mt-4 font-semibold text-center">
            A collection of my Technical skills and expertise honed through
            various projects .
          </p>
        </div>

        <div className="flex flex-wrap gap-1 py-10 lg:gap-5 justify-between">
          {SkillsInfo.map((category) => (
            <div
              key={category.title}
              className="bg-gray-900   backdrop:blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow shadow-purple-700"
            >
              <h3 className="text-2xl sm:text-3xl  font-semibold text-gray-400 mb-4 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full ">
                {category.skills.map((skill) => (
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 25,
                      duration: 0.5,
                    }}
                    key={skill.name}
                    className="flex z-20 items-center justify-center hover:-translate-y-2 transition-transform duration-300 hover:cursor-pointer space-x-2 bg-transparent border-2 border-gray-700 rounded-2xl py-2 px-2"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo `}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <span className="text-xs sm:text-sm text-gray-300 ">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
