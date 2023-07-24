"use client";
import Link from "next/link";
import React, { useState } from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 lg:px-20 lx:px-40 md:h-24 flex justify-between items-center border-b-2 border-b-red-500 uppercase">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/" onClick={() => setOpen(false)}>
          Homepage
        </Link>
        <Link href="/menu" onClick={() => setOpen(false)}>
          Menu
        </Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO*/}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Massimo</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20}></Image>
          <span>123 456 789</span>
        </div>
        {!user ? (
          <Link href="/" onClick={() => setOpen(false)}>
            Login
          </Link>
        ) : (
          <Link href="/orders" onClick={() => setOpen(false)}>
            Orders
          </Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
