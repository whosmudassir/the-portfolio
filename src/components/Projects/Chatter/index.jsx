import React from "react";
import Image from "next/image";
import chatter from "../../../assets/images/chatter-01.png";

const Chatter = () => {
  return (
    <a href="https://mudassir-chatter.web.app/" target="_blank">
      <div
        style={{ userSelect: "none" }}
        className="h-[400px]  bg-[#9EF7C6] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-start justify-end p-[20px] overflow-hidden"
      >
        <div className="font-Inter  font-bold text-3xl  pr-[30px] pt-[10px]   text-[#474636] z-[1]">
          <p>Chat App</p>
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
