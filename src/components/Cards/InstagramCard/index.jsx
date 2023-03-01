import React, { useState } from "react";
import Image from "next/image";
import instagram from "../../../assets/icons/instagram.svg";

const PhoneCard = () => {
  return (
    <div
      style={{ userSelect: "none" }}
      className="h-[100px] bg-[#f765ec] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-center justify-around p-[30px]"
      //   onClick={loopThroughImgs}
    >
      <div>
        <Image src={instagram} alt="img" width={65} height={65} />
      </div>
    </div>
  );
};

export default PhoneCard;
