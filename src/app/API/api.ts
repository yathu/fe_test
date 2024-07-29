import { Cocktails, Drink } from "../Interfaces/interfaces";

const homeUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/json/v1/1/search.php?f=`;
const searchUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/json/v1/1/search.php?s=`;

const getFirstLetter = () =>
  String.fromCharCode(97 + Math.floor(Math.random() * 26));

//they don't have any multiple items url so i use search by first letter
export const getRandomData = async (): Promise<Cocktails> => {
  try {
    const first = getFirstLetter();
    const res = await fetch(homeUrl + first);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = res.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const searchCocktail = async (name: string): Promise<Cocktails> => {
  try {
    const res = await fetch(searchUrl + name);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = res.json();
    return data;
  } catch (error) {
    console.error("Error fetching search:", error);
    throw error;
  }
};
