import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const togglemenu = () => setIsOpen(!isOpen);
  const [isScrolled, setisScrolled] = useState(true);
  const [ActiveSection, setActiveSection] = useState("");

  const form = useRef();
  const [isSent, setisSent] = useState(false);

  const sendemail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fh3k6sh",
        "template_64sjxmi",
        form.current,
        "YC3QYrbPVdBfiAj6k"
      )
      .then(
        () => {
          setisSent(true);
          form.current.reset(); // reset fields after msg sent
          toast.success("email has sent successfully !", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          toast.error("error sending email", error);
          toast.error("Failed to send email , please Try Again !", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };
  const handleActiveMenuItem = (sectionid) => {
    setActiveSection(sectionid);
    setIsOpen(false);
  
    // Give time for the mobile menu to collapse before scrolling
    setTimeout(() => {
      const section = document.getElementById(sectionid);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // wait for 300ms after menu close animation
  };

  useEffect(() => {
    const handlescroll = () => {
      setisScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  const menuItems = [
    { i: 0, id: "about", label: "About" },
    { i: 1, id: "skills", label: "Skills" },
    { i: 2, id: "project", label: "Project" },
    { i: 3, id: "education", label: "Education" },
  ];

  const [ContactFormopen, setContactFormopen] = useState(false);
  const opencontactform = () => setContactFormopen(true);
  const closecontactform = () => setContactFormopen(false);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300  ${
          isScrolled
            ? "h-18  inset-0 bg-black/50 backdrop-blur-sm z-50 shadow-md fixed"
            : "bg-transparent"
        }`}
      >
        <ToastContainer />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-18 lg:h-22 flex items-center justify-between ">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.3,
              duration: 1.2,
            }}
            className="flex items-center"
          >
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-r hover:text-white hover:cursor-pointer  text-purple-600 from-purple-950 to-transparent flex items-center mr-3 font-bold text-2xl justify-center">
              R
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
              Ruhul Ameen
            </span>
          </motion.div>
          <nav className="lg:flex hidden space-x-8">
            {menuItems.map((items) => (
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  delay: 0.7 + items.i * 0.2,
                  stiffness: 100,
                  duration: 1.2,
                }}
                className={`relative text-gray-800 ${
                  ActiveSection == items.id
                    ? "text-violet-600"
                    : "text-gray-800"
                } dark:text-gray-200 transition-colors hover:cursor-pointer hover:text-violet-600 hover:dark:text-violet-400 group duration-300`}
                key={items.id}
                onClick={() => handleActiveMenuItem(items.id)}
              >
                {items.label}
                <span className="absolute w-0 h-0.5 left-0 bottom-0 bg-violet-400 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
          </nav>
          <div className="md:flex hidden items-center space-x-4 ">
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 1.2,
              }}
              className="text-gray-700 dark:text-gray-200 hover:text-violet-600 duration-300 dark:hover:text-violet-400 transition-colors"
              href="https://github.com/RuhulAmeenAnsari"
            >
              <FiGithub className="w-6 hover:cursor-pointer h-6" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 1.2,
              }}
              className="text-gray-700 dark:text-gray-200 hover:text-violet-600 duration-300 dark:hover:text-violet-400 transition-colors"
              href="https://www.linkedin.com/in/ruhul-ameen-149a3a2b3/"
            >
              <FiLinkedin className="w-6 hover:cursor-pointer h-6" />
            </motion.a>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                stiffness: 100,
                type: "spring",
                duration: 1.5,
                delay: 0.5,
                damping: 15,
              }}
              onClick={opencontactform}
              className="ml-4 px-3 py-2 bg-gradient-to-r from-black to-gray-800 rounded-2xl hover:from-purple-400 hover:to-violet-500 font-semibold hover:text-purple-100 transition-all duration-500 cursor-pointer"
            >
              Hire me
            </motion.button>
          </div>
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.7 }}
              onClick={togglemenu}
              className="text-gray-300"
            >
              {isOpen ? (
                <FiX className="h-6 hover:cursor-pointer w-6" />
              ) : (
                <FiMenu className="h-6 hover:cursor-pointer w-6" />
              )}
            </motion.button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          className="md:hidden px-5 py-5 bg-white overflow-hidden shadow-lg space-y-3 dark:bg-gray-900 "
        >
          <nav className="flex  flex-col space-y-3">
            {menuItems.map((items) => (
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  delay: 0.7 + items.i * 0.2,
                  stiffness: 100,
                  duration: 1.2,
                }}
                className="relative text-gray-800 dark:text-gray-200 transition-colors hover:text-violet-600 hover:dark:text-violet-400 hover:cursor-pointer group duration-300"
                key={items.id}
                onClick={() => handleActiveMenuItem(items.id)}
              >
                {items.label}
                <span className="absolute w-0 h-0.5 left-44 bottom-0 bg-violet-400 group-hover:w-1/4 transition-all duration-300"></span>
              </motion.button>
            ))}
          </nav>
          <div className="pt-4 border-t bg-gray-200 dark:bg-gray-900">
            <div className="flex space-x-4 ">
              <a href="https://github.com/RuhulAmeenAnsari">
                <FiGithub className="w-5 h-5 hover:cursor-pointer text-gray-300" />
              </a>
              <a href="https://www.linkedin.com/in/ruhul-ameen-149a3a2b3/">
                <FiLinkedin className="w-5 h-5 hover:cursor-pointer text-gray-300" />
              </a>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 0.96 }}
              onClick={() => {
                togglemenu();
                opencontactform();
              }}
              className="mt-4 font-semibold shadow-md hover:shadow-lg hover:cursor-pointer hover:shadow-violet-600/40  block w-full px-4 py-2 bg-gradient-to-r from-purple-700 rounded-2xl to-violet-400"
            >
              Contact me
            </motion.button>
          </div>
        </motion.div>

        <AnimatePresence>
          {ContactFormopen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className=" inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 30 }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 200,
                  duration: 0.8,
                }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
              >
                <div className="flex items-center mb-4 justify-between">
                  <h1 className=" text-2xl font-bold text-gray-300 ">
                    Get in Touch
                  </h1>
                  <button>
                    <FiX
                      onClick={closecontactform}
                      className="w-5 hover:cursor-pointer  h-5 font-extrabold text-gray-300"
                    />
                  </button>
                </div>
                <form onSubmit={sendemail} ref={form} className="space-y-4">
                  <div>
                    <label
                      className="block font-medium text-sm text-gray-300 mb-1"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:ring-2 focus:border-violet-600 "
                      placeholder="Your Name"
                      id="name"
                    />
                  </div>
                  <div>
                    <label
                      className="block font-medium text-sm text-gray-300 mb-1"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:ring-2 focus:border-violet-600 "
                      placeholder="Your Email"
                      id="email"
                    />
                    <label
                      className="block font-medium text-sm text-gray-300 mt-3 mb-1"
                      htmlFor="email"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:ring-2 focus:border-violet-600 "
                      placeholder="Enter subject"
                      id="subject"
                    />
                  </div>
                  <div>
                    <label
                      className="block font-medium text-sm text-gray-300 mb-1"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:ring-2 focus:border-violet-600 "
                      placeholder="How can we help you ?"
                      id="message"
                    />
                  </div>
                  <motion.button
                    onSubmit={sendemail}
                    type="Submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:cursor-pointer hover:shadow-violet-600/40 "
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Header;
