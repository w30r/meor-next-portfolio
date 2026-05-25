import Link from "next/link";
import { motion } from "framer-motion";

export default function Envoice() {
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
            <span className="text-teal-500">Envoice.my</span>
          </h1>

          <div className="flex flex-wrap gap-2 mb-10">
            {["Next.js", "MongoDB", "LHDN", "E-Invoice", "MyInvois"].map((tag) => (
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
              A comprehensive e-invoicing solution fully compliant with LHDN
              (Malaysian Inland Revenue Board) requirements. Envoice automates
              the entire invoicing lifecycle — from generation and validation to
              secure submission via the MyInvois portal.
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
                  src="https://4pmllzkk3e.ufs.sh/f/80lTYgNxh6OauY31OdgGUVSBXOa8ZRj9bM1z07kcJYmD6qNi"
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
                  LHDN Compliance
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Built to meet every requirement of LHDN&apos;s e-invoice mandate,
                  ensuring your business stays compliant with Malaysian tax
                  regulations.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="font-semibold text-teal-400 mb-2">
                  MyInvois Integration
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Seamless submission to the MyInvois portal with real-time
                  validation, status tracking, and error handling.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="font-semibold text-teal-400 mb-2">
                  Automated Workflow
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  From invoice generation to submission, the entire pipeline is
                  automated — reducing manual effort and minimising errors.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="font-semibold text-teal-400 mb-2">
                  Scalable Architecture
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Built on Next.js and MongoDB to handle high-volume invoicing
                  for businesses of any size, from SMEs to large enterprises.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
