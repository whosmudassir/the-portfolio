import React from "react";
import Image from "next/image";
import rainbow from "../../../assets/images/rainbow.png";

const RainbowUI = () => {
  return (
    <a
      href="https://rain-bow-ui.netlify.app/index.html"
      target="_blank"
      rel="noreferrer"
    >
      <div
        style={{ userSelect: "none" }}
        className="h-[400px]  bg-[#ebecff] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex flex-col justify-around items-center p-[20px] overflow-hidden"
      >
        <div className="font-Inter font-bold text-3xl flex flex-col  text-[#363947] z-[1]">
          <p>UI Library</p>
        </div>

        <div>
          <Image src={rainbow} alt="img" width={550} height={550} />
        </div>
      </div>
    </a>
  );
};

export default RainbowUI;
