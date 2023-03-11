import React, { useState } from "react";
import Image from "next/image";
import github from "../../../assets/icons/github.svg";

const PhoneCard = () => {
  return (
    <div
      style={{ userSelect: "none" }}
      className="h-[100px] bg-[#ebecff] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-center justify-around"
      //   onClick={loopThroughImgs}
    >
      <div>
        <Image src={github} alt="img" width={65} height={65} />
      </div>
    </div>
  );
};

export default PhoneCard;
