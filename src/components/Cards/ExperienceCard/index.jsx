import React, { useState } from "react";
import LanguageWithIcon from "../../LanguageWithIcon";
import geekyants from "../../../assets/icons/geekyants.svg";

const ExperienceCard = () => {
  return (
    <div
      style={{ userSelect: "none" }}
      className="h-full bg-[#f8f8f8] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex  flex-col  p-[30px]"
      //   onClick={loopThroughImgs}
    >
      <div>
        <p>Experience</p>
      </div>

      <div>
        <LanguageWithIcon icon={geekyants} text={"GeekyAnts"} />
        <div className="pl-[45px] flex flex-col align-center justify-center">
          {" "}
          <p>
            Software Engineer - II <p>Aug 2022 - present</p>
          </p>
          <div className="h-[35px] border-l-2 border-indigo-500  w-[0px] " />
          <p>
            Software Engineer - I <p>Aug 2021 - Aug 2022</p>
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default ExperienceCard;
