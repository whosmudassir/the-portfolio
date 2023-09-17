import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import { motion } from "framer-motion";

import Chatter from "../../components/Projects/Chatter";
import MsftsRep from "../../components/Projects/MsftsRep";
import RainbowUI from "../../components/Projects/RainbowUI";
import MovieBox from "../../components/Projects/MovieBox";
import Knowhere from "../../components/Projects/Knowhere";
import Notable from "../../components/Projects/Notable";

export default function Work() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        className={
          "mt-[60px] mb-[60px] grid gap-3 flex-wrap w-[90%] lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1"
        }
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* block */}
        <motion.div className={"col-span-1"}>
          <RainbowUI />
        </motion.div>

        <motion.div className={"col-span-2"}>
          <Chatter />
        </motion.div>

        <motion.div className={"col-span-1"}>
          <MsftsRep />
        </motion.div>
        {/* block */}
        <motion.div className={"col-span-2"}>
          <Notable />
        </motion.div>
        <motion.div className={"col-span-2"}>
          <MovieBox />
        </motion.div>
        <motion.div className={"col-span-2"}>
          <Knowhere />
        </motion.div>

        {/* block */}

        {/* block */}
      </motion.div>
    </div>
  );
}
