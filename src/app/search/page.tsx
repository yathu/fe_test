"use client";
import React, { FC, useCallback, useState } from "react";
import { debounce } from "lodash";
import { searchCocktail } from "../API/api";
import { Drink } from "../Interfaces/interfaces";
import DrinkItem from "../components/drinkItem";
import Image from "next/image";
import emptyImg from "@/assets/empty.svg";
import { useDispatch } from "react-redux";
import { addFavourite } from "../store/favouriteSlice";

const Search:FC = () => {
  const [searchRes, setSearchRes] = useState<Drink[]>([]);
  const [searchSTR, setSearchSTR] = useState<string>("");

  const dispatch = useDispatch();


  const onChange = useCallback(
    debounce(async (e: React.ChangeEvent<HTMLInputElement>) => {
      try {
        setSearchSTR(e.target.value);

        if (!e.target.value) {
          return;
        }

        const res = await searchCocktail(e.target.value);

        if (res?.drinks) {
          setSearchRes(res.drinks);
        }
      } catch (error) {
        console.log("search error==>", error);
      }
    }, 500),
    []
  );

  // const count = useSelector((state: RootState) => state.counter.value)

  const onAddFav = useCallback((item: Drink) => {
    console.log("add==>", item);

    dispatch(addFavourite(item));
  }, []);

  return (
      <div className="container mx-auto p-4">

        <form className="max-w-md mx-auto mb-4">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:border-blue-500 outline-none"
              placeholder="Search..."
              onChange={onChange}
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
              Search
            </button>
          </div>
        </form>

        {searchRes?.length && searchSTR ? (
          <div>
            {
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
                {searchRes.map((data) => {
                  return (
                    <DrinkItem onAdd={onAddFav} key={data?.idDrink} drink={data} isSearched />
                  );
                })}
              </div>
            }
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center pt-5">
            <Image src={emptyImg} alt={""} width={280} height={280} />
            <div className="text-4xl text-center font-semibold mt-5 max-w-[600px]">
              <span className="text-blue-800">Keep searching! </span>
              We’ll help you find the perfect
              <span className="text-blue-800"> cocktail. </span>
            </div>
          </div>
        )}
      </div>
  );
};

export default Search;
