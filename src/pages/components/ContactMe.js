import React from "react";
import { motion } from "framer-motion";
import { SiLinkedin, SiGithub, SiFacebook } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  return (
    <div
      id="contact"
      className="w-full py-32 bg-black border-t border-zinc-900"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-teal-500 font-mono tracking-widest uppercase text-sm mb-4">
            Get In Touch
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to build <br />
            <span className="text-zinc-500">the next big thing?</span>
          </h1>
          <p className="text-zinc-400 text-lg mb-12 max-w-lg mx-auto">
            Currently open to{" "}
            <span className="text-teal-500 font-semibold">
              Senior Software & Automation
            </span>{" "}
            opportunities. Whether you have a question or just want to say hi,
            my inbox is always open.
          </p>

          {/* Contact Methods */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
            <a
              href="mailto:meor.syamil@hotmail.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-white hover:border-teal-500/50 transition-all duration-300 group"
            >
              <HiOutlineMail className="text-teal-500 text-xl group-hover:scale-110 transition-transform" />
              <span>meor.syamil@hotmail.com</span>
            </a>
            <a
              href="tel:+60193076344"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-white hover:border-teal-500/50 transition-all duration-300 group"
            >
              <SiWhatsapp className="text-teal-500 text-xl group-hover:scale-110 transition-transform" />
              <span>+6019-3076344</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8 text-3xl text-zinc-500">
            <a
              href="https://github.com/w30r"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/meor-syamil-59935a153/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-500 transition-colors"
            >
              <SiLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
