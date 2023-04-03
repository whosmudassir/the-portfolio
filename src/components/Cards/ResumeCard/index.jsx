import React from "react";
import Image from "next/image";
import doc from "../../../assets/icons/doc.svg";

const ResumeCard = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1opMPFmZ0L_vfzZKe4MTwdSnou6TXzoxd/view?usp=sharing"
      target={"_blank"}
    >
      <div
        style={{ userSelect: "none" }}
        className="h-[120px] w-[full] bg-[#9ef3f7] w-full rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-center justify-around p-[30px]"
      >
        <div>
          <Image src={doc} alt="img" width={65} height={65} />
        </div>

        <div>
          <p className="font-Inter font-medium text-md">View Resume</p>
        </div>
      </div>
    </a>
  );
};

export default ResumeCard;
