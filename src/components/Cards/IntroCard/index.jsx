import React, { useState } from "react";
import Image from "next/image";
import { imgArray } from "../../../data/loopImages";

const IntroCard = () => {
  const [browseImg, setBrowseImg] = useState(
    Math.floor(Math.random() * imgArray.length)
  );

  const loopThroughImgs = () => {
    const randomIndex = Math.floor(Math.random() * imgArray.length);
    setBrowseImg(randomIndex);
  };

  return (
    <div
      style={{ userSelect: "none" }}
      className="h-full bg-[#f8f8f8] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-center justify-around "
      onClick={loopThroughImgs}
    >
      <div>
        <Image src={imgArray[browseImg]} alt="img" width={180} height={180} />
      </div>

      <div>
        <p>Hey there ! I'm,</p>
        <p>Mudassir Khan</p>
      </div>
    </div>
  );
};

export default IntroCard;
