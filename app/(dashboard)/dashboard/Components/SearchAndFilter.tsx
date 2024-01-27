"use client";

import { HiOutlineSearch, HiOutlineUpload } from "react-icons/hi";
import { usePathname } from "next/navigation";
import OrdersFilter from "../orders/OrdersFilter";
// import OrdersFilter from "../orders/OrdersFilter";
// import AdminAddMenu from "../menu/AdminAddMenu";
// import PriceDropDown from "../menu/PriceDropDown";
// import CategoryDropDown from "../menu/CategoryDropDown";

const SearchAndFilter = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col md:flex-row  z-10 items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
      <div className="w-full md:w-1/2">
        <form className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <HiOutlineSearch
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 "
              />
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg  block w-full pl-10 p-2"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      
         
      <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
        {pathname === "/dashboard/orders" && (
          <>
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <OrdersFilter />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchAndFilter;