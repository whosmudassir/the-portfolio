import React from "react";
import Image from "next/image";

const MoreBlogs = () => {
  return (
    <div
      style={{ userSelect: "none" }}
      className="h-[220px] bg-[#F7F39E]  bg-[#ebecff] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-center justify-around p-[20px]"
      //   onClick={loopThroughImgs}
    >
      {/* <div>
        <Image src={happy} alt="img" width={"100%"} height={"200px"} />
      </div> */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p> More Blog</p>
      </div>
    </div>
  );
};

export default MoreBlogs;
