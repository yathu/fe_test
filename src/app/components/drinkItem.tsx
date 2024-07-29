import React, { FC, useCallback } from "react";
import { Drink } from "../Interfaces/interfaces";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface DrinkItemProps {
  drink: Drink;
  isSearched?: boolean;
  onAdd?: (item: Drink) => void;
  onRemove?: (id: string) => void;
}

const DrinkItem: FC<DrinkItemProps> = React.memo(
  ({ drink, isSearched, onAdd, onRemove }) => {
    const {
      strDrinkThumb,
      strImageAttribution,
      strDrink,
      strCategory,
      idDrink,
    } = drink;

    const favourites = useSelector((state: RootState) => state.favourites);

    const isFav = useCallback(
      (): boolean => favourites.some((item) => item?.idDrink === idDrink),
      [favourites]
    );

    return (
      <div className="w-full overflow-hidden flex flex-col rounded-lg bg-white shadow">
        <img
          className="w-full h-auto"
          src={strDrinkThumb}
          alt={strImageAttribution}
        />
        <div className="py-2 px-3">
          <div className="text-sm mb-1 line-clamp-1">{strDrink}</div>
          <div className="text-xs text-gray-500">{strCategory}</div>

          {isSearched && (
            <button
              onClick={() => onAdd && onAdd(drink)}
              className="mt-3 mb-1 bg-blue-600 px-4 py-1 rounded text-white flex flex-row justify-center items-center w-full">
              <i className={`bi ${isFav() ? 'bi-heart-fill text-blue-200' : 'bi-heart'} mr-2`}></i>
              <span className="text-xs mr-2">Add</span>
            </button>
          )}

          {onRemove && (
            <button
              onClick={() => onRemove && onRemove(idDrink)}
              className="mt-3 mb-1 bg-red-400 px-4 py-1 rounded text-white flex flex-row justify-center items-center w-full outline-none focus:bg-red-600">
              <i
                className={`bi bi-trash3-fill mr-2`}></i>
              <span className="text-xs mr-2">Remove </span>
            </button>
          )}
        </div>
      </div>
    );
  }
);

export default DrinkItem;
