import React, { useState } from "react";
import Image from "next/image";
import mail from "../../../assets/icons/mail.svg";

const EmailCard = () => {
  return (
    <div
      style={{ userSelect: "none" }}
      className="h-[120px] bg-[#9edef7] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-center justify-around p-[10px]"
      //   onClick={loopThroughImgs}
    >
      <div>
        <Image src={mail} alt="img" width={65} height={65} />
      </div>
    </div>
  );
};

export default EmailCard;
