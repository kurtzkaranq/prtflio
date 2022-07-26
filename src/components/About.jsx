import React from "react";

export default function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300  px-8"
    >
      <div className="flex flex-col justify-center items-center w-full h-full px-[50px]">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 px-auto">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-auto ">
          <div className="sm:text-right text-4xl font-bold  max-w-[25vw] min-w-[350px]">
            Hi , I'm Erkhes , nice to meet you.
            <span className=" hidden sm:block">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis, dolore.
            </span>
          </div>
          <div className=" text-left pt-2  max-w-[25vw] min-w-[350px] text-xl">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, autem quisquam veritatis maxime cupiditate nisi ipsum
              quod, qui nihil, est similique aperiam quas ex pariatur eveniet
              deserunt quidem delectus deleniti soluta ipsam facere provident?
              Quae soluta reprehenderit a, quidem blanditiis sunt inventore,
              pariatur, possimus obcaecati vero necessitatibus repellendus
              beatae recusandae!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
