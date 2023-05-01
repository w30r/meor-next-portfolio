import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TagRoundedIcon from "@mui/icons-material/TagRounded";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import Tweets from "./components/Tweets";

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num;
}

function twitter() {
  const trends = [
    {
      title: "Hanni",
      category: "Best girl",
      numberOfTweets: 123121241,
    },
    {
      title: "Meor",
      category: "Trending",
      numberOfTweets: 100000,
    },
    {
      title: "Khairul Amogus",
      category: "Music",
      numberOfTweets: 241231,
    },
    {
      title: "Much Trend",
      category: "Lifestyle",
      numberOfTweets: 432411,
    },
    {
      title: "Riot",
      category: "Music",
      numberOfTweets: 4321231,
    },
    {
      title: "Nice",
      category: "Lifestyle",
      numberOfTweets: 4321231,
    },
    {
      title: "Bibimpapi",
      category: "E-sports",
      numberOfTweets: 4324231,
    },
    {
      title: "Skrillex",
      category: "Music",
      numberOfTweets: 1428241231,
    },
    {
      title: "Hanni New Jeans",
      category: "Trending in MyHeart",
      numberOfTweets: 1428241231,
    },
    {
      title: "Diplo",
      category: "Music",
      numberOfTweets: 14241231,
    },
    {
      title: "Deadmau5",
      category: "Music",
      numberOfTweets: 28241231,
    },
  ];

  const trendList = trends.map((trend, index) => (
    <div key={index} className="text-sm leading-tight mb-4">
      <h4 className="text-white/30 font-light text-xs">{trend.category}</h4>
      <h4 className="font-semibold">{trend.title}</h4>
      <h4 className="text-white/30 font-light text-xs">
        {formatNumber(trend.numberOfTweets) + " tweets"}
      </h4>
    </div>
  ));

  let tweetsArr = [
    {
      twthandle: "faris",
      twtusername: "frsnhzn",
      twtContent: "sup boah!",
      likes: 20,
      rts: 20,
      replies: 20,
    },
    {
      twthandle: "meor",
      twtusername: "meorsyamil",
      twtContent: "HEH??!!",
      likes: 20,
      rts: 20,
      replies: 20,
    },
  ];

  let TweetList = tweetsArr.map((x, index) => (
    <Tweets
      key={index}
      user={x.user}
      username={x.username}
      tweetContent={x.tweetContent}
    />
  ));

  return (
    <div id="main" className="flex justify-center">
      <div
        id="leftPane"
        className="flex flex-col gap-4 p-2 justify-between h-screen text-white text-opacity-80"
      >
        <div id="dudukAtas">
          <div className="mt-2">
            <TwitterIcon style={{ fontSize: 30 }} />
          </div>
          <div className="flex font-semibold items-center mt-6">
            <HomeRoundedIcon style={{ fontSize: 30 }} className="mr-2" />
            <h1>Home</h1>
          </div>
          <div className="flex font-semibold items-center mt-6">
            <TagRoundedIcon style={{ fontSize: 30 }} className="mr-2" />
            <h1>Explore</h1>
          </div>
          <div className="flex font-semibold items-center mt-6">
            <NotificationsNoneOutlinedIcon
              style={{ fontSize: 30 }}
              className="mr-2"
            />
            <h1>Notifications</h1>
          </div>
          <div className="flex font-semibold items-center mt-6">
            <EmailOutlinedIcon style={{ fontSize: 30 }} className="mr-2" />
            <h1>Messages</h1>
          </div>
          <div className="flex font-semibold items-center mt-6">
            <BookmarkBorderOutlinedIcon
              style={{ fontSize: 30 }}
              className="mr-2"
            />
            <h1>Bookmarks</h1>
          </div>
          <div className="flex font-semibold items-center mt-6">
            <PersonOutlinedIcon style={{ fontSize: 30 }} className="mr-2" />
            <h1>Profile</h1>
          </div>
          <div className="flex font-semibold items-center mt-6">
            <PendingOutlinedIcon style={{ fontSize: 30 }} className="mr-2" />
            <h1>More</h1>
          </div>
          <button
            type="button"
            className="text-white bg-[#1DA1F2] w-full mt-6 hover:bg-[#1DA1F2] focus:outline-none focus:ring-4 focus:ring-[#1DA1F2] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-[#1DA1F2] dark:hover:bg-[#1DA1F2]/80 transition-colors duration-800 dark:focus:ring-blue-800"
          >
            Tweet
          </button>
        </div>

        <div
          id="dudukBawah"
          className="flex gap-2 rounded-full hover:bg-gray-900 p-3 ease-linear transition-all duration-800 align-middle"
        >
          <div
            id="avatar"
            className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
          >
            <svg
              className="absolute w-10 h-10 text-gray-400 -left-1"
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
          <div className="flex flex-col leading-none">
            <a className="font-semibold">meor puasa (87%)</a>
            <a className="text-sm -mt-1">@meorsyamil</a>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
      </div>
      {/* MIDDLE SECTION */}
      <div id="middle" className="w-[650px] border border-white/20 mx-6">
        <h1 id="Home" className="font-bold mt-2  flex justify-start p-4">
          Home
        </h1>

        <div
          id="compose"
          className="flex p-4 border-b-[1px] border-t-[1px] border-white/20"
        >
          <div className="p-2 ml-2">
            <div
              id="avatar"
              className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
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
          <div className="text-blue-400 w-full">
            <div className="mb-6 ">
              <textarea
                type="text"
                id="composeinput"
                placeholder="What's happening?"
                className="text-white w-full resize-none p-2 ml-2 text-xl border-none bg-transparent outline-none border-gray-300 rounded-lg placeholder-white/40"
              ></textarea>
            </div>

            <div className="bg-whe/50 px-4 flex justify-between">
              <div className=" flex gap-4 items-center">
                <InsertPhotoOutlinedIcon
                  style={{ fontSize: 23 }}
                  className="cursor-pointer"
                />
                <GifBoxOutlinedIcon
                  style={{ fontSize: 23 }}
                  className="cursor-pointer"
                />
                <FormatListBulletedOutlinedIcon
                  style={{ fontSize: 23 }}
                  className="cursor-pointer"
                />
                <SentimentSatisfiedOutlinedIcon
                  style={{ fontSize: 23 }}
                  className="cursor-pointer"
                />
                <InsertInvitationOutlinedIcon
                  style={{ fontSize: 23 }}
                  className="cursor-pointer"
                />
              </div>
              <div>
                <button
                  id="tweetbuttoncompose"
                  type="button"
                  className="text-white bg-[#1DA1F2] w-full hover:bg-[#1DA1F2] focus:outline-none outline-none focus:ring-4 focus:ring-[#1DA1F2] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-[#1DA1F2] dark:hover:bg-[#1DA1F2]/80 transition-colors duration-1000 dark:focus:ring-blue-800"
                  // onClick={() => alert("Hey")}
                  // onClick={}
                >
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* TWEETS HERE! */}
        {/* <TweetList /> */}
        <Tweets
          twtContent={"Hey heyhey"}
          twthandle={"Meor"}
          twtusername={"@meorsyamil"}
        />
        <Tweets
          twtContent={"askdjaklsjd"}
          twthandle={"Faris"}
          twtusername={"@frsnzhn"}
        />
      </div>
      {/* Right SECTION */}
      <div id="rightSection" className="w-72 ">
        <div
          id="searchBar"
          className="bg-white/20 px-6 py-2 rounded-full flex gap-4 text-center items-center mt-2 "
        >
          <SearchOutlinedIcon style={{ fontSize: 20 }} />
          <span className="text-gray-300 text-sm font-light pr-16">
            Search Twitter
          </span>
        </div>
        <div className="bg-white/20 mt-3 text-xl rounded-md px-4 pt-2 py-4">
          <span className="font-bold">Trends for you</span>
          {trendList}
        </div>
      </div>
    </div>
  );
}

export default twitter;
