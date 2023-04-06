import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

function Skills() {
  return (
    <div className="bg-teal-900 w-screen m-6 py-4">
      <h1 className="mt-4 mb-6 text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
        Skillset
      </h1>
      <div className="font-semibold text-xs grid grid-cols-2">
        {/* <div>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-visible text-sm font-light  text-gray-900 rounded-lg group bg-gradient-to-br from-teal-600 to-blue-500 group-hover:from-teal-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            TypeScript
          </span>
          <div class="absolute inline-flex items-center justify-center w-12 h-6 text-xs font-light text-white bg-cyan-700 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
            80%
          </div>
        </button>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-visible text-sm font-light  text-gray-900 rounded-lg group bg-gradient-to-br from-teal-600 to-blue-500 group-hover:from-teal-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Python
          </span>
          <div class="absolute inline-flex items-center justify-center w-12 h-6 text-xs font-light text-white bg-cyan-700 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
            85%
          </div>
        </button>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-visible text-sm font-light  text-gray-900 rounded-lg group bg-gradient-to-br from-teal-600 to-blue-500 group-hover:from-teal-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            JavaScript
          </span>
          <div class="absolute inline-flex items-center justify-center w-12 h-6 text-xs font-light text-white bg-cyan-700 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
            95%
          </div>
        </button>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-visible text-sm font-light  text-gray-900 rounded-lg group bg-gradient-to-br from-teal-600 to-blue-500 group-hover:from-teal-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            RStudio
          </span>
          <div class="absolute inline-flex items-center justify-center w-12 h-6 text-xs font-light text-white bg-cyan-900 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
            30%
          </div>
        </button>
        </div> */}
        <a
          href="#"
          className=" w-2/3 mx-auto  block shadow-sm max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-100 dark:bg-black dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <GitHubIcon />
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Git-Version Control
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>

        <a
          href="#"
          className="w-2/3 mx-auto  block shadow-sm max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-100 dark:bg-black dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <SmartphoneIcon />
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            App Design
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>

        <a
          href="#"
          className="w-2/3 mx-auto  block shadow-sm max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-100 dark:bg-black dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <StorageRoundedIcon />
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Back-end Development
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
        
        <a
          href="#"
          className="w-2/3 mx-auto  block shadow-sm max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-100 dark:bg-black dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <LanguageOutlinedIcon />
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Web Development
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
      </div>
    </div>
  );
}

export default Skills;
