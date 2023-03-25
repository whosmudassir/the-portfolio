import React, { useState } from "react";
import Image from "next/image";
import mail from "../../../assets/icons/mail.svg";
import { useRouter } from "next/router";
const EmailCard = () => {
  const router = useRouter();
  const handleEmailClick = () => {
    const email = "whosmudassir@gmail.com";

    window.open(`mailto:${email}`);
  };

  const email = "whosmudassir@gmail.com";

  return (
    // <a
    //   href={"mailto:whosmudassir@gmail.com"}
    //   rel="noopener noreferrer"
    //   target="_blank"
    // >
    <div
      style={{ userSelect: "none" }}
      className="h-[120px] bg-[#9edef7] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-center justify-around p-[10px]"
      onClick={() => router.push("mailto:email@yahoo.com")}
    >
      <div>
        <Image src={mail} alt="img" width={65} height={65} />
      </div>
    </div>
    // </a>
  );
};

export default EmailCard;
