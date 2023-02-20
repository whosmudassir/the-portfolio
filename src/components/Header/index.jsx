import React from "react";

const Header = () => {
  return (
    <nav class="bg-white bg-opacity-75 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center">
            <img class="h-8 w-auto mr-2" src="/path/to/logo.png" alt="Logo" />
          </div>
          <div class="text-center">
            <h1 class="text-xl font-semibold text-gray-900 tracking-tight">
              Brand Name
            </h1>
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
