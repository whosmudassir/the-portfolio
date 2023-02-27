import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LanguageWithIcon = ({ icon, text }) => {
  return (
    <div>
      <motion.div className="flex flex-row items-center py-[2px]">
        <Image src={icon} alt="img" width={30} height={30} />{" "}
        <p className="pl-[14px]">{text}</p>
      </motion.div>
    </div>
  );
};

export default LanguageWithIcon;
