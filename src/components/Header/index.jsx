import React from "react";
import Image from "next/image";
import logo from "../../assets/icons/skull.svg";
import Link from "next/link";

const Header = () => {
  return (
    <nav class="bg-white bg-opacity-75 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4 ">
          <div class="flex items-center">
            <Image
              src={logo}
              alt="Picture of the author"
              width={24}
              height={24}
            />
          </div>
          <div class="text-center flex gap-10">
            <p class="text-l font-semibold text-gray-900 tracking-tight">
              <Link href="/">Home</Link>
            </p>{" "}
            <p class="text-l font-semibold text-gray-900 tracking-tight">
              <Link href="/work">Work</Link>
            </p>{" "}
            <p class="text-l font-semibold text-gray-900 tracking-tight">
              <Link href="/blog">Blog</Link>
            </p>{" "}
            <p class="text-l font-semibold text-gray-900 tracking-tight">
              <Link href="/about">About</Link>
            </p>
          </div>
          <div class="flex items-center"></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
