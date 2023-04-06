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
