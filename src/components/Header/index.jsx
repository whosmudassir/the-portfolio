import React from "react";
import Image from "next/image";
import logo from "../../assets/icons/skull.svg";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <nav className="bg-white bg-opacity-75 backdrop-blur-md fixed top-0 left-0 right-0 z-50 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Image
              src={logo}
              alt="Picture of the author"
              width={24}
              height={24}
            />
          </div>
          <div className="text-center flex gap-10">
            <p
              className={`text-l font-semibold tracking-tight ${
                router.pathname === "/" ? "text-blue-600" : "text-gray-900"
              }`}
            >
              <Link href="/">Home</Link>
            </p>
            <p
              className={`text-l font-semibold tracking-tight ${
                router.pathname === "/work" ? "text-blue-600" : "text-gray-900"
              }`}
            >
              <Link href="/work">Work</Link>
            </p>
            <p
              className={`text-l font-semibold tracking-tight ${
                router.pathname === "/blog" ? "text-blue-600" : "text-gray-900"
              }`}
            >
              <Link href="/blog">Blog</Link>
            </p>
            <p
              className={`text-l font-semibold tracking-tight ${
                router.pathname === "/about" ? "text-blue-600" : "text-gray-900"
              }`}
            >
              <Link href="/about">About</Link>
            </p>
          </div>
          <div className="flex items-center"></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
