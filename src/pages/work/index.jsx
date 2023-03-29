import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import { motion } from "framer-motion";

import Chatter from "../../components/Projects/Chatter";
import MsftsRep from "../../components/Projects/MsftsRep";
import RainbowUI from "../../components/Projects/RainbowUI";
import MovieBox from "../../components/Projects/MovieBox";

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
          "mt-[60px] mb-[60px] grid  gap-3  lg:grid-cols-2 flex-wrap w-[90%] md:grid-cols-1 sm:grid-cols-1"
        }
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* block */}
        <motion.div className={"grid grid-rows-1 grid-cols-3 gap-3 "}>
          <motion.div className={"col-span-3"}>
            <Chatter />
          </motion.div>
        </motion.div>

        {/* block */}
        <MsftsRep />

        <motion.div className={"grid  grid-cols-3 gap-3 "}>
          <MovieBox />
        </motion.div>

        {/* block */}
        <motion.div className={"col-span-1 row-span-2"}>
          <RainbowUI />
        </motion.div>

        {/* block */}
      </motion.div>
    </div>
  );
}
