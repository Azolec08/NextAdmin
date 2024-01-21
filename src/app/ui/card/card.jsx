import { MdSupervisedUserCircle } from "react-icons/md";
import style from "./card.module.scss";

const Card = () => {
  return (
    <div
      className="flex w-full justify-center px-3 py-5 bg-slate-700  rounded-md
    hover:bg-slate-500 cursor-pointer hover:text-blue-600 transition-all
    "
    >
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col">
        <span className="text-gray-100 text-xs">Total Users</span>
        <span className="text-lg">10.273</span>
        <p className="text-gray-100 text-xs">
          <span className={`${style.positive}`}>12%</span> more than previous
          Week
        </p>
      </div>
    </div>
  );
};

export default Card;
