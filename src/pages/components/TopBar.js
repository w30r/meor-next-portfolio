import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

function TopBar() {
  return (
    <div>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="bg-gradient-to-b via-black from-black from-10% via-60% to-90% mb-2 py-6 border-gray-300 rounded-lg flex w-full  justify-around top-0 left-0 fixed z-10 items-center"
      >
        <h1 className="text-sm md:text-xl text-gray-400 ">developedbymeor</h1>
        <ul className="flex items-center">
          <li>
            <SocialIcon
              url="https://twitter.com/MeorSyamil"
              bgColor="transparent"
              fgColor="grey"
              style={{ height: 30 }}
            />
          </li>
          <li className="">
            <SocialIcon
              url="https://www.facebook.com/meor.syamil/"
              bgColor="transparent"
              fgColor="grey"
              style={{ height: 30 }}
            />
          </li>
          <li className="">
            <SocialIcon
              url="https://www.linkedin.com/in/meor-syamil-59935a153/"
              bgColor="transparent"
              fgColor="grey"
              style={{ height: 30 }}
            />
          </li>
          <li className="">
            <SocialIcon
              url="https://github.com/w30r"
              bgColor="transparent"
              fgColor="grey"
              style={{ height: 30 }}
            />
          </li>
        </ul>
      </motion.nav>
    </div>
  );
}

export default TopBar;
