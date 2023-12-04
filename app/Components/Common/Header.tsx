"use client";
import { useSideBarDrawer } from "@/lib/store";
import Link from "next/link";
import { HiBars3,HiOutlineShoppingCart } from "react-icons/hi2";

const Header = () => {
  const {onSideBarOpen } = useSideBarDrawer();
  return (
    <header className="grid grid-cols-2 py-5 px-4 md:px-12 items-center sticky top-0 z-10 bg-white">
      {/* left area  */}
      <div className="flex  items-center gap-x-8">
        <button onClick={onSideBarOpen} className="p-2 rounded-full bg-slate-200 text-gray-500 hover:bg-green-200 hover:text-green-600">
          <span className="cursor-pointer shrink-0 text-[28px] "><HiBars3/></span> 
        </button>
        <button>
            Location
        </button>
      </div>
      {/* Right area  */}
      <div className="hidden md:flex  items-center justify-end space-x-4  ">
        <Link href={'/cart'} className="relative p-2 rounded-full bg-slate-200 text-gray-500 hover:bg-green-200 hover:text-green-600">
            <HiOutlineShoppingCart size={28} className="pr-1"/>
            <span className="absolute text-green-600 top-0 right-1 font-bold">
                0
            </span>

        </Link>
        <button className="bg-slate-200 text-gray-500 px-4 py-1 rounded-e-full">Login/Signup</button>
      </div>
    </header>
  );
};

export default Header;
