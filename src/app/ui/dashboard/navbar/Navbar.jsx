"use client";

import { usePathname } from "next/navigation";
import {
  MdNotificationsNone,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="flex py-6 px-4 bg-slate-700 rounded-md  ">
      <div className="flex-1">
        <h1 className="capitalize font-semibold ">
          {pathName.split("/").pop()}
        </h1>
      </div>
      <div className="flex gap-x-3 ">
        <div className="flex relative text-black bg-slate-500 rounded-md p-1 ">
          <MdSearch className="absolute left-0 top-2 ml-1 cursor-pointer" />

          <input
            type="text"
            placeholder="Search..."
            className="px-5 w-[170px] outline-none bg-transparent rounded-md"
          />
        </div>
        <div className="flex items-center gap-x-3">
          <MdOutlineChat />
          <MdPublic />
          <MdNotificationsNone />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
