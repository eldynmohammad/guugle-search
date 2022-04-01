import React from "react";

export const Footer = () => {
  return (
    <div className="p-6 text-sm font-semibold text-center text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-400">
      <h1>{new Date().getFullYear()} &copy; Giggle.</h1>
    </div>
  );
};
