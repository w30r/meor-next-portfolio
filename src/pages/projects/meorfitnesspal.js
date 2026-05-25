import Link from "next/link";
import { motion } from "framer-motion";

export default function MeorFitnessPal() {
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
            <span className="text-teal-500">MeorFitnessPal</span>
          </h1>

          <div className="flex flex-wrap gap-2 mb-10">
            {["React", "Express", "MongoDB", "Node.js", "AI/ML", "Cloud Storage"].map((tag) => (
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
              A comprehensive health suite featuring automated macro-tracking,
              dynamic workout logging, and progress visualization. Now enhanced
              with AI-powered meal recommendations and smart workout optimisation
              based on user history and goals.
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
                  src="https://4pmllzkk3e.ufs.sh/f/80lTYgNxh6Oab1D7BW4VRSixg9lCymcOdz1rp0Ls5Bn2DYjT"
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
                  AI Meal Recommendations
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Machine learning models analyse your eating patterns, goals,
                  and preferences to suggest personalised meals that fit your
                  macros.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="font-semibold text-teal-400 mb-2">
                  Smart Workout Optimisation
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  AI-driven workout plans that adapt to your progress, recovery
                  data, and performance trends — every session is tailored to
                  you.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="font-semibold text-teal-400 mb-2">
                  Automated Macro Tracking
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Log meals once and let the system auto-calculate calories,
                  protein, carbs, and fat with high-performance data indexing.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="font-semibold text-teal-400 mb-2">
                  Progress Visualization
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Interactive charts and dashboards that track weight, strength
                  gains, body measurements, and nutrition trends over time.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
