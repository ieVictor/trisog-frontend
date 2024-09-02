import { useContext } from "react";
import { CategoriesContext } from "../contexts/CategoriesContext";

export const useCategories = () => {
  const context = useContext(CategoriesContext);
  if (!context) throw new Error ('useCategories must be used inside a CategoriesProvider!');
  return context;
}