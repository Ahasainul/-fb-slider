import React from "react";
import lap from "../assets/lap.jpg";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt, FaShareAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";

import Slider from "react-slick";
import Privearrows from "../icons/Privearrows";
import Nextarrow from "../icons/Nextarrow";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    id: 1,
    title:
      "Any fool can write code that a computer can understand. Good programmers write code that...",
    had: "Techbez",
    dat: "Sep 06 2023",
  },
  {
    id: 2,

    title:
      "Any fool can write code that a computer can understand. Good programmers write code that...",
    had: "Techbez",
    dat: "Sep 06 2023",
  },
  {
    id: 3,

    title:
      "Any fool can write code that a computer can understand. Good programmers write code that...",
    had: "Techbez",
    dat: "Sep 06 2023",
  },
  {
    id: 4,
    title:
      "Any fool can write code that a computer can understand. Good programmers write code that...",
    had: "Techbez",
    dat: "Sep 06 2023",
  },
];
const Damothree = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <Privearrows />,
    nextArrow: <Nextarrow />,
    rtl: true,
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="py-20 bg-black">
        <div className="">
          <h1 className="text-center pt-10 font-bold text-white   text-3xl pb-20">
            Carousel Demo - 2
          </h1>
        </div>
        <div className=" gap-5 py-20  w-[1450px] mx-auto   ">
          <Slider {...settings}>
            {data.map((itms) => (
              <div className="w-[350px] group  ">
                <div className=" transition-all ">
                  <div className="p-5 one  rounded-lg ">
                    <div className="flex justify-between">
                      <div className="flex gap-3 pb-5">
                        <img
                          className="rounded-3xl w-[50px] h-[50px]"
                          src={lap}
                          alt=""
                        />
                        <div className="pb-2">
                          <h2
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-dalay="300"
                            className="font-bold text-lg text-white"
                          >
                            {itms.had}
                          </h2>
                          <p
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-dalay="300"
                            className=" text-white text-[14px] font-semibold"
                          >
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
                      <p
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-dalay="300"
                        className="py-3    text-white text-sm"
                      >
                        {itms.title}
                      </p>
                      <div className=" flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                          <p className=" text-whitetext-base font-semibold">
                            See More{" "}
                          </p>
                          <FaArrowRight className="text-gray-400 text-base mt-1" />
                        </div>

                        <div className="bg-slate-300 h-8 flex items-center w-8 rounded-lg ">
                          <FaShareAlt className=" mx-auto text-sm text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Damothree;
