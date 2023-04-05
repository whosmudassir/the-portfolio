import React from "react";
import Image from "next/image";
import blogpic from "../../../assets/images/blogpic.png";

const BlogCard = () => {
  return (
    <a
      href="https://whosmudassir.hashnode.dev/what-i-learnt-from-building-a-not-so-boring-ecommerce-app"
      target={"_blank"}
      rel="noreferrer"
    >
      <div
        style={{ userSelect: "none" }}
        className="lg:mt-[-114px] rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out"
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
    </a>
  );
};

export default BlogCard;
