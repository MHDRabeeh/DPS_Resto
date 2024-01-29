"use client";
import Image from "next/image";
import { MenuData } from "@/data/menu-data";
import TableWrapper from "../Components/TableWrapper";
import AdminPreviewMenu from "./AdminPreviewMenu";
import AdminEditMenu from "./AdminEditMenu";
import AdminDeleteMenu from "./AdminDeleteMenu";



const AdminMenuTable = () => {
 

  return (
    <TableWrapper title={"All Menus"}>
      {/* <Suspense fallback={DataLoading()}> */}
        <table className="w-full    text-left  text-slate-500 ">
          <thead className=" text-xs  overflow-x-auto whitespace-nowrap text-slate-700 uppercase bg-slate-100  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                <input
                  className="w-4 h-4 accent-green-600 bg-gray-100  border-gray-300 rounded focus:ring-green-500 "
                  type="checkbox"
                />
              </th>
              <th scope="col" className="px-6 py-3  ">
                Product
              </th>

              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Pre-View
              </th>

              <th scope="col" className="px-6 py-3">
                Edit
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>

          <tbody>
            {MenuData?.map((MenuEdge) => (
              <tr className="bg-white " key={MenuEdge?.id}>
                <td className="px-6 py-2">
                  <input
                    className="w-4 h-4 accent-green-600 bg-gray-100  border-gray-300 rounded focus:ring-green-500 "
                    type="checkbox"
                  />
                </td>
                <td className="px-6 py-2">
                  {" "}
                  <Image
                    src={MenuEdge?.image as string}
                    width={50}
                    height={50}
                    alt="avatar"
                    className="rounded-md object-cover"
                  />{" "}
                </td>
                <td className="px-6 py-2">{MenuEdge?.title} </td>
                <td className="px-6 py-2">
                  {" "}
                  <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-0.5 rounded ">
                    {" "}
                    {MenuEdge?.category}
                  </span>{" "}
                </td>
                <td className="px-6 py-2">{MenuEdge?.price}</td>
                <td className="px-6 py-2 whitespace-nowrap">
                  {" "}
                  <AdminPreviewMenu menu={MenuEdge as Menu} />{" "}
                </td>
                <td className="px-6 py-2 whitespace-nowrap">
                  {" "}
                  <AdminEditMenu menu={MenuEdge as Menu} />{" "}
                </td>
                <td className="px-6 py-2 whitespace-nowrap">
                  {" "}
                  <AdminDeleteMenu menu={MenuEdge as Menu} />{" "}
                </td>
              </tr>
            ))}
          </tbody>  

          {/* <tfoot className="flex justify-center py-3 ">
            <tr>
              <td>
                {isAdminLastPage && hasAdminNextPage && (
                  <button
                    onClick={() => onLoadMore(endCursor as string)}
                    className="bg-green-600 text-white text-center
           hover:bg-green-200  hover:text-green-700  py-1 px-2 rounded  focus:outline-none "
                  >
                    Load More ...
                  </button>
                )}
              </td>
            </tr>
          </tfoot> */}
        </table>
      {/* </Suspense> */}
    </TableWrapper>
  );
};

export default AdminMenuTable;
