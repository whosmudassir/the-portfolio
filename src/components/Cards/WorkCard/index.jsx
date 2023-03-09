import React from "react";
import Image from "next/image";
import doc from "../../../assets/icons/doc.svg";

const WorkCard = () => {
  return (
    <div
      style={{ userSelect: "none" }}
      className="h-[180px] bg-[#f8f8f8] w-full rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-center justify-around p-[30px]"
      //   onClick={loopThroughImgs}
    >
      <p>Work Card</p>
    </div>
  );
};

export default WorkCard;
