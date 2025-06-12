import { motion } from "framer-motion";
import React from "react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

function Footer() {
  const handlescroll = (sectionId) => {
    setTimeout(() => {
      let section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };
  return (
    <footer className="bg-gradient-to-b from-gray-900 text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className=" mx-auto text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-xl font-semibold text-purple-500"
        >
          Ruhul Ameen
        </motion.h2>
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { i: 0, id: "about", label: "About" },
            { i: 1, id: "skills", label: "Skills" },
            { i: 2, id: "project", label: "Project" },
            { i: 3, id: "education", label: "Education" },
          ].map((item, i) => (
            <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: "spring",
                damping: 25,
                stiffness: 100,
                delay: 0.7 + item.i * 0.2,
                duration: 8,
              }}
              key={i}
              onClick={() => handlescroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1 cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              {item.label}
            </motion.button>
          ))}
        </nav>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 4 }}
          className="flex justify-center items-center text-2xl mt-3 gap-4"
        >
          <a href="https://github.com/RuhulAmeenAnsari">
            <FiGithub className=" hover:text-purple-500 items-center cursor-pointer hover:scale-110 transition-transform duration-300  " />
          </a>
          <a href="https://www.linkedin.com/in/ruhul-ameen-149a3a2b3/">
            <FiLinkedin className=" hover:text-purple-500 items-center cursor-pointer hover:scale-110 transition-transform duration-300  " />
          </a>
          <a href="https://www.instagram.com/___ansari_ruhul_/">
            <FiInstagram className=" hover:text-purple-500 items-center cursor-pointer hover:scale-110 transition-transform duration-300  " />
          </a>
        </motion.div>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 4 }}
          className="text-sm text-gray-400 mt-6"
        >
          © 2025 Ruhul Ameen. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}

export default Footer;
