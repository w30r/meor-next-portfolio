import Image from "next/image";
import Link from "next/link";
import React from "react";

function Projects() {
  return (
    <div className="w-screen py-4">
      <h1 className="text-center text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
        Projects
      </h1>
      <div id="ThePROJECTS" className="px-6 flex flex-col gap-8 justify-around mt-8 text-teal-600 ">
        <div className="flex flex-col items-center ">
          <h1 className="font-semibold mb-2 underline text-sm md:text-2xl">
            AirBNB Clone
          </h1>
          <Image
            src={"/abnb.png"}
            alt=""
            width={1920}
            height={1080}
            className="w-[400px] h-[225px] md:w-[800px] md:h-[450px] rounded-[20px] border-4 border-teal-600/50 hover:shadow-lg shadow-teal-600/70 hover:border-teal-600/90 duration-150  "
          />
          <Link
            href="/Airbnb"
            className=" bg-teal-600/20 text-white hover:bg-teal-600/40 duration-150 font-semibold border-[1px] border-teal-600/50 p-3 md:p-4 md:text-sm text-xs mt-4 rounded-xl"
          >
            Check out AirBNB clone
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold mb-2 underline text-sm md:text-2xl">
            Twitter Clone
          </h1>
          <Image
            src={"/twtr.png"}
            alt=""
            width={1920}
            height={1080}
            className="w-[400px] h-[225px] md:w-[800px] md:h-[450px] rounded-[20px] border-4 border-teal-600/50 hover:shadow-lg shadow-teal-600/70 hover:border-teal-600/90 duration-150  "
          />
          <Link
            href="/twitter"
            className=" bg-teal-600/20 text-white hover:bg-teal-600/40 duration-150 font-semibold border-[1px] border-teal-600/50 p-3 md:p-4 md:text-sm text-xs mt-4 rounded-xl"
          >
            Check out Twitter clone
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
