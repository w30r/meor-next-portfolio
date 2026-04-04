import React from "react";
import { motion } from "framer-motion";
import {
  SiPostman,
  SiTypescript,
} from "react-icons/si";

function Intro() {
  const techLogos = [
    { node: <SiPostman size={48} />, title: "Postman" },
    { node: <SiTypescript size={48} />, title: "TypeScript" },
  ];

  // We duplicate the list to ensure there's always content filling the screen
  const duplicatedLogos = [...techLogos, ...techLogos];

  return (
    <div className="flex flex-col items-center w-full bg-black">
      {/* Bio Section */}
      <div className="px-6 text-center">
        <p className="text-gray-300 font-mono text-center py-12 text-sm md:text-lg md:w-2/3 mx-auto leading-relaxed">
          I specialize in building{" "}
          <span className="text-teal-500 font-bold">
            0-to-1 full-stack applications
          </span>{" "}
          and automating complex enterprise workflows. With a foundation in
          Hardcore Engineering from{" "}
          <span className="text-teal-500 font-bold">PETRONAS</span> <br />
          <br />I don't just write code. <br />I architect scalable, data-driven
          systems that solve real-world business bottlenecks :)
        </p>

        <button
          type="button"
          className="text-white mt-4 mb-24 font-sans hover:scale-105 transition-all duration-150 bg-teal-600 hover:bg-teal-700 font-medium rounded-full text-sm px-8 py-4"
        >
          Let's build together!
        </button>
      </div>

      <div className="relative w-full overflow-hidden h-32 flex items-center">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20"></div>

        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
          style={{ width: "max-content" }} // CRITICAL: Prevents width collapse
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-16 text-gray-500 hover:text-teal-400 transition-colors duration-300"
            >
              {logo.node}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Intro;
