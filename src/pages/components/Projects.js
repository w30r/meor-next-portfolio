import Image from "next/image";
import Link from "next/link";
import React from "react";

const projectList = [
  {
    title: "MeoFalk Live",
    videoSrc:
      "https://4pmllzkk3e.ufs.sh/f/80lTYgNxh6OapvwnbRWxrmHMZfkoITs8qQazU3WgRS1FJOwP",
    link: "/projects/meofalk",
    desc: "Real-time remix submission dashboard using WebSockets and S3 cloud storage.",
  },
  {
    title: "NathaLeo Sync",
    videoSrc:
      "https://4pmllzkk3e.ufs.sh/f/80lTYgNxh6OapvwnbRWxrmHMZfkoITs8qQazU3WgRS1FJOwP",
    src: "/nathaleo-fallback.png", // Replace with your image later
    link: "/projects/nathaleo",
    desc: "Swipe-based movie discovery app with TMDB integration for friends and families.",
  },
  {
    title: "MeoARC",
    videoSrc:
      "https://4pmllzkk3e.ufs.sh/f/80lTYgNxh6OapvwnbRWxrmHMZfkoITs8qQazU3WgRS1FJOwP",
    src: "/meoarc-fallback.png", // Replace with your image later
    link: "/projects/meoarc",
    desc: "Enterprise Asset Registration System for high-scale industrial data management.",
  },
];

function Projects() {
  return (
    <div className="w-screen py-12 bg-zinc-950">
      <h1 className="text-center text-3xl font-bold tracking-tight text-white md:text-5xl mb-12">
        Featured Projects
      </h1>

      <div id="ThePROJECTS" className="px-6 flex flex-col gap-20 items-center">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center group max-w-4xl w-full"
          >
            <h2 className="font-bold mb-4 underline text-xl md:text-3xl text-teal-500 uppercase tracking-widest">
              {project.title}
            </h2>

            <div className="relative w-full aspect-video overflow-hidden rounded-[30px] border-4 border-teal-600/20 group-hover:border-teal-500/60 transition-all duration-500 shadow-2xl shadow-teal-900/20">
              {project.videoSrc ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
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

            <p className="mt-6 text-zinc-400 text-center text-sm md:text-base max-w-lg leading-relaxed">
              {project.desc}
            </p>

            <Link
              href={project.link}
              className="bg-teal-600/10 text-teal-400 hover:bg-teal-600 hover:text-white duration-300 font-bold border border-teal-600/40 px-8 py-3 mt-6 rounded-full text-sm uppercase tracking-wider"
            >
              Explore Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
