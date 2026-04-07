import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const projectList = [
  {
    title: "MeoARC (Enterprise)",
    videoSrc:
      "https://4pmllzkk3e.ufs.sh/f/80lTYgNxh6OamUVoGrPsI9ghATua14jvL85qPif2b7UBENDO",
    link: "/projects/meoarc",
    desc: "A mission-critical asset registration system designed for high-scale industrial data. Engineered to solve a 90% data duplication issue for 500+ enterprise users.",
    tags: ["Next.js", "MongoDB", "Automation", "Enterprise"],
  },
  {
    title: "MeoFalk Live",
    videoSrc:
      "https://4pmllzkk3e.ufs.sh/f/80lTYgNxh6OapvwnbRWxrmHMZfkoITs8qQazU3WgRS1FJOwP",
    link: "/projects/meofalk",
    desc: "Real-time remix submission dashboard utilizing WebSockets for instant updates and S3 cloud storage for high-availability media management.",
    tags: ["React", "Node.js", "WebSockets", "AWS S3"],
  },
  {
    title: "Nathaleo Sync",
    videoSrc:
      "https://4pmllzkk3e.ufs.sh/f/80lTYgNxh6OaFZHDRahiyD28X6GdzrPvcoSEsT517VZNMpFt",
    link: "/projects/nathaleo",
    desc: "Mobile-first movie discovery platform featuring swipe-based logic and TMDB API integration. Built for seamless real-time synchronization between users.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "API"],
  },
];

function Projects() {
  return (
    <div id="projects" className="w-full py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-center text-4xl font-bold tracking-tight text-white md:text-6xl mb-4">
          Featured <span className="text-teal-500">Projects</span>
        </h1>
        <p className="text-zinc-500 text-center mb-20 max-w-xl mx-auto">
          A selection of full-stack systems and automation tools built with
          performance and scalability in mind.
        </p>

        <div className="flex flex-col gap-32 items-center">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group w-full"
            >
              {/* Project Title & Tech Tags */}
              <div className="text-center mb-8">
                <h2 className="font-bold text-2xl md:text-4xl text-white mb-4 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h2>
                <div className="flex flex-wrap justify-center gap-2">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1 text-[10px] uppercase tracking-widest bg-zinc-900 border border-zinc-800 text-teal-500 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Video/Image Container */}
              <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-zinc-800 group-hover:border-teal-500/30 transition-all duration-500 shadow-2xl">
                {project.videoSrc ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  >
                    <source src={project.videoSrc} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={project.src || "/placeholder.png"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 duration-700"
                  />
                )}
              </div>

              {/* Description & Link */}
              <div className="mt-10 text-center max-w-2xl">
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                  {project.desc}
                </p>

                <Link
                  href={project.link}
                  className="inline-block bg-white text-black hover:bg-teal-500 hover:text-white transition-all duration-300 font-bold px-10 py-4 rounded-full text-xs uppercase tracking-[0.2em]"
                >
                  Explore Documentation
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
