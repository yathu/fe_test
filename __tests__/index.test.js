import { describe, it } from "node:test";
import { screen } from "@testing-library/react";
import Search from "@/app/search/page";
import renderWithProviders from "./../utils/test_utils";
import "@testing-library/jest-dom";
import Home from "@/app/page";
import { getFirstLetter } from "@/app/API/api";

describe("search", () => {
  it("Render search button", () => {
    renderWithProviders(<Search />);

    const SearchButton = screen.getByRole("button");
    expect(SearchButton).toHaveTextContent("Search");
  });
});

describe("refresh", () => {
  it("Render refresh button", () => {
    renderWithProviders(<Home />);

    const refreshBtn = screen.getByTestId("btnRefresh");
    expect(refreshBtn).toBeInTheDocument();
  });
});

test("returns a single letter between a and z", () => {
  const letter = getFirstLetter();

  expect(letter).toHaveLength(1);

  // Check that the letter is between 'a' and 'z'
  expect(letter).toMatch(/[a-z]/);
});
