import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

const HorizontalCards = ({ data }) => {
    return (
      <div className="w-full flex overflow-x-auto mb-5 p-5 space-x-3">
        {data.map((d, i) => (
          <div
            className="w-[200px] h-[280px] bg-zinc-900 rounded-lg overflow-hidden flex-shrink-0"
            key={i}
          >
            <img
              className="w-full h-[55%] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.profile_path
              }`}
              alt={
                d.name ||
                d.title ||
                d.original_name ||
                d.original_title ||
                "Image"
              }
              // onError={(e) => e.target.src = "path/to/fallback-image.jpg"}
            />
            <div className="text-white h-[45%] p-3 flex flex-col">
              <h1 className="text-lg font-semibold">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className="text-sm text-ellipsis overflow-hidden">
                {d.overview.slice(0, 50)}...
                <span className="text-zinc-500"> more</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
export default HorizontalCards;
