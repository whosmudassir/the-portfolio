import React, { useState } from "react";
import LanguageWithIcon from "../../LanguageWithIcon";
import geekyants from "../../../assets/icons/geekyants.svg";

const ExperienceCard = () => {
  return (
    <div
      style={{ userSelect: "none" }}
      className="h-[300px] p-[30px] bg-[#ebecff] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex  flex-col overflow-auto "
      //   onClick={loopThroughImgs}
    >
      <div className="font-Inter font-medium text-lg self-start pb-[10px] text-[#474636]">
        <p>Experience</p>
      </div>

      <div className="flex  flex-col items-center justify-center">
        <LanguageWithIcon icon={geekyants} text={"GeekyAnts"} />
        <div className="flex flex-col items-center justify-center text-center font-Inter font-medium text-base  pt-[8px] ">
          <p>
            Software Engineer - II <br />{" "}
            <p className="text-xs">Aug 2022 - present</p>
          </p>
          <div className="h-8 w-0.5 bg-[#9EA3F7] mx-auto my-2"></div>
          <p>
            Software Engineer - II <br />{" "}
            <p className="text-xs">Aug 2022 - present</p>
          </p>
          <div className="h-8 w-0.5 bg-[#9EA3F7] mx-auto my-2"></div>
          <p>
            Software Engineer - I <br />{" "}
            <p className="text-xs"> Aug 2021 - Aug 2022</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
