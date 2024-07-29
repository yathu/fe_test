import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Drink } from "../Interfaces/interfaces";

export interface FavouriteState {
  favourites: Drink[];
}

const initialState: FavouriteState = {
  favourites: [],
};

export const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    // addFavourite: (state, action: PayloadAction<Drink>) => {
    //   state.favourites = [...state.favourites, action.payload];
    // },
    addFavourite: (state, action: PayloadAction<Drink>) => {
      const existingDrink = state.favourites.find(
        (drink) => drink.idDrink === action.payload.idDrink
      );
      if (!existingDrink) {
        state.favourites = [...state.favourites, action.payload];
      }
    },
    removeFavourite: (state, action: PayloadAction<string>) => {
      state.favourites = state.favourites.filter(
        (data) => data?.idDrink != action.payload
      );
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
