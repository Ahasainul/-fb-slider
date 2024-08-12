import React from "react";
import ImageOne from '../assets/one.jpg'
import ImageTow from '../assets/tow.jpg'
import Imagethree from '../assets/three.jpg'
import ImageFour from '../assets/four.jpg'
import lap from '../assets/lap.jpg'
const data = [
    {
      id: 1,
      img:ImageOne ,
      title: "Any fool can write code that a computer can understand. Good programmers write code that...",
    },
    {
      id: 2,
      img: ImageTow,
      title: "Any fool can write code that a computer can understand. Good programmers write code that...",
     
    },
    {
      id: 3,
      img: Imagethree,
      title: "Any fool can write code that a computer can understand. Good programmers write code that...",
     
    },
    {
      id: 4,
      img: ImageFour,
      title: "Any fool can write code that a computer can understand. Good programmers write code that...",
     
    },
  ];
const Damoone = () => {
  return (
    <>
     <div className="bg-[#F7F7F7]">
     <div className="w-[1450px] mx-auto">
        <h1 className="text-center pt-10 font-bold font-sans text-3xl">
          Carousel Demo - 1
        </h1>
        <div className="">
            {data.map((itms)=>(
                <div className="w-[350px]">
                    <div className="">
                        <div className="">
                            <img src={lap} alt="" />

                        </div>

                    </div>
                    <img className="w-full" src={itms.img} alt="" />
                </div>
            ))}

            
        </div>
      </div>
     </div>
    </>
  );
};

export default Damoone;
