import React from "react";
import Image from "next/image";
import doc from "../../../assets/icons/doc.svg";

const TitleCard = () => {
  return (
    <div
      style={{ userSelect: "none" }}
      className="h-full bg-[#F79ECF] w-full rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-center justify-around p-[30px]"
      //   onClick={loopThroughImgs}
    >
      <div>
        <p>FrontEnd Developer</p>
      </div>
    </div>
  );
};

export default TitleCard;
