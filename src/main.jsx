import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// import React from "react";
// import laptop from "../assets/lap.jpg";
// import ImageOne from "../assets/one.jpg";
// import ImageTow from "../assets/tow.jpg";
// import Imagethree from "../assets/three.jpg";
// import ImageFour from "../assets/four.jpg";
// import lap from "../assets/lap.jpg";
// import { AiFillLike } from "react-icons/ai";
// import { FaCommentAlt, FaShareAlt } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa6";
// import "slick-carousel/slick/slick.css";

// import Slider from "react-slick";
// const data = [
//   {
//     id: 1,
//     title:
//       "Any fool can write code that a computer can understand. Good programmers write code that...",
//     had: "Techbez",
//     dat: "Sep 06 2023",
//   },
//   {
//     id: 2,

//     title:
//       "Any fool can write code that a computer can understand. Good programmers write code that...",
//     had: "Techbez",
//     dat: "Sep 06 2023",
//   },
//   {
//     id: 3,

//     title:
//       "Any fool can write code that a computer can understand. Good programmers write code that...",
//     had: "Techbez",
//     dat: "Sep 06 2023",
//   },
//   {
//     id: 4,
//     title:
//       "Any fool can write code that a computer can understand. Good programmers write code that...",
//     had: "Techbez",
//     dat: "Sep 06 2023",
//   },
// ];
// const DemoTow = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1, appendDots: dots => (
//       <div
//         style={{
//           backgroundColor: "#ddd",
//           borderRadius: "10px",
//           padding: "10px",
         
//         }}
//       >
//         <ul style={{ margin: "0px" }}> {dots} </ul>
//       </div>
//     ),
//     customPaging: i => (
//       <div
//         style={{
//           width: "30px",
//           color: "blue",
//           border: "1px blue solid",
         
//         }}
//       >
//         {i + 1}
//       </div>
//     )
  
//       };
//   return (
//     <>
//       <div className="">
//         <div className="">
//           <h1 className="text-center pt-10 font-bold text-white font-sans text-3xl">
//             Carousel Demo - 1
//           </h1>
//         </div>
//         <div className=" w-[1450px] mx-auto">
//           <Slider {...settings}>
//             {data.map((itms) => (
//               <div className="w-[350px]">
//                 <div className="group-hover:scale-105 transition-all ">
//                   <div className="p-5 bg-white  rounded-lg ">
//                     <div className="flex justify-between">
//                       <div className="flex gap-3 pb-5">
//                         <img
//                           className="rounded-3xl w-[50px] h-[50px]"
//                           src={lap}
//                           alt=""
//                         />
//                         <div className="pb-2">
//                           <h2 className="font-bold text-lg text-blue-900">
//                             {itms.had}
//                           </h2>
//                           <p className="text-gray-400 text-[14px] font-semibold">
//                             {itms.dat}
//                           </p>
//                         </div>
//                       </div>
//                       <div className="flex gap-2">
//                         <div className="bg-blue-600 h-9 w-9 flex items-center rounded-lg ">
//                           <AiFillLike className=" mx-auto  text-base text-white" />
//                         </div>
//                         <div className="bg-blue-600 h-9 flex items-center w-9 rounded-lg ">
//                           <FaCommentAlt className=" mx-auto text-base text-white" />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="">
//                       <p className="py-3 text-gray-400 text-sm">{itms.title}</p>
//                       <div className=" flex justify-between items-center">
//                         <div className="flex gap-2 items-center">
//                           <p className="text-gray-400 text-base font-semibold">
//                             See More{" "}
//                           </p>
//                           <FaArrowRight className="text-gray-400 text-base mt-1" />
//                         </div>

//                         <div className="bg-slate-300 h-8 flex items-center w-8 rounded-lg ">
//                           <FaShareAlt className=" mx-auto text-sm text-gray-400" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DemoTow;
