import React from "react";
import Image from "next/image";
import blogpic from "../../../assets/images/blogpic.png";

const BlogCard = () => {
  return (
    <div
      style={{ userSelect: "none" }}
      className="lg:mt-[-118px] rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out"
      //   onClick={loopThroughImgs}
    >
      <Image
        src={blogpic}
        alt="img"
        width={"auto"}
        height={"auto"}
        style={{
          objectFit: "contain",
          objectPosition: "center",
          borderRadius: "1rem",
        }}
      />
    </div>
  );
};

export default BlogCard;
