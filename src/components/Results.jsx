import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../contexts/ResultContextProvider";
import { Loading } from "./Loading";

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="container px-6 mx-auto space-y-6 md:px-36">
          {results?.map(({ link, title, description }, index) => (
            <div key={index} className="w-full md:w-2/5">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-xs">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg text-indigo-700 hover:underline dark:text-indigo-300">
                  {title}
                </p>
                <p className="text-sm text-gray-500 break-words dark:text-gray-400">
                  {description?.length > 60
                    ? description.substring(0, 60)
                    : description}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/image":
      return (
        <div className="container grid grid-cols-2 gap-6 px-6 mx-auto md:px-36 md:grid-cols-3 lg:grid-cols-5">
          {results?.map(({ image, link: { href, title } }, index) => (
            <a
              className="p-5 sm:p-3"
              href={href}
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="mt-2 text-sm break-words w-36">{title}</p>
            </a>
          ))}
        </div>
      );
    case "/news":
      return (
        <div className="container px-6 mx-auto space-y-6 md:px-36">
          {results?.map(({ links, id, source, title }) => (
            <div key={id} className="w-full md:w-2/5">
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noreferrer"
                className="hover:underline custom-animation"
              >
                <p className="text-lg text-indigo-700 hover:underline dark:text-indigo-300">
                  {title}
                </p>
                <p className="text-sm opacity-60">{source?.href}</p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/videos":
      return (
        <div className="container grid gap-2 px-6 mx-auto md:px-36 lg:grid-cols-2 xl:grid-cols-3">
          {results.map((video, index) => (
            <div key={index} className="p-2">
              {video?.additional_links?.[0]?.href && (
                <ReactPlayer
                  url={video.additional_links?.[0].href}
                  controls
                  width="320px"
                  height="200px"
                />
              )}
            </div>
          ))}
        </div>
      );

    default:
      return "Error!";
  }
};
