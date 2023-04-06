import React from "react";

function Skills() {
  return (
    <div className="bg-teal-900 w-screen m-6 py-4">
      <h1 className="mt-4 mb-6 text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
        Skillset
      </h1>
      <div className="font-semibold text-xs flex flex-wrap justify-center items-center">
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
      </div>
    </div>
  );
}

export default Skills;
