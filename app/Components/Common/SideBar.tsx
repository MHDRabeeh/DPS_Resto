"use client";
import React, { useState } from "react";
import { createElement } from "react";
import DailogComponent from "./DailogComponent";
import Link from "next/link";
import Image from "next/image";
import { BsHeartFill } from "react-icons/bs";
import { MdHelp } from "react-icons/md";
import { FaReceipt } from "react-icons/fa";
import { HiHome, HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useSideBarDrawer } from "@/lib/store";

const SideBar = () => {
const {isSideBarOpen,onSideBarClose}= useSideBarDrawer()
  const Links = [
    { title: "Home", icon: HiHome, url: "/" },
    { title: "Order", icon: FaReceipt, url: "/user/orders" },
    { title: "Favorites", icon: BsHeartFill, url: "user/favorites" },
    { title: "Help", icon: MdHelp, url: "/user/help" },
  ];
  return (
    <DailogComponent onClose={onSideBarClose} isVisible={isSideBarOpen}>
      <div className="flex flex-col gap-y-6 px-8 pt-8">
        <div className="flex justify-center my-3">
          <Link href={"/"} className="outline-none">
            <Image
              alt="logo image"
              src={"/img/logo.png"}
              width={40}
              height={40}
            />
          </Link>
        </div>
        <div className="flex items-center p-3 transition-all font-semibold">
          <Image
            alt="user-img"
            src={"/img/humans/h1.jpg"}
            width={40}
            height={40}
            className="object-cover rounded-full"
          />
          <div className="flex flex-col space-y-2 text-xs">
            <span className="pl-4">De Mawo</span>
            <Link href={"/user"} className="pl-4 text-green-600">
              view Account
            </Link>
          </div>
        </div>
        {Links.map((item) => (
          <Link
            href={item.url}
            key={item.title}
            className="flex items-center p-3 transition-all font-semibold hover:text-green-500 hover:bg-green-100 rounded-md"
          >
            {createElement(item.icon, {
              className: "h-5 w-5 mr-4 shrink-0 ",
            })}
            <span className="pl-2 "> {item.title}</span>
          </Link>
        ))}
        <button className="flex items-center p-3 transition-all font-semibold">
          <HiOutlineArrowRightOnRectangle className="mr-4 shrink-0" size={26} />
          <span>sign Out</span>
        </button>
      </div>
    </DailogComponent>
  );
};

export default SideBar;
