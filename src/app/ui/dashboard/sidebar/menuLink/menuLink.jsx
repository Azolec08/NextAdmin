"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import style from "./menuLink.module.scss";

const MenuLink = ({ items }) => {
  const pathName = usePathname();
  return (
    <div
      key={items.title}
      className={` ${
        pathName === items.path && style.active
      } hover:bg-slate-100 hover:text-blue-600 transition-all`}
    >
      <Link href={items.path} className="flex p-2 items-center gap-x-1 text-sm">
        <div>{items.icons}</div>
        {items.title}
      </Link>
    </div>
  );
};

export default MenuLink;
