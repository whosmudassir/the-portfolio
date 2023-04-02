import React from "react";
import Image from "next/image";
import folder from "../../../assets/icons/folder.svg";
import Link from "next/link";

const MoreProjects = () => {
  return (
    <Link href={"/work"}>
      <div
        style={{ userSelect: "none" }}
        className="h-[220px] p-[30px]  bg-[#f5f1ab] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex  flex-col overflow-auto "
      >
        <div className="font-Inter font-medium text-lg self-start pb-[10px] text-[#474636]">
          <p>Projects</p>
        </div>

        <div className="flex  flex-col items-center justify-center">
          <Image src={folder} alt="img" width={105} height={105} />
        </div>
      </div>
    </Link>
  );
};

export default MoreProjects;
