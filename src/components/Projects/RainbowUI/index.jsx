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
        className="h-[320px]  bg-[#ebecff] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex flex-col justify-around items-center p-[20px] overflow-hidden text-center"
      >
        <div className="font-Inter font-bold text-3xl flex flex-col  text-[#363947] z-[1]">
          <p>UI Library</p>
          <p className="font-Inter font-bold text-xl text-[#363947]">
            Vanilla JS
          </p>
        </div>

        <div>
          <Image src={rainbow} alt="img" width={450} height={450} />
        </div>
      </div>
    </a>
  );
};

export default RainbowUI;
