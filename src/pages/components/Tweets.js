import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TweetActions from "./TweetActions";
import { PropaneSharp } from "@mui/icons-material";

function Tweets(props) {
  return (
    <div
      id="aTwt"
      className="flex justify-between mt-2 border-b-[1px] border-white/20 pb-4"
    >
      <div id="leftAvataraTwt" className="w-24">
        <div className="flex justify-center mt-2">
          <div
            id="avatar"
            className="relative w-10 h-10 overflow-hidden bg-gray-100  rounded-full dark:bg-gray-600"
          >
            <svg
              className="absolute w-12 h-12 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div id="midTwtaTwt" className="w-full ">
        <div id="tweetAuthor" className="flex items-center">
          <a className="font-semibold">{props.twthandle}</a>
          <VerifiedIcon
            style={{ fontSize: 18 }}
            className="text-[#1d9bf0] ml-1"
          />
          <a className="font-light text-white/60 text-sm ml-1">
            {props.twtusername}
          </a>
          <a className="font-light ml-2 text-xs text-white/60">8m</a>
        </div>
        <div id="tweetContent">
          <a>{props.twtContent}</a>
        </div>
        <TweetActions />
      </div>
      <div
        id="rightMoreaTwt"
        className="w-24 text-white/50 flex justify-center mt-4"
      >
        <MoreHorizIcon style={{ fontSize: 18 }} />
      </div>
    </div>
  );
}

export default Tweets;
