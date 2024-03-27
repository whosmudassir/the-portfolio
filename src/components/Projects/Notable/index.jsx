import React from "react";
import Image from "next/image";
import notable from "../../../assets/images/notable.png";

const Notable = () => {
  return (
    <a
      href="https://notable-fe.onrender.com/"
      target="_blank"
      rel="noreferrer"
    >
      <div
        style={{ userSelect: "none" }}
        className="h-[380px]   bg-[#9EF7C6] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex  items-center justify-around p-[20px] overflow-hidden"
      >
        <div className="font-Inter font-bold text-3xl flex-auto self-start pl-[30px] pt-[10px] text-[#363947] z-[1]">
          <p>Notable</p>
          <p className="font-Inter font-bold text-xl text-[#363947]">
            Mern Stack
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            bottom: "26px",
            // right: "-130px",
          }}
        >
          <Image src={notable} alt="img" width={450} height={450} />
        </div>
      </div>
    </a>
  );
};

export default Notable;
