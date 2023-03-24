import React, { useState } from "react";
import Image from "next/image";
import instagram from "../../../assets/icons/instagram.svg";

const PhoneCard = () => {
  return (
    <a href="https://www.instagram.com/whosmudassir/" target="_blank">
      <div
        style={{ userSelect: "none" }}
        className="h-[100px] bg-[#f5f1ab] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-center justify-around "
        //   onClick={loopThroughImgs}
      >
        <div>
          <Image src={instagram} alt="img" width={65} height={65} />
        </div>
      </div>
    </a>
  );
};

export default PhoneCard;
