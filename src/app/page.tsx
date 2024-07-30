"use client";

import { getRandomData } from "./API/api";
import { useEffect, useState } from "react";
import { Drink } from "./Interfaces/interfaces";
import DrinkItem from "./components/drinkItem";

export default function Home() {
  const [randomData, setRandomData] = useState<Drink[]>([]);

  const getHomeData = async () => {
    getRandomData().then((data) => {
      if (data?.drinks?.length) {
        setRandomData(data.drinks);
      }
    });
  };

  useEffect(() => {
    getHomeData();
  }, []);

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="mb-4 flex justify-end">
          <button
          data-testid="btnRefresh"
            onClick={() => getHomeData()}
            className="refresh-btn">
            <span className="text-xs mr-2">Refresh</span>
            <i className="bi bi-arrow-clockwise"></i>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
          {randomData.map((data) => {
            return <DrinkItem key={data?.idDrink} drink={data} />;
          })}
        </div>
      </div>
    </div>
  );
}
