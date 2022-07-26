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
      name="experience"
      className="w-full h-screen bg-[#0a192f] text-gray-300  px-8"
    >
      <div className="flex flex-col justify-center w-full h-full px-[50px]">
        <div className="max-w-[1000px] w-full ">
          <div className="sm:text-left px-auto pb-10">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Experience
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex w-full py-2">
              <img
                src={Html}
                alt=""
                className="w-[200px] mx-4 p-4 border border-black shadow-xl shadow-slate-800 rounded-lg"
              />
              <img
                src={Css}
                alt=""
                className="w-[200px] mx-4 p-4 border border-black shadow-xl shadow-slate-800 rounded-lg"
              />
              <img
                src={Bootstrap}
                alt=""
                className="w-[200px] mx-4 p-4 border border-black shadow-xl  shadow-slate-800 rounded-lg  "
              />
              <img
                src={Tailwind}
                alt=""
                className="w-[200px] mx-4 p-4 border border-black shadow-xl shadow-slate-800 rounded-lg"
              />
            </div>
            <div className="flex w-full py-2">
              <img
                src={Js}
                alt=""
                className="w-[200px] mx-4 p-4 border border-black shadow-xl shadow-slate-800 rounded-lg"
              />
              <img
                src={ReactLogo}
                alt=""
                className="w-[200px] mx-4 p-4 border border-black shadow-xl shadow-slate-800 rounded-lg"
              />
              <img
                src={Node}
                alt=""
                className="w-[200px] mx-4 p-4 border border-black shadow-xl shadow-slate-800 rounded-lg"
              />
              <img
                src={Mongo}
                alt=""
                className="w-[200px] mx-4 p-4 border border-black shadow-xl shadow-slate-800 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
