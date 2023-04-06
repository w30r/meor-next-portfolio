import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

function Skills() {
  return (
    <div id="skillset" className="bg-teal-900 w-screen m-6 py-4">
      <h1 className="mt-4 mb-6 text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
        Skillset
      </h1>
      <div className="font-semibold text-xs md:grid md:grid-cols-2">
        <a
          href="#skillset"
          className=" w-2/3 mx-auto block shadow-sm max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-100 dark:bg-black dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <GitHubIcon />
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Git-Version Control
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            I have experience using Git for version control in collaborative
            projects, allowing for easy tracking and management of code changes.
          </p>
        </a>

        <a
          href="#skillset"
          className="w-2/3 mx-auto block shadow-sm max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-100 dark:bg-black dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <SmartphoneIcon />
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            App Design
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            I possess app design experience that can be valuable to our digital
            projects and contribute to their success in{" "}
            <span className="text-teal-500 font-semibold">UI/UX</span>.
          </p>
        </a>

        <a
          href="#skillset"
          className="w-2/3 mx-auto block shadow-sm max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-100 dark:bg-black dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <StorageRoundedIcon />
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Back-end Development
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            My experience in Back-end Development using{" "}
            <span className="text-teal-500 font-semibold">NestJS</span> and{" "}
            <span className="text-teal-500 font-semibold">MongoDB</span> is
            valuable and relevant to this role.
          </p>
        </a>

        <a
          href="google.com"
          className="w-2/3 mx-auto  block shadow-sm max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-100 dark:bg-black dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <LanguageOutlinedIcon />
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Web Development
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            I have experience in web development with{" "}
            <span className="text-teal-500 font-semibold">
              ReactJS, NextJS, and TailwindCSS
            </span>
            , specializing in building user-friendly and responsive interfaces.
          </p>
        </a>
      </div>
    </div>
  );
}

export default Skills;
