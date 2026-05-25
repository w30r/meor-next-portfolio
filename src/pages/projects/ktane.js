import Link from "next/link";
import { motion } from "framer-motion";

export default function KTANE() {
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
            <span className="text-teal-500">KTANE</span> Clone
          </h1>

          <div className="flex flex-wrap gap-2 mb-10">
            {["React", "Next.js", "Game Dev", "Puzzle", "Multiplayer"].map((tag) => (
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
              A browser-based recreation of &quot;Keep Talking and Nobody Explodes&quot;
              — a frantic party puzzle game where one player defuses a bomb
              while others decipher the manual. Built for the web so no VR
              headset required.
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
                  src="https://4pmllzkk3e.ufs.sh/f/80lTYgNxh6OahCKXwID7nHveNijwGtDz8XJa0uQqAY9EkCof"
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
                  Randomised Modules
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Every round generates a unique combination of modules, wires,
                  and puzzles — no two bombs are ever the same.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="font-semibold text-teal-400 mb-2">
                  Authentic Mechanics
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Faithful recreations of classic modules including wires,
                  buttons, keypads, morse code, and Simon Says logic.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="font-semibold text-teal-400 mb-2">
                  Local Multiplayer
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  One player on the bomb, everyone else with the manual —
                  same chaotic energy as the original, no hardware needed.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="font-semibold text-teal-400 mb-2">
                  Pressure System
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Real-time countdown timer, strike tracking, and escalating
                  difficulty that ramps up the tension with every mistake.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
