import React from "react";
import Image from "next/image";
import happy from "../../../assets/images/happy-mac.png";

const WorkCard = () => {
  return (
    <div
      style={{ userSelect: "none" }}
      className="h-[200px] bg-[#ebecff] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-center justify-around"
      //   onClick={loopThroughImgs}
    >
      <div>
        <Image src={happy} alt="img" width={65} height={65} />
      </div>
      <p>Work</p>
    </div>
  );
};

export default WorkCard;
