import React, { useState } from "react";
import Image from "next/image";
import call from "../../../assets/icons/phone-call-icon.svg";

const PhoneCard = () => {
  return (
    <div
      style={{ userSelect: "none" }}
      className="h-[160px] bg-[#78ef65] w-full rounded-lg cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-center justify-around p-[30px]"
      //   onClick={loopThroughImgs}
    >
      <div>
        <Image src={call} alt="img" width={65} height={65} />
      </div>
    </div>
  );
};

export default PhoneCard;
