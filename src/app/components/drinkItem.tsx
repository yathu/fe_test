import React, { FC, useCallback } from "react";
import { Drink } from "../Interfaces/interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Image from "next/image";

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
        <Image
          className=""
          src={strDrinkThumb}
          alt={strImageAttribution}
          sizes="100vw"
          width={0}
          height={0}
          style={{width:'100%', height:'auto'}}
        />
        <div className="py-2 px-3 bg-gray-50">
          <div className="text-sm mb-1 line-clamp-1">{strDrink}</div>
          <div className="text-xs text-gray-500">{strCategory}</div>

          {isSearched && (
            <button
              onClick={() => onAdd && onAdd(drink)}
              className="btn-add">
              <i className={`bi ${isFav() ? 'bi-heart-fill text-blue-200' : 'bi-heart'} mr-2`}></i>
              <span className="text-xs mr-2">Add</span>
            </button>
          )}

          {onRemove && (
            <button
              onClick={() => onRemove && onRemove(idDrink)}
              className="btn-remove">
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
