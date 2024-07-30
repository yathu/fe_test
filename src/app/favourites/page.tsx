"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import DrinkItem from "../components/drinkItem";
import { removeFavourite } from "../store/favouriteSlice";
import Image from "next/image";
import fav from "@/assets/fav.svg";

function Favourite() {
  const favourites = useSelector((state: RootState) => state.favourites);

  const dispatch = useDispatch();

  const onRemve = (id: string) => {
    dispatch(removeFavourite(id));
  };

  return (
    <div className="container mx-auto p-4">
      <div>
        {favourites?.length <= 0 && (
          <div className="flex flex-col justify-center items-center pt-5">
            <Image src={fav} alt={""} width={280} height={280} />
            <div className="text-4xl text-center font-semibold mt-5 max-w-[600px]">
              Your
              <span className="text-red-600"> favourites </span>
               list is empty. Add some
              <span className="text-red-600"> drinks </span>
              to get started!
            </div>
          </div>
        )}

        {
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
            {favourites.map((data) => {
              return (
                <DrinkItem
                  onRemove={onRemve}
                  key={data?.idDrink}
                  drink={data}
                />
              );
            })}
          </div>
        }
      </div>
    </div>
  );
}

export default Favourite;
