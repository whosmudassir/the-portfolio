import React from "react";
import Image from "next/image";
import knowhere from "../../../assets/images/knowhere.png";
import sparkling from "../../../assets/images/sparkling.png";

const Knowhere = () => {
  return (
    <a
      href="https://github.com/whosmudassir/knowhere"
      target="_blank"
      rel="noreferrer"
    >
      <div
        style={{ userSelect: "none" }}
        className="h-[320px]  bg-[#f5f1ab] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-start justify-start p-[20px] overflow-hidden"
      >
        <div className="font-Inter  font-bold text-3xl  pl-[30px] pt-[10px]  text-[#474636] z-[1]">
          <p>KnoWhere</p>
          <p className="font-Inter font-bold text-xl text-[#363947]">
            React Native
          </p>
        </div>
        {/* 
        <div className="absolute top-[20px] right-[30px]">
          <Image src={sparkling} alt="img" width={50} height={50} />
        </div> */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            right: "60px",
            bottom: "0px",
          }}
        >
          <Image src={knowhere} alt="img" width={210} height={210} />
        </div>
      </div>
    </a>
  );
};

export default Knowhere;
