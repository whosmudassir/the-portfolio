import React from "react";
import Image from "next/image";
import doc from "../../../assets/icons/doc.svg";

const ResumeCard = () => {
  return (
    <div
      style={{ userSelect: "none" }}
      className="h-[120px] bg-[#f8f8f8] w-full rounded-lg cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex items-center justify-around p-[30px]"
      //   onClick={loopThroughImgs}
    >
      <div>
        <Image src={doc} alt="img" width={65} height={65} />
      </div>

      <div>
        <p>View Resume</p>
      </div>
    </div>
  );
};

export default ResumeCard;