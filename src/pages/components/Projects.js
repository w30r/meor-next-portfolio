import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "Envoice.my",
    videoSrc:
      "https://4pmllzkk3e.ufs.sh/f/80lTYgNxh6OauY31OdgGUVSBXOa8ZRj9bM1z07kcJYmD6qNi",
    link: "/projects/envoice",
    desc: "A comprehensive e-invoicing solution fully compliant with LHDN (Malaysian Inland Revenue Board) requirements. Automates invoice generation, validation, and submission to the MyInvois portal, streamlining tax compliance for businesses of all sizes.",
    tags: ["Next.js", "MongoDB", "LHDN", "E-Invoice", "MyInvois"],
  },
  {
    title: "MeorFitnessPal",
    videoSrc:
      "https://4pmllzkk3e.ufs.sh/f/80lTYgNxh6Oab1D7BW4VRSixg9lCymcOdz1rp0Ls5Bn2DYjT",
    link: "/projects/meorfitnesspal",
    desc: "A comprehensive health suite featuring automated macro-tracking, dynamic workout logging, and progress visualization. Now enhanced with AI-powered meal recommendations and smart workout optimization based on user history and goals.",
    tags: ["React", "Express", "MongoDB", "Node.js", "AI/ML", "Cloud Storage"],
  },
  {
    title: "KTANE Clone",
    videoSrc:
      "https://4pmllzkk3e.ufs.sh/f/80lTYgNxh6OahCKXwID7nHveNijwGtDz8XJa0uQqAY9EkCof",
    link: "/projects/ktane",
    desc: 'A browser-based recreation of "Keep Talking and Nobody Explodes" — a frantic party puzzle game where one player defuses a bomb while others decipher the manual. Features randomized modules, authentic wire-cutting logic, and real-time pressure.',
    tags: ["React", "Next.js", "Game Dev", "Puzzle", "Multiplayer"],
  },
];

const otherProjects = [
  {
    title: "MeoARC (Enterprise)",
    link: "/projects/meoarc",
    desc: "A mission-critical asset registration system designed for high-scale industrial data. Engineered to solve a 90% data duplication issue for 500+ enterprise users.",
    tags: ["Next.js", "MongoDB", "Automation", "Enterprise"],
  },
  {
    title: "Nathaleo Sync",
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
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group w-full"
            >
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
                  <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-teal-900/40 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4 opacity-30">🎮</div>
                      <p className="text-zinc-600 text-sm uppercase tracking-widest">
                        Preview Coming Soon
                      </p>
                    </div>
                  </div>
                )}
              </div>

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

        {/* Other Projects */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-400 md:text-3xl">
              Other <span className="text-zinc-500">Projects</span>
            </h2>
            <div className="w-12 h-px bg-zinc-800 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2 py-0.5 text-[9px] uppercase tracking-widest bg-zinc-800 border border-zinc-700 text-teal-500/70 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">
                    {project.desc}
                  </p>
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-teal-500 text-xs uppercase tracking-[0.15em] hover:text-white transition-colors"
                  >
                    View Project &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
