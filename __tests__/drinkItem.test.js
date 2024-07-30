import React from "react";
import configureStore from "redux-mock-store";
import DrinkItem from "../src/app/components/drinkItem";
import "@testing-library/jest-dom";
import { screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, jest } from "@jest/globals";
import renderWithProviders from "./../utils/test_utils";

const mockStore = configureStore([]);

const mockDrink = {
  idDrink: "17251",
  strDrink: "Boulevardier",
  strDrinkAlternate: null,
  strTags: null,
  strVideo: null,
  strCategory: "Cocktail",
  strIBA: null,
  strAlcoholic: "Alcoholic",
  strGlass: "Martini Glass",
  strInstructions: "Stir with ice, strain, garnish and serve.",
  strInstructionsES: null,
  strInstructionsDE: "Mit Eis verrühren, abseihen, garnieren und servieren.",
  strInstructionsFR: null,
  strInstructionsIT: "Mescolare con ghiaccio, filtrare, guarnire e servire.",
  "strInstructionsZH-HANS": null,
  "strInstructionsZH-HANT": null,
  strDrinkThumb:
    "https://www.thecocktaildb.com/images/media/drink/km84qi1513705868.jpg",
  strIngredient1: "Campari",
  strIngredient2: "Sweet Vermouth",
  strIngredient3: "Rye whiskey",
  strIngredient4: "Orange Peel",
  strIngredient5: null,
  strIngredient6: null,
  strIngredient7: null,
  strIngredient8: null,
  strIngredient9: null,
  strIngredient10: null,
  strIngredient11: null,
  strIngredient12: null,
  strIngredient13: null,
  strIngredient14: null,
  strIngredient15: null,
  strMeasure1: "1 oz",
  strMeasure2: "1 oz",
  strMeasure3: "1 1/4 oz",
  strMeasure4: "1",
  strMeasure5: null,
  strMeasure6: null,
  strMeasure7: null,
  strMeasure8: null,
  strMeasure9: null,
  strMeasure10: null,
  strMeasure11: null,
  strMeasure12: null,
  strMeasure13: null,
  strMeasure14: null,
  strMeasure15: null,
  strImageSource: null,
  strImageAttribution: null,
  strCreativeCommonsConfirmed: "No",
  dateModified: "2017-12-19 17:51:08",
};

const initialState = {
  favourites: [],
};

describe("DrinkItem Component", () => {
  it("renders Add button when isSearched is true", () => {
    renderWithProviders(
      <DrinkItem drink={mockDrink} isSearched={true} onAdd={jest.fn()} />
    );

    const addButton = screen.getByRole("button", { name: /Add/i });
    expect(addButton).toBeInTheDocument();
  });

  it("does not render Add button when isSearched is false", () => {
    renderWithProviders(<DrinkItem drink={mockDrink} isSearched={false} />);

    const addButton = screen.queryByRole("button", { name: /Add/i });
    expect(addButton).not.toBeInTheDocument();
  });

  it("renders Remove button when onRemove is provided", () => {
    renderWithProviders(<DrinkItem drink={mockDrink} onRemove={jest.fn()} />);

    const removeButton = screen.getByRole("button", { name: /Remove/i });
    expect(removeButton).toBeInTheDocument();
  });

  it("does not render Remove button when onRemove is not provided", () => {
    renderWithProviders(<DrinkItem drink={mockDrink} />);

    const removeButton = screen.queryByRole("button", { name: /Remove/i });
    expect(removeButton).not.toBeInTheDocument();
  });

  it("handles Add button click", () => {
    const onAddMock = jest.fn();

    renderWithProviders(
      <DrinkItem drink={mockDrink} isSearched={true} onAdd={onAddMock} />
    );

    const addButton = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(addButton);

    expect(onAddMock).toHaveBeenCalledWith(mockDrink);
  });

  it("handles Remove button click", () => {
    const onRemoveMock = jest.fn();

    renderWithProviders(
      <DrinkItem drink={mockDrink} onRemove={onRemoveMock} />
    );

    const removeButton = screen.getByRole("button", { name: /Remove/i });
    fireEvent.click(removeButton);

    expect(onRemoveMock).toHaveBeenCalledWith(mockDrink.idDrink);
  });
});
