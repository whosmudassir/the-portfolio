import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <nav class="bg-white bg-opacity-75 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-2 ">
          <div class="flex items-center">
            {/* <Image
              src={logo}
              alt="Picture of the author"
              width={55}
              height={-50}
            /> */}
          </div>
          <div class="text-center flex gap-5">
            <p class="text-xl font-semibold text-gray-900 tracking-tight">
              Brand Name
            </p>{" "}
            <p class="text-xl font-semibold text-gray-900 tracking-tight">
              Brand Name
            </p>{" "}
            <p class="text-xl font-semibold text-gray-900 tracking-tight">
              Brand Name
            </p>{" "}
            <p class="text-xl font-semibold text-gray-900 tracking-tight">
              Brand Name
            </p>
          </div>
          <div class="flex items-center">
            <img class="h-8 w-auto mr-2" src="/path/to/logo.png" alt="Logo" />
            <img class="h-8 w-auto" src="/path/to/logo.png" alt="Logo" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
