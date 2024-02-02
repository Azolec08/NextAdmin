"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import style from "./pagination.module.scss";

const Pagination = ({ count }) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const page = searchParams.get("page") || 1;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathName}?${params}`);
  };
  return (
    <div className="w-full p-2">
      <div className="flex justify-between">
        <button
          className={style.button}
          disabled={!hasPrev}
          onClick={() => handleChangePage("prev")}
        >
          Previous
        </button>
        <button
          className={style.button}
          disabled={!hasNext}
          onClick={() => handleChangePage("prev")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
