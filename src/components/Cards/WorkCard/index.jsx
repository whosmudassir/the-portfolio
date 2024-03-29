import React from "react";
import Image from "next/image";

const WorkCard = () => {
  return (
    <a
      href="https://mudassir-chatter.web.app/"
      target="_blank"
      rel="noreferrer"
    >
      <div
        style={{ userSelect: "none" }}
        className="h-[220px] bg-[#f8f8f8] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-center justify-around p-[20px]"
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p className="chat-sent-01 font-Inter font-regular text-sm">Hey</p>
          <p className="chat-sent-02 font-Inter font-regular text-sm">
            Built this chat app <br />{" "}
            <span className="link-text  font-Inter font-regular text-sm">
              https://mudassir-chatter.web.app/
            </span>
          </p>

          <p className="chat-receive  font-Inter font-regular text-sm">
            Awesome 🔥
          </p>
        </div>
      </div>
    </a>
  );
};

export default WorkCard;
