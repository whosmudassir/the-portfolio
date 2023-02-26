import React, { useState } from "react";

const ExperienceCard = () => {
  return (
    <div
      style={{ userSelect: "none" }}
      className="h-[300px] bg-[#f8f8f8] w-full rounded-lg cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-center justify-around p-[30px]"
      //   onClick={loopThroughImgs}
    >
      <div>
        {/* <Image src={imgArray[browseImg]} alt="img" width={180} height={180} /> */}
      </div>

      <div>
        {/* <p>Hey there ! I'm,</p>
        <p>Mudassir Khan</p> */}
      </div>
    </div>
  );
};

export default ExperienceCard;
