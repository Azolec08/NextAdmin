import React from "react";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";
import style from "./rightbar.module.scss";

const Rightbar = () => {
  return (
    <div className="sticky top-24 flex flex-col items-center gap-y-2">
      <div className="relative w-[250px] flex flex-col bg-slate-700 p-2 rounded-md  gap-y-4">
        <div className="absolute w-[200px] h-[100px] top-12 right-6 ">
          <Image src="/hato.png" alt="animeImg" fill className={style.b_g} />
        </div>
        <span className="font-semibold text-xs">Available Now!</span>
        <h3 className="font-bold text-sm">How to use the admin dashboard</h3>
        <span className="text-xs">Takes 10 minutes to learn</span>
        <p className="text-[9px] text-justify">
          the panel facing the driver of a vehicle or the pilot of an aircraft,
          containing instruments and controls.
        </p>
        <button className="flex items-center max-w-max gap-x-1 py-2 px-3 bg-blue-600 rounded-md text-xs ">
          <FaCirclePlay />
          Watch
        </button>
      </div>

      {/* Box 2 */}
      <div className="relative w-[250px] flex flex-col bg-slate-700 p-2 rounded-md  gap-y-4">
        <div className="absolute w-[200px] h-[100px] top-12 right-6 ">
          <Image src="/hato.png" alt="animeImg" fill className={style.b_g} />
        </div>
        <span className="font-semibold text-xs">Available Now!</span>
        <h3 className="font-bold text-sm">How to use the admin dashboard</h3>
        <span className="text-xs">Takes 10 minutes to learn</span>
        <p className="text-[9px] text-justify">
          the panel facing the driver of a vehicle or the pilot of an aircraft,
          containing instruments and controls.
        </p>
        <button className="flex items-center max-w-max gap-x-1 py-2 px-3   bg-blue-600 rounded-md text-xs ">
          <FaCirclePlay />
          Watch
        </button>
      </div>
    </div>
  );
};

export default Rightbar;
