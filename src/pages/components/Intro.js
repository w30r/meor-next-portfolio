import React from "react";
import { motion } from "framer-motion";

function Intro() {
  return (
    <div>
      <p className="text-gray-300 font-mono tracking-tighter text-center text-sm md:text-lg md:tracking-normal md:w-2/3 mx-auto leading-3">
        Welcome to my portfolio! As a{" "}
        <span className="text-teal-500 ">Computer Engineering</span> graduate
        with a strong passion for software engineering, I&apos;m driven to
        develop{" "}
        <span className="text-teal-500 ">
          creative solutions for complex problems
        </span>{" "}
        . I&apos;m excited to apply my technical skills and innovation to
        real-world challenges.
      </p>
      <button
        type="button"
        className="text-white mt-6 mb-24 font-sans bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 dark:bg-teal-600 dark:hover:bg-teal-700 "
      >
        Hire me!
      </button>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -10 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-6 h-6 mx-auto"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
          ></path>
        </svg>
      </motion.div>
    </div>
  );
}

export default Intro;
