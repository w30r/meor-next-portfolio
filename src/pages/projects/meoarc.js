import Link from "next/link";
import { motion } from "framer-motion";

export default function MeoARC() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-black text-white"
    >
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link
          href="/#projects"
          className="inline-flex items-center text-zinc-500 hover:text-teal-400 transition-colors mb-12 text-sm uppercase tracking-widest"
        >
          &larr; Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-teal-500">MeoARC</span>
            <span className="text-zinc-500 text-2xl md:text-3xl ml-3">
              (Enterprise)
            </span>
          </h1>

          <div className="flex flex-wrap gap-2 mb-10">
            {["Next.js", "MongoDB", "Automation", "Enterprise"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[10px] uppercase tracking-widest bg-zinc-900 border border-zinc-800 text-teal-500 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              A mission-critical asset registration system designed for
              high-scale industrial data. Engineered to solve a 90% data
              duplication issue for 500+ enterprise users.
            </p>

            <div className="mb-16 rounded-2xl overflow-hidden border border-zinc-800">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full"
              >
                <source
                  src="https://4pmllzkk3e.ufs.sh/f/80lTYgNxh6OamUVoGrPsI9ghATua14jvL85qPif2b7UBENDO"
                  type="video/mp4"
                />
              </video>
            </div>

            <h2 className="text-2xl font-bold text-white mt-16 mb-6">
              Key Features
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="font-semibold text-teal-400 mb-2">
                  Deduplication Engine
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Eliminated 90% of duplicate asset records through intelligent
                  matching algorithms, saving thousands of hours of manual data
                  cleanup.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="font-semibold text-teal-400 mb-2">
                  Enterprise Scale
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Built to handle 500+ concurrent users with real-time data
                  synchronisation and sub-second query response times.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="font-semibold text-teal-400 mb-2">
                  Automated Workflows
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Streamlined asset registration, approval pipelines, and audit
                  trails — reducing manual intervention by over 70%.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="font-semibold text-teal-400 mb-2">
                  Role-Based Access
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Granular permission controls with department-level
                  segmentation, ensuring data security and compliance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
