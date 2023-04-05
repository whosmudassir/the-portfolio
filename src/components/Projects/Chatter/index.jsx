import React from "react";
import Image from "next/image";
import stars from "../../../assets/icons/glare-star-icon.svg";
import chatter from "../../../assets/images/chatter-01.png";

const Chatter = () => {
  return (
    <a
      href="https://mudassir-chatter.web.app/"
      target="_blank"
      rel="noreferrer"
    >
      <div
        style={{ userSelect: "none" }}
        className="h-[400px]  bg-[#9EF7C6] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-start justify-end p-[20px] overflow-hidden"
      >
        <div className="font-Inter  font-bold text-3xl  pr-[30px] pt-[10px]   text-[#474636] z-[1]">
          <p>Chat App</p>
        </div>

        <div className="absolute bottom-[40px] right-[60px]">
          <Image src={stars} alt="img" width={50} height={50} />
        </div>

        <div className="absolute top-[40px] left-[60px]">
          <Image src={stars} alt="img" width={40} height={40} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: "60px",
            bottom: "0px",
          }}
        >
          <Image src={chatter} alt="img" width={300} height={300} />
        </div>
      </div>
    </a>
  );
};

export default Chatter;
