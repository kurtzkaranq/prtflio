import React from "react";
import Aws from "../assets/aws.png";
import Css from "../assets/css.png";
import Html from "../assets/html.png";
import Js from "../assets/javascript.png";
import Mongo from "../assets/mongo.png";
import ReactLogo from "../assets/react.png";
import Node from "../assets/node.png";
import Tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/Bootstrap.svg";

export default function Skills() {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-[#0a192f] text-gray-300  px-8 justify-center flex"
    >
      <div className="flex flex-col justify-center max-w-[1000px] w-full h-full px-[50px]">
        <div >
          <div className="sm:text-left px-auto pb-10">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Skills

            </p>
          </div>
          <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-2 text-center py-8">
          
             
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 max-w-[200px]">

              <img
                src={Bootstrap}
                alt=""
                className=" pt-5"
                />
                <p className="mt-5">Bootstrap</p>
              </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 max-w-[200px]">

              <img
                src={Tailwind}
                alt=""
                />
                <p>Tailwind</p>
              </div>
          
           
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 max-w-[200px]">

              <img
                src={Js}
                alt=""
                />
                <p>JavaScript </p>
              </div>
             <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 max-w-[200px]">

              <img
                src={Node}
                alt=""
                />
                <p>NodeJS</p>
              </div>
             <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 max-w-[200px]">

              <img
                src={ReactLogo}
                alt=""
                />
                <p>ReactJs</p>
              </div>
             <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 max-w-[200px]">

              <img
                src={Mongo}
                alt=""
                />
                <p>MongoDB</p>
              </div>
        
          </div>
        </div>
      </div>
    </div>
  );
}
