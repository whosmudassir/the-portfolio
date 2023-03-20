import React from "react";
import Image from "next/image";
import blogpic from "../../../assets/images/blogpic.png";

const BlogCard = () => {
  return (
    <div
      style={{ userSelect: "none" }}
      className="h-[300px] bg-[#9CE6B8] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-center justify-around overflow-hidden"
      //   onClick={loopThroughImgs}
    >
      <div>
        <Image src={blogpic} alt="img" width={"100%"} height={"contain"} />
      </div>
    </div>
  );
};

export default BlogCard;
