import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { SocialIcon } from "react-social-icons";

function ContactMe() {
  function handleLIClick() {
    window.location.href = "https://www.linkedin.com/in/meor-syamil-59935a153/";
  }
  return (
    <div className="mt-12 mb-24 bg-teal-900 py-4">
      <div>
        <h1 className="text-center text-sm text-white font-semibold">
          Contact Us
        </h1>
        <h1 className="text-center font-semibold text-xl">
          Ways To Contact Me
        </h1>
        <h1 className="text-center leading-snug md:w-1/2 sm:w-3/4 mt-2 mx-auto px-4 text-sm">
          Please feel free to contact me via email or phone if you would like to
          learn more about me.
        </h1>
      </div>
      <div className="mt-4 flex flex-wrap place-content-center">
        <button
          type="button"
          className="text-white bg-teal-800/30 hover:bg-teal-600/90 focus:ring-4 focus:outline-none focus:ring-teal-600/50 font-mono rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-teal-600/55 mr-2 mb-2"
        >
          <EmailOutlinedIcon />
          <span className="ml-2">meor.syamil@hotmail.com</span>
        </button>
        <button
          type="button"
          className="text-white bg-teal-800/30 hover:bg-teal-600/90 focus:ring-4 focus:outline-none focus:ring-teal-600/50 font-mono rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-teal-600/55 mr-2 mb-2"
        >
          <LocalPhoneIcon />
          <span className="ml-2">019-3076344</span>
        </button>
      </div>
      <div className="flex justify-center gap-4 pt-2">
        <SocialIcon
          url="https://github.com/w30r"
          bgColor="transparent"
          fgColor="white"
        />
        <SocialIcon
          url="https://www.facebook.com/meor.syamil/"
          bgColor="transparent"
          fgColor="white"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/meor-syamil-59935a153/"
          bgColor="transparent"
          fgColor="white"
        />
      </div>
    </div>
  );
}

export default ContactMe;
