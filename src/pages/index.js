import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import { motion } from "framer-motion";

import IntroCard from "../components/Cards/IntroCard";
import GithubCard from "../components/Cards/GithubCard";
import ResumeCard from "../components/Cards/ResumeCard";
import ExperienceCard from "../components/Cards/ExperienceCard";
import SkillsCard from "../components/Cards/SkillsCard";

import EmailCard from "../components/Cards/EmailCard";
import LinkedInCard from "../components/Cards/LinkedInCard";
import InstagramCard from "../components/Cards/InstagramCard";
import TitleCard from "../components/Cards/TitleCard";
import WorkCard from "../components/Cards/WorkCard";
import BlogCard from "../components/Cards/BlogCard";
import MoreBlogs from "../components/Cards/MoreBlogs";
import MoreProjects from "../components/Cards/MoreProjects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mudassir Khan | Home</title>
      </Head>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          className={
            "mt-[60px] mb-[60px] grid  gap-3  lg:grid-cols-3 flex-wrap w-[90%] md:grid-cols-1 sm:grid-cols-1"
          }
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <IntroCard />

          {/* block */}
          <motion.div className={"grid grid-rows-1 grid-cols-3 gap-3 "}>
            <motion.div className={"col-span-3"}>
              <TitleCard />
            </motion.div>
            <motion.div className="row-span-1 col-span-1">
              <EmailCard />
            </motion.div>
            <motion.div className="row-span-2 col-span-2">
              <ResumeCard />
            </motion.div>
          </motion.div>

          {/* block */}
          <ExperienceCard />

          <motion.div className={"grid  grid-cols-3 gap-3 "}>
            <motion.div className={"row-span-1 col-span-1"}>
              <LinkedInCard />
            </motion.div>
            <motion.div className={"row-span-1 col-span-1"}>
              <GithubCard />
            </motion.div>
            <motion.div className={"row-span-1 col-span-1"}>
              <InstagramCard />
            </motion.div>
            <motion.div className={"row-span-2 col-span-3"}>
              <WorkCard />
            </motion.div>
          </motion.div>

          {/* block */}
          <motion.div className={"col-span-1 row-span-2"}>
            <SkillsCard />
          </motion.div>

          {/* block */}
          <MoreProjects />
          <MoreBlogs />

          <BlogCard />
        </motion.div>
      </div>
    </>
  );
}
