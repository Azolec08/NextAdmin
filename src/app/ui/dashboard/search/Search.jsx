"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";
const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathName}?${params}`);
  }, 300);

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
