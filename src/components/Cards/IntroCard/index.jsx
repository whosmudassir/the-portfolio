import React, { useState } from "react";
import Image from "next/image";


const IntroCard = () => {

  return (
    <div
      style={{ userSelect: "none" }}
      className="h-full bg-[#9EF7C6] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex flex-col items-center justify-between p-[30px]"

    >
      <div>
        <Image src="/Image.png" alt="img" width={180} height={180} />
      </div>

      <div>
        <p className="font-Inter font-bold text-3xl text-[#394736] pb-[30px]">
          Mudassir Khan
        </p>
      </div>
    </div>
  );
};

export default IntroCard;
