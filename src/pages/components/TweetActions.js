import React from "react";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";

function TweetActions() {
  return (
    <div id="twtActions" className="flex justify-between mt-2 text-white/50">
      <div className="hover:text-green-500 ease-in-out duration-600 transition-colors">
        <ChatBubbleOutlineOutlinedIcon style={{ fontSize: 18 }} />
        <span className="text-sm ml-3 align-middle">20</span>
      </div>
      <div className="hover:text-green-500 ease-in-out duration-600 transition-colors">
        <AutorenewOutlinedIcon style={{ fontSize: 18 }} />
        <span className="text-sm ml-3 align-middle">20</span>
      </div>
      <div className="hover:text-red-500 ease-in-out duration-600 transition-colors">
        <FavoriteBorderOutlinedIcon style={{ fontSize: 18 }} />
        <span className="text-sm ml-3 align-middle">23</span>
      </div>
      <div className="hover:text-[#1d9bf0] ease-in-out duration-600 transition-colors">
        <BarChartOutlinedIcon style={{ fontSize: 18 }} />
      </div>
      <div className="hover:text-[#1d9bf0] ease-in-out duration-600 transition-colors">
        <IosShareOutlinedIcon style={{ fontSize: 18 }} />
      </div>
    </div>
  );
}

export default TweetActions;
