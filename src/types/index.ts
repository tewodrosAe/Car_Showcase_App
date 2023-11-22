import { MouseEventHandler } from "react";

export interface FoodsProp{
  idMeal: number,
  strMeal: string,
  strDrinkAlternate: string | null,
  strCategory: string | null,
  strArea: string | null,
  strInstructions: string | null,
  strMealThumb: string | null,
  strTags: string | null,
}