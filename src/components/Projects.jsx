import { useState } from "react";
import { projects } from "../constants";
const Projects = () => {
  const [SelectedProject, setSelectedProject] = useState(null);
  const handleprojectopen = (project) => {
    setSelectedProject(project);
  };
  const handlecloseproject = () => {
    setSelectedProject(null);
  };
  return (
    <>
      <section
        id="project"
        className="px-20 bg-gradient-to-b font-sans from-gray-900 to-black min-h-screen"
      >
        <h1 className="text-center font-bold text-5xl  items-center  font-sans">
          Projects
        </h1>
        <div className="h-1 w-52 mt-2 mx-auto bg-purple-600 "></div>
        <p className="text-center text-gray-400 mt-4 font-semibold">
          A Showcase of the Projects I have Worked on, highligting my skills and
          experinces in various technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
          {projects.map((project) => (
            <div
              onClick={() => handleprojectopen(project)}
              key={project.id}
              className="border p-3  z-10 border-white bg-gray-900 backdrop:blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="p-4">
                <img
                  src={project.img}
                  className="w-full h-20 scale-120 sm:scale-100 sm:h-48 object-cover rounded-xl xl:object-cover overflow-hidden"
                  alt=""
                />
                <h1 className="text-3xl sm:text-5xl  font-semibold text-white mt-10 mb-4 text-center">
                  {project.title}
                </h1>
                <p className="text-sm mb-3 text-center mt-5 line-clamp-3 text-gray-400">
                  {project.description}
                </p>
                <div className="grid grid-cols-2  mt-5 md:grid-cols-3 gap-3 w-full ">
                  {project.tags.map((tag, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center space-x-2 bg-purple-900 shadow-lg shadow-purple-900 rounded-2xl py-2 px-2"
                    >
                      <span className="text-xs md:text-sm text-purple-500">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {SelectedProject && (
          <div className="fixed bg-black opacity-95  inset-0 z-50 flex items-center justify-center">
            <div className="bg-gray-800 px-2 py-2 overflow-hidden rounded-2xl relative max-w-3xl lg:w-full w-[80%]">
              <div className="flex justify-end p-4">
                <button
                  onClick={handlecloseproject}
                  className="text-3xl text-white font-bold hover:text-purple-700 hover:cursor-pointer hover:scale-150"
                >
                  &times;
                </button>
              </div>
              <div className="flex flex-col">
                <div className="w-full flex justify-center bg-gray-900 py-2 px-4 ">
                  <img
                    className="lg:w-full w-[95%] shadow-2xl h-48 rounded-xl object-contain"
                    src={SelectedProject.img}
                    alt={SelectedProject.title}
                  />
                </div>
                <div className="lg:p-8 p-6">
                  <h3 className="lg:text-3xl text-md font-bold mb-3">
                    {SelectedProject.title}
                  </h3>
                  <p className="text-gray-300 lg:text-base text-xs mb-6">
                    {SelectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {SelectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-purple-900 rounded-2xl px-2 py-1 font-semibold md:text-sm text-purple-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={SelectedProject.github}
                    className=" bg-purple-800 text-white px-3 py-2 rounded-xl md:flex w-full md:justify-center
                   hover:cursor-pointer hover:bg-violet-800 hover:text-black"
                  >
                    Get Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Projects;
