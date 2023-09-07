"use client";

import Image from "next/image";

const HeaderNavBar = () => {
  return (
    <div>
      <div className="flex gap-5 items-center">
        <Image src="/logo.png" alt="logo" width={50} height={50}></Image>
        <h2>Home</h2>
        <h2>Favorite</h2>
      </div>
      <div
        className=" bg-gray-100 p-[6px] rounded-md
      w-[40%] gap-3 hidden md:flex"
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent 
        outline-none w-full"
        />
      </div>
    </div>
  );
};

export default HeaderNavBar;
