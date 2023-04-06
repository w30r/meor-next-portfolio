import React from "react";
import pfp from "../../../public/pfp.png";
import Image from "next/image";
import { motion } from "framer-motion";

function ProfilePic() {
  return (
    <motion.div
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="mt-36 relative bg-gradient-to-b via-cyan-900 from-teal-600 to-black rounded-full md:w-60 md:h-60 w-[200px] h-[200px] mx-auto overflow-hidden transition-all duration-500 ease-out "
    >
      <Image src={pfp} alt={"yes"} />
    </motion.div>
  );
}

export default ProfilePic;
