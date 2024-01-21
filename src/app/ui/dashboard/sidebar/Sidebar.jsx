import React from "react";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import { menuItems } from "@/constants";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sticky top-0">
      <div className="p-2 flex items-center gap-x-2">
        <figure>
          <Image
            src="/noneImage.jpg"
            alt="userImage"
            width={40}
            height={40}
            className="rounded-full"
          />
        </figure>
        <div className="flex flex-col">
          <b className="text-sm">Mark Angelo Celoza</b>
          <span className="text-xs">Administrator</span>
        </div>
      </div>
      {menuItems.map((cat) => {
        return (
          <ul key={cat.title} className="p-2 ">
            <li>
              <b className="py-2">{cat.title}</b>
              {cat.list.map((item) => {
                return <MenuLink items={item} key={item.title} />;
              })}
            </li>
          </ul>
        );
      })}
      <form
        className="flex items-center p-2 cursor-pointer
      hover:bg-slate-100 hover:text-blue-600 transition-all
      "
      >
        <MdLogout />
        <button>Logout</button>
      </form>
    </div>
  );
};

export default Sidebar;
