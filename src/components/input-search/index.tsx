import { FC, useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { PropsComponent } from "./types";
import Search from "../icons/Search";

const InputSearch: FC<PropsComponent> = ({ onSearch }) => {
  const [search, setSearch] = useState(""); // State for the search input
  const debouncedSearch = useDebounce(search, 700); // Debounced search query
  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch, onSearch]);
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div className="flex w-full mx-10 rounded-xl bg-gray-300 shadow-lg">
          <input
            className=" w-full border-none bg-transparent px-4 py-1 text-gray-600 outline-none focus:outline-none"
            type="search"
            name="search"
            placeholder="Search Article...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="m-2 rounded px-4 py-2 text-white">
            <Search />
          </div>
        </div>
      </div>
    </>
  );
};

export default InputSearch;
