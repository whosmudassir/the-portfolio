import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Card from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={
        "flex-1 flex-col pt-[50px] grid grid-cols-4 gap-4 md:grid-cols-6"
      }
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
