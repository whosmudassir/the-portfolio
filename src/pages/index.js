import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <img
        src={
          "https://is3-ssl.mzstatic.com/image/thumb/wu6bl_EDpI5bOnLWSN0mRQ/1679x945sr.webp"
        }
      />
    </div>
  );
}
