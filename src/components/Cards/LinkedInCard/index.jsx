import React, { useState } from "react";
import Image from "next/image";
import linkedin from "../../../assets/icons/linkedin-circle.svg";

const LinkedInCard = () => {
  return (
    <a
      href="https://www.linkedin.com/in/mudassir-khan-08139a195"
      target="_blank"
      rel="noreferrer"
    >
      <div
        style={{ userSelect: "none" }}
        className="h-[100px] bg-[#9EF7C6] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-center justify-around "
        //   onClick={loopThroughImgs}
      >
        <div>
          <Image src={linkedin} alt="img" width={65} height={65} />
        </div>
      </div>
    </a>
  );
};

export default LinkedInCard;
