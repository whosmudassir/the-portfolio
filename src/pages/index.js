import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";

import IntroCard from "../components/Cards/IntroCard";
import GithubCard from "../components/Cards/GithubCard";
import ResumeCard from "../components/Cards/ResumeCard";
import ExperienceCard from "../components/Cards/ExperienceCard";
import SkillsCard from "../components/Cards/SkillsCard";
import PhoneCard from "../components/Cards/PhoneCard";
import EmailCard from "../components/Cards/EmailCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
          "mt-[60px] grid  gap-4 lg:grid-cols-3 flex-wrap w-4/5 md:grid-cols-2 sm:grid-cols-1"
        }
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* <div className={"col-span-2 w-full "}> */}
        <IntroCard />
        {/* </div> */}
        <motion.div className={"grid grid-rows-1 grid-cols-2 gap-4 "}>
          <motion.div className={"col-span-2"}>
            <ResumeCard />
          </motion.div>
          <motion.div className="row-span-1">
            <PhoneCard />
          </motion.div>
          <EmailCard />
        </motion.div>

        <GithubCard />

        <ExperienceCard />
        <SkillsCard />
      </motion.div>
    </div>
  );
}
