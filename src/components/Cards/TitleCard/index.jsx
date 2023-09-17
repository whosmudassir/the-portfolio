import React from "react";
import Image from "next/image";
import sparkling from "../../../assets/images/sparkling.png";

const TitleCard = () => {
  return (
    <div
      style={{ userSelect: "none" }}
      className="h-full bg-[#f5f1ab] w-full rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-center justify-center p-[30px]"
    >
      <div>
        <p className="font-Inter font-bold text-[#474636] text-lg">
          FullStack Developer
        </p>
      </div>
      {/* <div className="absolute top-[20px] left-[30px]">
        <Image src={sparkling} alt="img" width={50} height={50} />
      </div> */}
    </div>
  );
};

export default TitleCard;
