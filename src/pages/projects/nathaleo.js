import Link from "next/link";
import { motion } from "framer-motion";

export default function NathaleoSync() {
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
            <span className="text-teal-500">Nathaleo</span> Sync
          </h1>

          <div className="flex flex-wrap gap-2 mb-10">
            {["Next.js", "Tailwind CSS", "Framer Motion", "API"].map((tag) => (
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
              Mobile-first movie discovery platform featuring swipe-based logic
              and TMDB API integration. Built for seamless real-time
              synchronisation between users.
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
                  src="https://4pmllzkk3e.ufs.sh/f/80lTYgNxh6OaFZHDRahiyD28X6GdzrPvcoSEsT517VZNMpFt"
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
                  Swipe-Based Discovery
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Tinder-style swipe interface for browsing movies — swipe right
                  to like, left to pass. Fast, intuitive, and addictive.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="font-semibold text-teal-400 mb-2">
                  Real-Time Sync
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Matches and activity sync instantly across devices, enabling
                  seamless group movie planning with friends.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="font-semibold text-teal-400 mb-2">
                  TMDB Integration
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Rich movie data powered by the TMDB API — posters, ratings,
                  synopses, trailers, and cast info on every swipe.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="font-semibold text-teal-400 mb-2">
                  Mobile-First Design
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Optimised for mobile with fluid gestures, responsive layouts,
                  and smooth animations powered by Framer Motion.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
