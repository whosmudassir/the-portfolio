import React from "react";
import Image from "next/image";

const MoreProjects = () => {
  return (
    <div
      style={{ userSelect: "none" }}
      className="h-[220px] bg-[#f5f1ab]  w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-center justify-around p-[20px]"
      //   onClick={loopThroughImgs}
    >
      {/* <div>
        <Image src={happy} alt="img" width={"100%"} height={"200px"} />
      </div> */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p> More Work</p>
      </div>
    </div>
  );
};

export default MoreProjects;
