import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Card from "./components/card";
import AwardCard from "./components/awardcard";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import TopBar from "./components/TopBar";
import ProfilePic from "./components/ProfilePic";
import Intro from "./components/Intro";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      animate={{ opacity: 1 }}
    >
      <html className="scroll-smooth">
        <Head>
          <title>developedbymeor</title>
          <meta name="description" content="Created by meor" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className=" bg-black px-10">
          <section className="min-h-screen">
            <TopBar />
            <ProfilePic />
            <div className="text-center flex items-center flex-col mt-6">
              <h1 className="text-xs md:text-lg">My name is</h1>
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
              >
                <motion.h1 className="text-teal-500 md:text-6xl text-4xl">
                  <TypeAnimation
                    sequence={[
                      "Meor :)", // Types 'One'
                      1000, // Waits 1s
                      "Syamil!", // Deletes 'One' and types 'Two'
                      1000, // Waits 2s
                      "Meor Syamil.", // Types 'Three' without deleting 'Two'
                      3000,
                    ]}
                    repeat={Infinity}
                  />
                </motion.h1>
              </motion.h1>
              <h3 className="md:text-lg text-sm font-medium py-4 leading-none md:leading-none">
                Computer Engineer Graduate <p>Future Developer/Designer</p>
              </h3>
              <Intro />
              <Skills />
            </div>
          </section>

          {/* <section>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              <div>
                <div className="whitespace-no-wrap">
                  <h3 className="text-center text-3xl py-1 font-semibold my-4">
                    My Experiences 🛠
                  </h3>
                </div>
                <div>
                  <Card />
                </div>
              </div>
            </motion.div>
          </section> */}

          {/* <section>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              <div className="whitespace-no-wrap">
                <h3 className="text-center text-3xl py-1 font-semibold my-4">
                  Award(s) + Achievements 🥇
                </h3>
              </div>

              <div>
                <AwardCard />
              </div>
            </motion.div>
          </section> */}
        </main>
      </html>

      <footer className=" px-4 bg-white rounded-lg shadow m-6 dark:bg-black">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-teal-700 sm:text-center dark:text-teal-700">
            © 2023{" "}
            <a
              href="https://google.com/"
              className="hover:underline font-semibold"
            >
              developedbymeor
            </a>
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-white sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </motion.div>
  );
}
