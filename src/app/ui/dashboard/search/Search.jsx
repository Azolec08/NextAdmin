"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);

    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }

    params.set("query", e.target.value);

    replace(`${pathName}?${params}`);
  };

  return (
    <div className="relative bg-slate-500 max-w-max rounded-md">
      <MdSearch className="absolute left-0 top-2 ml-1 cursor-pointer text-black" />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent px-5 py-1 outline-none"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
