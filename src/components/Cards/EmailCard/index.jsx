import React, { useState } from "react";
import Image from "next/image";
import mail from "../../../assets/icons/mail.svg";

const EmailCard = () => {
  return (
    <div
      style={{ userSelect: "none" }}
      className="h-[160px] bg-[#6ee5ff] w-full rounded-lg cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-center justify-around p-[30px]"
      //   onClick={loopThroughImgs}
    >
      <div>
        <Image src={mail} alt="img" width={80} height={80} />
      </div>
    </div>
  );
};

export default EmailCard;
