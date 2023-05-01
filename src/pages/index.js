import Head from "next/head";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import TopBar from "./components/TopBar";
import ProfilePic from "./components/ProfilePic";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

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
                className="text-teal-500 md:text-6xl text-4xl"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
              >
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
              <h3 className="md:text-lg text-sm font-medium py-4 leading-none md:leading-none">
                Computer Engineer Graduate <p>Future Developer/Designer</p>
              </h3>
              <Intro />
              <Skills />
            </div>
          </section>
        </main>
      </html>
      <Projects />
      <ContactMe />
      <Footer />
    </motion.div>
  );
}
