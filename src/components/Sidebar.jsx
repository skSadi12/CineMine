import React from "react";
import trending from "../assets/icons/trending.svg"
import newRelease from "../assets/icons/newRelease.svg"
import commingSoon from "../assets/icons/commingSoon.svg"
import favourite from "../assets/icons/favourite.svg"
import watchLater from "../assets/icons/watchLater.svg"


const Sidebar = () => {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            href="#"
            className="flex items-center space-x-2 rounded-lg bg-primary px-5 py-3.5 text-black"
          >
            <img
              src={trending}
              width={24}
              height={24}
              alt="Trending"
            />
            <span>Trending</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="flex items-center space-x-2 rounded-lg px-5 py-3.5"
          >
            <img
              src={newRelease}
              width={24}
              height={24}
              alt="New Releases"
            />
            <span>New Releases</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="flex items-center space-x-2 rounded-lg px-5 py-3.5"
          >
            <img
              src={commingSoon}
              width={24}
              height={24}
              alt="Coming Soon"
            />
            <span>Coming Soon</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="flex items-center space-x-2 rounded-lg px-5 py-3.5"
          >
            <img
              src={favourite}
              width={24}
              height={24}
              alt="Favourites"
            />
            <span>Favourites</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="flex items-center space-x-2 rounded-lg px-5 py-3.5"
          >
            <img
              src={watchLater}
              width={24}
              height={24}
              alt="Watch Later"
            />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;