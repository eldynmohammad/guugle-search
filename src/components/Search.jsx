import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultContextProvider";
import { Links } from "./Links";

export const Search = () => {
  const [text, setText] = useState(" Elon Musk");
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="w-full">
      <input
        value={text}
        type="text"
        className="w-full md:w-[24rem] px-4 py-3 text-sm text-gray-700 dark:text-gray-300 font-semibold bg-gray-100 dark:bg-gray-700 border-0 outline-none rounded-full focus:ring-2 focus:ring-emerald-400 custom-animation"
        placeholder="Search..."
        onChange={(e) => setText(e.target.value)}
      />
      <div className="mt-5 ml-4">
        <Links />
      </div>
    </div>
  );
};
