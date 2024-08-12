import React from "react";
import ImageOne from "../assets/one.jpg";
import ImageTow from "../assets/tow.jpg";
import Imagethree from "../assets/three.jpg";
import ImageFour from "../assets/four.jpg";
import lap from "../assets/lap.jpg";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt, FaShareAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";

import Slider from "react-slick";
import Privearrows from "../icons/Privearrows";
import Nextarrow from "../icons/Nextarrow";
const data = [
  {
    id: 1,
    img: ImageOne,
    title:
      "Any fool can write code that a computer can understand. Good programmers write code that...",
    had: "Techbez",
    dat: "Sep 06 2023",
  },
  {
    id: 2,
    img: ImageTow,
    title:
      "Any fool can write code that a computer can understand. Good programmers write code that...",
    had: "Techbez",
    dat: "Sep 06 2023",
  },
  {
    id: 3,
    img: Imagethree,
    title:
      "Any fool can write code that a computer can understand. Good programmers write code that...",
    had: "Techbez",
    dat: "Sep 06 2023",
  },
  {
    id: 4,
    img: ImageFour,
    title:
      "Any fool can write code that a computer can understand. Good programmers write code that...",
    had: "Techbez",
    dat: "Sep 06 2023",
  },
];
const Damoone = () => {
  var settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <Privearrows />,
    nextArrow: <Nextarrow />,
    rtl: true,
  };
  return (
    <>
    {/* demo one start  */}
      <div className="bg-[#F7F7F7]">
        <div className="w-[1450px] mx-auto ">
       <div className=" ">
       <h1 className="text-center pt-10 font-bold font-sans text-3xl ">
            Carousel Demo - 1
          </h1>
       </div>

          <div className=" gap-5 py-20  ">
            <Slider {...settings}>
              {data.map((itms) => (
                <div className="w-[350px] group  ">
                  <div className="group-hover:scale-105 transition-all ">
                    <div className="p-5 bg-white  rounded-lg ">
                      <div className="flex justify-between">
                        <div className="flex gap-3 pb-5">
                          <img
                            className="rounded-3xl w-[50px] h-[50px]"
                            src={lap}
                            alt=""
                          />
                          <div className="pb-2">
                            <h2 className="font-bold text-lg text-blue-900">
                              {itms.had}
                            </h2>
                            <p className="text-gray-400 text-[14px] font-semibold">
                              {itms.dat}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="bg-blue-600 h-9 w-9 flex items-center rounded-lg ">
                            <AiFillLike className=" mx-auto  text-base text-white" />
                          </div>
                          <div className="bg-blue-600 h-9 flex items-center w-9 rounded-lg ">
                            <FaCommentAlt className=" mx-auto text-base text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <p className="py-3 text-gray-400 text-sm">
                          {itms.title}
                        </p>
                        <div className=" flex justify-between items-center">
                          <div className="flex gap-2 items-center">
                            <p className="text-gray-400 text-base font-semibold">
                              See More{" "}
                            </p>
                            <FaArrowRight className="text-gray-400 text-base mt-1" />
                          </div>

                          <div className="bg-slate-300 h-8 flex items-center w-8 rounded-lg ">
                            <FaShareAlt className=" mx-auto text-sm text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="w-full h-[270px]  rounded-b-lg"
                      src={itms.img}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* demo one end  */}
      
    </>
  );
};

export default Damoone;
