import {
  NewspaperIcon,
  PhotographIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", icon: SearchIcon, text: "All" },
  { url: "/news", icon: NewspaperIcon, text: "News" },
  { url: "/image", icon: PhotographIcon, text: "Images" },
  { url: "/videos", icon: VideoCameraIcon, text: "Videos" },
];

const Icon = (props) => {
  const { icon } = props;
  const TheIcon = icon;
  return <TheIcon {...props} />;
};

export const Links = () => {
  return (
    <div className="flex gap-6">
      {links.map(({ url, icon, text }, index) => (
        <NavLink
          to={url}
          key={index}
          className={(isActive) =>
            "text-gray-600 dark:text-gray-300 flex items-center hover:opacity-60 custom-animation" +
            (isActive ? "border-b-4" : "")
          }
        >
          <Icon icon={icon} className="w-5 h-5" />
          <p className="ml-1 text-sm">{text}</p>
        </NavLink>
      ))}
    </div>
  );
};
