import React from "react";
import Image from "next/image";
import wdicon from "public/webdevicon.png";
import { motion } from "framer-motion";

const Card = () => (
  <div className="grid grid-cols-2 justify-items-center">
    <div className="lg:w-2/3 col-span-2 outline outline-offset-1 outline-teal-400/30 rounded-2xl p-12 mb-6 hover:translate-x-1 transition-all hover:outline-blue-400 duration-400">
      <motion.div
        initial={{ opacity: 0, y: -1 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div>
          {/* <Image src={wdicon} width={80} height={80} /> */}
          <h3 className="text-xl text-white font-medium">
            Full-stack Developer (Intern)
          </h3>
          <p className="text-gray-200 my-2 leading-none">
            Participated in Setel's web application development as part of a
            team, honing front and back end software development skills and
            methodologies.
          </p>
        </div>
      </motion.div>
    </div>

    <div className="lg:w-2/3 col-span-2 outline outline-offset-1 outline-teal-400/30 rounded-2xl p-12 mb-6 hover:translate-x-1 transition-all hover:outline-blue-400 duration-400">
      <div>
        <h3 className="text-xl text-white font-medium">Research Officer</h3>
        <p className="text-gray-200 my-2 leading-none">
          Managed and conducted a research on developing a ML (Machine Learning)
          model for calibration on a digital and remote setting, trained on how
          to operate a KROHNE Coriolis Mass Flow Meter calibration.
        </p>
      </div>
    </div>

    <div className="lg:w-2/3 col-span-2 outline outline-offset-1 outline-teal-400/30 rounded-2xl p-12 mb-6 hover:translate-x-1 transition-all hover:outline-blue-400 duration-400">
      <motion.div
        initial={{ opacity: 0, y: -1 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div>
          {/* <Image src={wdicon} width={80} height={80} /> */}
          <h3 className="text-xl text-white font-medium">
            Engineering Team Project
          </h3>
          <p className="text-gray-200 my-2 leading-none">
            Created an alert device to sense toxic gas in a confined space.
            Prototype are made with Arduino simulations, and the 3D renderings
            with TinkerCAD.
          </p>
        </div>
      </motion.div>
    </div>

    <div className="lg:w-2/3 col-span-2 outline outline-offset-1 outline-teal-400/30 rounded-2xl p-12 mb-6 hover:translate-x-1 transition-all hover:outline-blue-400 duration-400">
      <motion.div
        initial={{ opacity: 0, y: -1 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div>
          {/* <Image src={wdicon} width={80} height={80} /> */}
          <h3 className="text-xl text-white font-medium leading-none">
            Final Year Project : Wavelet Coherence Analysis
          </h3>
          <p className="text-gray-200 my-2 leading-none">
            Conducted a study on how machine learning (CNN and Machine Learning)
            can be used for building motor imagery classification model with
            higher accuracy by using MATLAB and Python (TensorFlow Keras).
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);

export default Card;
