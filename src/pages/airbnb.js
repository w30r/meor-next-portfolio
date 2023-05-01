import Image from "next/image";
import React, { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import CurtainsOutlinedIcon from "@mui/icons-material/CurtainsOutlined";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import PoolIcon from "@mui/icons-material/Pool";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import CabinIcon from "@mui/icons-material/Cabin";
import VillaIcon from "@mui/icons-material/Villa";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import SearchIcon from "@mui/icons-material/Search";
import StarRateIcon from "@mui/icons-material/StarRate";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRouter } from "next/router";

function airbnb() {
  const router = useRouter();

  function handleClickBNBs() {
    router.push("/airbnbb");
  }

  const pics = [
    "https://a0.muscache.com/im/pictures/miso/Hosting-618027888534521224/original/0c8b309d-ba89-45ff-b1fe-3679b9b87571.jpeg",
    "https://a0.muscache.com/im/pictures/6a53fb5f-1bbc-4728-96de-17e9fe8780f3.jpg",
  ];

  const logoURL =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png";
  const avatarURL =
    "https://a0.muscache.com/im/pictures/user/5013a3cc-c783-493b-950a-34c236c03f9c.jpg";

  const categories = [
    {
      text: "Tropical",
      icon: <ForestOutlinedIcon />,
    },
    {
      text: "Views",
      icon: <CurtainsOutlinedIcon />,
    },
    {
      text: "Eateries",
      icon: <RamenDiningIcon />,
    },
    {
      text: "Pools",
      icon: <PoolIcon />,
    },
    {
      text: "Beach",
      icon: <BeachAccessIcon />,
    },
    {
      text: "Eateries",
      icon: <RamenDiningIcon />,
    },
    {
      text: "Pools",
      icon: <PoolIcon />,
    },
    {
      text: "Beach",
      icon: <BeachAccessIcon />,
    },
    {
      text: "Eateries",
      icon: <RamenDiningIcon />,
    },
    {
      text: "Pools",
      icon: <PoolIcon />,
    },
    {
      text: "Villa",
      icon: <VillaIcon />,
    },
    {
      text: "Cabin",
      icon: <CabinIcon />,
    },
    {
      text: "Skiing",
      icon: <DownhillSkiingIcon />,
    },
    {
      text: "Trending",
      icon: <WhatshotIcon />,
    },
    {
      text: "Tropical",
      icon: <ForestOutlinedIcon />,
    },
    {
      text: "Views",
      icon: <CurtainsOutlinedIcon />,
    },
    {
      text: "Eateries",
      icon: <RamenDiningIcon />,
    },
    {
      text: "Pools",
      icon: <PoolIcon />,
    },
    {
      text: "Beach",
      icon: <BeachAccessIcon />,
    },
    {
      text: "Eateries",
      icon: <RamenDiningIcon />,
    },
    {
      text: "Pools",
      icon: <PoolIcon />,
    },
    {
      text: "Beach",
      icon: <BeachAccessIcon />,
    },
    {
      text: "Eateries",
      icon: <RamenDiningIcon />,
    },
    {
      text: "Pools",
      icon: <PoolIcon />,
    },
    {
      text: "Villa",
      icon: <VillaIcon />,
    },
    {
      text: "Cabin",
      icon: <CabinIcon />,
    },
    {
      text: "Skiing",
      icon: <DownhillSkiingIcon />,
    },
    {
      text: "Trending",
      icon: <WhatshotIcon />,
    },
  ];

  const bnbs = [
    {
      img: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-618027888534521224/original/0c8b309d-ba89-45ff-b1fe-3679b9b87571.jpeg",
      ],
      dist: 654,
      price: 23000,
      star: 2,
      place: "Naithon Beach, Thailand",
    },
    {
      img: [
        "https://a0.muscache.com/im/pictures/6a53fb5f-1bbc-4728-96de-17e9fe8780f3.jpg",
      ],
      dist: 654,
      price: 23000,
      star: 2,
      place: "Thalang, Thailand",
    },
    {
      img: [
        "https://a0.muscache.com/im/pictures/62ab36a7-1557-4082-9d38-551bb701fd35.jpg",
      ],
      dist: 654,
      price: 4572,
      star: 2,
      place: " Ratsada, ThaTamboniland",
    },
    {
      img: [
        "https://a0.muscache.com/im/pictures/3f6d32c3-4e3c-41ec-9b1d-3ba4f6e6fb5f.jpg",
      ],
      dist: 65,
      price: 69420,
      star: 2,
      place: "Naithon Beach, Thailand",
    },
    {
      img: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-618027888534521224/original/0c8b309d-ba89-45ff-b1fe-3679b9b87571.jpeg",
      ],
      dist: 654,
      price: 23000,
      star: 2,
      place: "Naithon Beach, Thailand",
    },
    {
      img: [
        "https://a0.muscache.com/im/pictures/6a53fb5f-1bbc-4728-96de-17e9fe8780f3.jpg",
      ],
      dist: 654,
      price: 23000,
      star: 2,
      place: "Thalang, Thailand",
    },
    {
      img: [
        "https://a0.muscache.com/im/pictures/62ab36a7-1557-4082-9d38-551bb701fd35.jpg",
      ],
      dist: 654,
      price: 4572,
      star: 2,
      place: " Ratsada, ThaTamboniland",
    },
    {
      img: [
        "https://a0.muscache.com/im/pictures/3f6d32c3-4e3c-41ec-9b1d-3ba4f6e6fb5f.jpg",
      ],
      dist: 65,
      price: 69420,
      star: 2,
      place: "Naithon Beach, Thailand",
    },
    {
      img: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-618027888534521224/original/0c8b309d-ba89-45ff-b1fe-3679b9b87571.jpeg",
      ],
      dist: 654,
      price: 23000,
      star: 2,
      place: "Naithon Beach, Thailand",
    },
    {
      img: [
        "https://a0.muscache.com/im/pictures/6a53fb5f-1bbc-4728-96de-17e9fe8780f3.jpg",
      ],
      dist: 654,
      price: 23000,
      star: 2,
      place: "Thalang, Thailand",
    },
    {
      img: [
        "https://a0.muscache.com/im/pictures/62ab36a7-1557-4082-9d38-551bb701fd35.jpg",
      ],
      dist: 654,
      price: 4572,
      star: 2,
      place: " Ratsada, ThaTamboniland",
    },
    {
      img: [
        "https://a0.muscache.com/im/pictures/3f6d32c3-4e3c-41ec-9b1d-3ba4f6e6fb5f.jpg",
      ],
      dist: 65,
      price: 69420,
      star: 2,
      place: "Naithon Beach, Thailand",
    },
    {
      img: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-618027888534521224/original/0c8b309d-ba89-45ff-b1fe-3679b9b87571.jpeg",
      ],
      dist: 654,
      price: 23000,
      star: 2,
      place: "Naithon Beach, Thailand",
    },
    {
      img: [
        "https://a0.muscache.com/im/pictures/6a53fb5f-1bbc-4728-96de-17e9fe8780f3.jpg",
      ],
      dist: 654,
      price: 23000,
      star: 2,
      place: "Thalang, Thailand",
    },
    {
      img: [
        "https://a0.muscache.com/im/pictures/62ab36a7-1557-4082-9d38-551bb701fd35.jpg",
      ],
      dist: 654,
      price: 4572,
      star: 2,
      place: " Ratsada, ThaTamboniland",
    },
    {
      img: [
        "https://a0.muscache.com/im/pictures/3f6d32c3-4e3c-41ec-9b1d-3ba4f6e6fb5f.jpg",
      ],
      dist: 65,
      price: 69420,
      star: 2,
      place: "Naithon Beach, Thailand",
    },
    {
      img: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-618027888534521224/original/0c8b309d-ba89-45ff-b1fe-3679b9b87571.jpeg",
      ],
      dist: 654,
      price: 23000,
      star: 2,
      place: "Naithon Beach, Thailand",
    },
    {
      img: [
        "https://a0.muscache.com/im/pictures/6a53fb5f-1bbc-4728-96de-17e9fe8780f3.jpg",
      ],
      dist: 654,
      price: 23000,
      star: 2,
      place: "Thalang, Thailand",
    },
    {
      img: [
        "https://a0.muscache.com/im/pictures/62ab36a7-1557-4082-9d38-551bb701fd35.jpg",
      ],
      dist: 654,
      price: 4572,
      star: 2,
      place: " Ratsada, ThaTamboniland",
    },
    {
      img: [
        "https://a0.muscache.com/im/pictures/3f6d32c3-4e3c-41ec-9b1d-3ba4f6e6fb5f.jpg",
      ],
      dist: 65,
      price: 69420,
      star: 2,
      place: "Naithon Beach, Thailand",
    },
  ];

  function scrollToRight() {
    const container = document.getElementById("FILTERS");
    container.scrollLeft += 400; // scroll 100 pixels to the right
  }
  function scrollToLeft() {
    const container = document.getElementById("FILTERS");
    container.scrollLeft -= 400; // scroll 100 pixels to the right
  }

  return (
    <div id="FATHER" className="bg-white">
      <div
        id="navbar"
        className="flex justify-between  h-[70px] border-b-[1px] border-gray-400/20 px-4"
      >
        <div className=" flex items-center">
          <div className=" p-4  cursor-pointer">
            <Image src={logoURL} width={100} height={80} alt="logo" />
          </div>
        </div>
        <div
          id="MID"
          className="text-black flex border shadow-md hover:shadow-black/50 duration-200 my-auto items-center px-6 rounded-full h-10 text-xs gap-4"
        >
          <h1 className="font-semibold">Anywhere</h1>
          <h1 className="border-stone-500/30 px-4 py-[5px] border-r-[1px] border-l-[1px] font-semibold">
            Any week
          </h1>
          <h1 className="text-black/40">Add guest</h1>
          <div className="bg-red-500 p-2 rounded-full flex items-center">
            <SearchIcon fontSize="x-small" className="text-white" />
          </div>
        </div>
        <div id="right" className="flex items-center">
          <h1 className="text-xs hover:bg-stone-400/20 font-semibold px-4 py-2 rounded-full align-middle cursor-pointer">
            Airbnb your home
          </h1>
          <div className="hover:bg-stone-400/20 px-2 py-1 rounded-full mr-2 cursor-pointer">
            <LanguageIcon fontSize="x-small" />
          </div>
          <div className="flex py-1 px-3 rounded-full hover:shadow-md gap-2 items-center border-[1px] border-black/20 cursor-pointer">
            <MenuIcon fontSize="x-small" />
            <Image
              src={avatarURL}
              width={40}
              height={40}
              alt="avatar"
              className="w-[30px] h-[30px] rounded-full"
            />
            <span class="top-3 right-7 absolute  w-3 h-3 bg-red-500 border-2 border-white dark:border-gray-200 rounded-full"></span>
          </div>
        </div>
      </div>
      <div
        id="FILTERS"
        className="flex text-black/50 text-xs bg-blpck/20 py-4 px-8 gap-4 overflow-auto scrollbar-hide "
      >
        <div className="bg-white h-12 w-12">
          <div className="bg-white p-2 rounded-full border-black/50 border-[1px] my-auto flex items-center absolute cursor-pointer left-6 top-[110px] ">
            <ChevronLeftIcon
              fontSize="small"
              className="text-black"
              onClick={() => scrollToLeft()}
            />
          </div>
          <div className="bg-white p-2 rounded-full border-black/50 border-[1px] my-auto flex items-center absolute cursor-pointer right-6 top-[110px] ">
            <ChevronRightIcon
              fontSize="small"
              className="text-black"
              onClick={() => scrollToRight()}
            />
          </div>
        </div>
        <div
          id="CHOSEN"
          className="flex flex-col items-center text-black duration-200 ease-in cursor-pointer py-4 px-4 border-b-2 border-black"
        >
          <BeachAccessIcon />
          <h1>Beach</h1>
        </div>
        {categories.map((x, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:text-black duration-100 ease-in cursor-pointer py-4 px-4 border-b-2 border-black/0  hover:border-black/20"
          >
            {x.icon}
            <h1>{x.text}</h1>
          </div>
        ))}
      </div>
      <div
        id="BNBS"
        className="py-6 px-6 flex flex-wrap gap-4 justify-center text-black"
      >
        <div>
          <FavoriteTwoToneIcon className="absolute z-50 m-4 cursor-pointer" />
          <Image
            src={pics[1]}
            alt=""
            width={800}
            height={800}
            className="w-[280px] h-[260px] rounded-xl hover:shadow-lg duration-300 hover:shadow-black/50"
          />
          {/* <button onClick={() => setI(i + 1)}>next</button>
          <button onClick={() => setI(i - 1)}>prev</button> */}
          <div className="mt-2 text-sm">
            <div className="flex justify-between">
              <h1 className="font-semibold ">{"Carousel"}</h1>
              <div className="flex items-center gap-1">
                <StarRateIcon fontSize="x-small text-red-500" />
                <h1>5.0</h1>
              </div>
            </div>
            <h1 className="text-black/60">80 kilometers away</h1>
            <h1 className="text-black/60">Jul 9 - 15</h1>
            <div className="flex mt-1">
              <h1 className="font-semibold mr-1">RM2,433</h1>
              <p>night</p>
            </div>
          </div>
        </div>
        {bnbs.map((x, index) => (
          <div key={index}>
            <FavoriteTwoToneIcon className="absolute z-50 m-4 cursor-pointer" />
            <Image
              src={x.img.toString()}
              alt=""
              width={800}
              height={800}
              className="w-[280px] h-[260px] rounded-xl hover:shadow-lg duration-300 hover:shadow-black/50"
              onClick={handleClickBNBs}
            />
            <div className="mt-2 text-sm">
              <div className="flex justify-between">
                <h1 className="font-semibold ">{x.place}</h1>
                <div className="flex items-center gap-1">
                  <StarRateIcon fontSize="x-small text-red-500" />
                  <h1>5.0</h1>
                </div>
              </div>
              <h1 className="text-black/60">{x.dist} kilometers away</h1>
              <h1 className="text-black/60">Jul 9 - 15</h1>
              <div className="flex mt-1">
                <h1 className="font-semibold mr-1">
                  RM{x.price.toLocaleString()}
                </h1>
                <p>night</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default airbnb;
