import React from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiMysql,
  SiAmazon,
  SiApacheairflow,
  SiMicrosoftazure,
} from "react-icons/si";

const skillData = [
  {
    title: "UI/UX Orchestration",
    icon: <SmartphoneIcon className="text-teal-500 mb-2" />,
    description: (
      <>
        Bridging high-fidelity design with performant code. Expert in
        <span className="text-teal-500 font-semibold">
          {" "}
          Figma-to-React
        </span>{" "}
        workflows and creating seamless, user-centric interfaces.
      </>
    ),
  },
  {
    title: "Enterprise Data Architecture",
    icon: <StorageRoundedIcon className="text-teal-500 mb-2" />,
    description: (
      <>
        Architecting robust data pipelines and managing mission-critical
        databases in the
        <span className="text-teal-500 font-semibold"> Energy Sector</span>,
        ensuring 99.9% data integrity and high availability.
      </>
    ),
  },
  {
    title: "Automation & IoT",
    icon: <SettingsInputComponentIcon className="text-teal-500 mb-2" />,
    description: (
      <>
        Integrating hardware and software via{" "}
        <span className="text-teal-500 font-semibold">ESP32/Arduino</span>.
        Specializing in custom firmware and automated monitoring systems.
      </>
    ),
  },
  {
    title: "Cloud Infrastructure",
    icon: <CloudQueueIcon className="text-teal-500 mb-2" />,
    description: (
      <>
        Implementing scalable cloud storage and real-time protocols. Proficient
        in
        <span className="text-teal-500 font-semibold">
          {" "}
          Docker, Vercel,
        </span>{" "}
        and event-driven application architecture.
      </>
    ),
  },
  {
    title: "Full-Stack Development",
    icon: <LanguageOutlinedIcon className="text-teal-500 mb-2" />,
    description: (
      <>
        Building modern, SEO-optimized web apps using
        <span className="text-teal-500 font-semibold">
          {" "}
          React, Next.js, and TypeScript
        </span>
        . Focused on type-safety and rapid feature deployment.
      </>
    ),
  },
  {
    title: "DevOps & Collaboration",
    icon: <GitHubIcon className="text-teal-500 mb-2" />,
    description: (
      <>
        Mastery of Git workflows and{" "}
        <span className="text-teal-500 font-semibold">CI/CD pipelines</span>.
        Ensuring seamless team collaboration through structured branching and
        automated testing.
      </>
    ),
  },
];

function Skills() {
  return (
    <div id="skillset" className="bg-black w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-12 text-center text-3xl font-bold tracking-tight text-white md:text-5xl">
          Technical <span className="text-teal-500">Skillset</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, translateY: -5 }}
              className="p-8 bg-black border border-gray-800 rounded-2xl shadow-xl hover:border-teal-500/50 transition-colors duration-300 group"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h5 className="mb-3 text-xl font-bold tracking-tight text-white group-hover:text-teal-400">
                {skill.title}
              </h5>
              <p className="font-normal text-gray-400 leading-relaxed text-sm">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold tracking-tight text-white mb-10">
            Tech <span className="text-teal-500">Stack</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-black border border-gray-800 rounded-2xl"
            >
              <h3 className="text-teal-500 font-semibold mb-4 text-sm tracking-wider uppercase">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-gray-300 text-sm rounded-full hover:border-teal-500/50 transition-colors">
                  <SiReact className="text-blue-400" /> ReactJS
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-gray-300 text-sm rounded-full hover:border-teal-500/50 transition-colors">
                  <SiNextdotjs className="text-white" /> Next.js
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-black border border-gray-800 rounded-2xl"
            >
              <h3 className="text-teal-500 font-semibold mb-4 text-sm tracking-wider uppercase">
                Backend
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-gray-300 text-sm rounded-full hover:border-teal-500/50 transition-colors">
                  <SiNodedotjs className="text-green-500" /> Node.js
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-gray-300 text-sm rounded-full hover:border-teal-500/50 transition-colors">
                  <SiExpress className="text-white" /> ExpressJS
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-gray-300 text-sm rounded-full hover:border-teal-500/50 transition-colors">
                  <SiPython className="text-yellow-400" /> Python
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-black border border-gray-800 rounded-2xl"
            >
              <h3 className="text-teal-500 font-semibold mb-4 text-sm tracking-wider uppercase">
                Data / Cloud
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-gray-300 text-sm rounded-full hover:border-teal-500/50 transition-colors">
                  <SiMysql className="text-blue-500" /> SQL
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-gray-300 text-sm rounded-full hover:border-teal-500/50 transition-colors">
                  <SiMongodb className="text-green-400" /> NoSQL
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-gray-300 text-sm rounded-full hover:border-teal-500/50 transition-colors">
                  <SiApacheairflow className="text-white" /> Airflow
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-gray-300 text-sm rounded-full hover:border-teal-500/50 transition-colors">
                  <SiAmazon className="text-orange-400" /> AWS
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-gray-300 text-sm rounded-full hover:border-teal-500/50 transition-colors">
                  <SiMicrosoftazure className="text-blue-500" /> Azure
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
