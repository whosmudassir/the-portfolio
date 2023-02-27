import React, { useState } from "react";
import Image from "next/image";
import linkedin from "../../../assets/icons/linkedin-circle.svg";

const PhoneCard = () => {
  return (
    <div
      style={{ userSelect: "none" }}
      className="h-[100px] bg-[#0c61bf] w-full rounded-lg cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-center justify-around p-[30px]"
      //   onClick={loopThroughImgs}
    >
      <div>
        <Image src={linkedin} alt="img" width={65} height={65} />
      </div>
    </div>
  );
};

export default PhoneCard;
