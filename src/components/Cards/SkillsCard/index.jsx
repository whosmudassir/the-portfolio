import React from "react";
import typescript from "../../../assets/icons/typescript.svg";
import javascript from "../../../assets/icons/javascript.svg";
import react from "../../../assets/icons/react.svg";
import reactnative from "../../../assets/icons/react-native.svg";
import nextjs from "../../../assets/icons/nextjs.svg";
import redux from "../../../assets/icons/redux.svg";
import mobx from "../../../assets/icons/mobx.svg";
import zustand from "../../../assets/icons/zustand.svg";
import tailwindcss from "../../../assets/icons/tailwind-css.svg";
import materialui from "../../../assets/icons/material-ui.svg";
import firebase from "../../../assets/icons/firebase.svg";
import node from "../../../assets/icons/node.svg";
import express from "../../../assets/images/express.png";
import LanguageWithIcon from "../../LanguageWithIcon";

const SkillsCard = () => {
  return (
    <div
      style={{ userSelect: "none" }}
      className="h-full bg-[#ebecff] w-full  rounded-2xl cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out flex  flex-col items-center justify-center p-[10px]"
      //   onClick={loopThroughImgs}
    >
      <div>
        <p>Skills</p>
      </div>

      <div>
        <LanguageWithIcon icon={javascript} text={"javascript"} />
        <LanguageWithIcon icon={typescript} text={"typescript"} />
        <LanguageWithIcon icon={react} text={"react"} />
        <LanguageWithIcon icon={reactnative} text={"react native"} />
        <LanguageWithIcon icon={nextjs} text={"nextjs"} />
        <LanguageWithIcon icon={node} text={"nodejs"} />
        <LanguageWithIcon icon={express} text={"expressjs"} />
        <LanguageWithIcon icon={firebase} text={"firebase"} />
        <LanguageWithIcon icon={redux} text={"redux"} />
        <LanguageWithIcon icon={mobx} text={"mobx"} />
        <LanguageWithIcon icon={zustand} text={"zustand"} />
        <LanguageWithIcon icon={materialui} text={"material-ui"} />{" "}
        <LanguageWithIcon icon={tailwindcss} text={"tailwind-css"} />
        <LanguageWithIcon
          icon={"https://docs.nativebase.io/img/nativebaselogo.svg"}
          text={"native-base"}
        />
      </div>
    </div>
  );
};

export default SkillsCard;
