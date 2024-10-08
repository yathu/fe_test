"use client";

import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [opened, setOpened] = React.useState(false);
  const pathname = usePathname();


  const favourites = useSelector((state: RootState) => state.favourites);

  const toggleNav = () => {
    setOpened(!opened);
  };

  return (
    <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
      <div
        x-data="{ open: false }"
        className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <a
            href="/"
            className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
            Cocktail Bar
          </a>
          <button
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            onClick={() => toggleNav()}>
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path
                className={!opened ? "inline-block" : "hidden"}
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
              <path
                className={opened ? "inline-block" : "hidden"}
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <nav
          className={
            "flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row" +
            (opened ? " flex" : " hidden")
          }>
          <a
            className={`${pathname == '/' && 'bg-gray-200'} nav-item`}
            href="/">
            Home
          </a>
          <Link
            className={`${pathname == '/search' && 'bg-gray-200'} nav-item`}
            href="/search">
            Search
          </Link>
          <Link
            className={`${pathname == '/favourites' && 'bg-gray-200'} nav-item`}
            href="/favourites">
            Favourits
            {favourites?.length > 0 && (
              <div className="inline-flex items-center">
                <i className="bi bi-heart-fill mx-1"></i>({favourites?.length})
              </div>
            )}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
