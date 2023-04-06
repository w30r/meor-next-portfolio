import React from "react";
import { motion } from "framer-motion";

function Intro() {
  return (
    <div>
      <p className="text-gray-300 font-mono tracking-tighter text-center text-sm md:text-lg md:tracking-normal md:w-2/3 mx-auto leading-3">
        Welcome to my portfolio! As a{" "}
        <span className="text-teal-500 ">Computer Engineering</span> graduate
        with a strong passion for software engineering, I'm driven to develop{" "}
        <span className="text-teal-500 ">
          creative solutions for complex problems
        </span>{" "}
        . I'm excited to apply my technical skills and innovation to real-world
        challenges.
      </p>
      <button
        type="button"
        class="text-white mt-6 font-sans bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 "
      >
        Hire me!
      </button>
    </div>
  );
}

export default Intro;
