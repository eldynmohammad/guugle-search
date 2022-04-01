import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="text-gray-700 bg-white dark:bg-gray-800 custom-animation">
      <div className="container p-6 pb-4 mx-auto md:h-32">
        <div className="flex items-start justify-between w-full gap-5">
          <div className="flex gap-8">
            <Link to="/">
              <p className="mt-1 text-2xl font-bold text-emerald-500">
                {process.env.REACT_APP_NAME}
              </p>
            </Link>
            <div className="hidden md:block">
              <Search />
            </div>
          </div>
          <button
            type="button"
            className="text-white bg-gray-200 button dark:bg-gray-700 hover:bg-gray-500 custom-animation"
            onClick={() => setDarkTheme(!darkTheme)}
          >
            {darkTheme ? (
              <SunIcon className="w-5 h-5 text-white" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
        <div className="mt-4 md:hidden">
          <Search />
        </div>
      </div>
    </div>
  );
};
