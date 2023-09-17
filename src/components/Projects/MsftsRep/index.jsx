import React from "react";
import Image from "next/image";
import store from "../../../assets/images/store-mock.png";
import sparkling from "../../../assets/images/sparkling.png";

const MsftsRep = () => {
  return (
    <a href="https://msftsrep.netlify.app/" target="_blank" rel="noreferrer">
      <div
        style={{ userSelect: "none" }}
        className="h-[320px]  bg-[#f5f1ab] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-start justify-end p-[20px] overflow-hidden"
      >
        <div className="font-Inter  font-bold text-3xl  pr-[30px] pt-[10px]  text-[#363947] z-[1]">
          <p>E Commerce</p>
          <p className="font-Inter font-bold text-xl text-[#363947]">
            ReactJS + FireBase
          </p>
        </div>
        {/* 
        <div className="absolute top-[80px] left-[40px]">
          <Image src={sparkling} alt="img" width={50} height={50} />
        </div> */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: "0px",
            bottom: "0px",
          }}
        >
          <Image src={store} alt="img" width={500} height={500} />
        </div>
      </div>
    </a>
  );
};

export default MsftsRep;
