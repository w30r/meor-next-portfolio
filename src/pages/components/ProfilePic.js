import React from "react";
import newpfp from "../../../public/newpfp.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

function ProfilePic() {
  return (
    <motion.div
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 1,
        repeat: 1,
        repeatType: "reverse",
      }}
      className="mt-36 relative bg-gradient-to-b via-cyan-900 from-teal-600 to-black rounded-full md:w-60 md:h-60 w-[200px] h-[200px] mx-auto overflow-hidden transition-all duration-500 ease-out "
    >
      <Image src={newpfp} alt={"yes"} className="w-full h-full object-cover " />
    </motion.div>
  );
}

export default ProfilePic;
