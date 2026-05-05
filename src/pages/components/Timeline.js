import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Data Engineer",
    company: "PETRONAS Carigali",
    period: "Jun 2023 - Mar 2026",
    highlights: [
      "Architected and spearheaded the development of MyARC, an enterprise-level asset registration system",
      "Implemented standardized data governance that eliminated 90% of asset duplication incidents",
      "Engineered advanced matching logic and backend algorithms for the Intelligent Master Data (IMD) platform",
      "Increased facility name resolution accuracy from 70% to 95%+",
      "Developed and optimized high-concurrency data tables and APIs, ensuring sub-second query performance",
      "Ensured high availability for 500+ internal power users",
      "Designed scalable data architectures supporting drilling and production analytics",
      "Focused on modularity and code reusability across enterprise workflows",
    ],
  },
  {
    role: "Research Officer",
    company: "Universiti Teknologi PETRONAS",
    period: "Sept 2022 - Dec 2022",
    highlights: [
      "Developed a Machine Learning calibration model that significantly improved sensor accuracy",
      "Improved accuracy compared to traditional manual methods",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Setel Ventures Sdn. Bhd.",
    period: "Jan 2021 - Aug 2021",
    highlights: [
      "Developed full-stack features for Setel's web application in a fast-paced Agile environment",
      "Contributed to both ReactJS frontend and Node.js backend modules",
      "Implemented modern software methodologies including CI/CD pipelines",
      "Followed Git-flow and unit testing practices",
      "Ensured high-quality code deployment",
    ],
  },
];

function Timeline() {
  return (
    <div id="experience" className="w-full py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-center text-4xl font-bold tracking-tight text-white md:text-6xl mb-4">
          Career <span className="text-teal-500">Timeline</span>
        </h1>
        <p className="text-zinc-500 text-center mb-20 max-w-xl mx-auto">
          A journey through enterprise data engineering, research, and software
          development.
        </p>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-teal-500 rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(20,184,166,0.5)]" />

              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-teal-500/30 transition-colors duration-300">
                  <span className="text-teal-500 text-xs font-medium tracking-wider uppercase">
                    {exp.period}
                  </span>
                  <h3 className="text-white text-xl font-bold mt-2">
                    {exp.role}
                  </h3>
                  <h4 className="text-zinc-400 text-sm mt-1">{exp.company}</h4>
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="text-zinc-400 text-sm leading-relaxed"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;