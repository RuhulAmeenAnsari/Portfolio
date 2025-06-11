import React from "react";
import { education } from "../constants";

function Education() {
  return (
    <>
      <section
        id="education"
        className="py-24 pb-24 md:px-[7vw] px-[12vw] lg:px-[16vw] font-sans bg-gradient-to-b from-black to-gray-900 pt-5 h-auto mt-[455vh] md:mt-[40%]"
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl text-white">Education</h2>
          <div className="mt-4 mx-auto bg-purple-500 h-1 w-52"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            A visual of my education Journey
          </p>
        </div>

        <div className="relative">
          <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>
          {education.map((education, index) => (
            <div
                key={index}
              id={education.id}
              className={`flex flex-col sm:flex-row items-center mb-16 ${
                index % 2 == 0 ? "sm:justify-end" : "sm:justify-start"
              }`}
            >
              <div className="absolute text-2xl text-black font-bold sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-3 border-purple-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 ">
                {education.school.charAt(0)}
              </div>
              <div
                className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl  shadow-2xl border-white border bg-gray-900 backdrop:blur-md shadow-purple-950 ${
                  index % 2 === 0 ? "sm:ml-0" : "sm:mr-0 "
                }  ml-14 mr-14  transform transition-transform hover:cursor-pointer duration-300 hover:scale-105`}
              >
                <div className="">
                  <h1 className="text-3xl font-bold">{education.degree}</h1>
                  <h4 className="font-semibold">{education.school}</h4>
                  <h6 className="text-gray-400 text-sm">{education.date}</h6>
                  <h6 className="py-4">Grade : {education.grade}</h6>
                  <p className="text-sm text-gray-400 font-semibold">
                    {education.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Education;
