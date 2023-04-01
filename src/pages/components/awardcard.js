import React from "react";
import { SocialIcon } from "react-social-icons";

const AwardCard = () => (
  <div className="grid grid-cols-2 justify-items-center">
    <div className="lg:w-2/3 col-span-2 outline outline-offset-1 outline-teal-400/30 rounded-2xl p-6 mb-6 hover:translate-x-1 transition-all hover:outline-blue-400 duration-400">
      <div>
        <h3 className="text-xl text-white font-medium">
          UTP DSC Hackaton 2021
        </h3>
        {/* <p className="text-gray-200 my-2 leading-none">
          By introducing the notion of an all-in-one application for students,
          We was able to participate in and win 2nd Runner Up in the first ever
          hackathon competition hosted by UTP's Developer Student Club
        </p> */}
      </div>
    </div>
  </div>
);

export default AwardCard;
