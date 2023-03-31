import React from "react";
import Image from "next/image";
import blog from "../../../assets/icons/blog.svg";

const MoreProjects = () => {
  return (
    <div
      style={{ userSelect: "none" }}
      className="h-[220px] p-[30px]  bg-[#ebecff]  w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex  flex-col overflow-auto"
      //   onClick={loopThroughImgs}
    >
      <div className="font-Inter font-medium text-lg self-start pb-[10px] text-[#474636]">
        <p>Blog</p>
      </div>

      <div className="flex  flex-col items-center justify-center">
        <Image src={blog} alt="img" width={105} height={105} />
      </div>
    </div>
  );
};

export default MoreProjects;
