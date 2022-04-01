import React from "react";
// import Loader from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center top-32">
      <div className="absolute inset-0 bg-white/90" />
      <div className="w-12 h-12 bg-indigo-400 rounded-lg animate-spin" />
    </div>
  );
};
