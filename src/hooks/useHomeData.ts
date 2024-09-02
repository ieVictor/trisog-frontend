import { useContext } from "react";
import { HomeContext } from "../contexts/HomeContext";

export const useHomeData = () => {
  const context = useContext(HomeContext);
  if (!context) throw new Error ('useCategories must be used inside a CategoriesProvider!');
  return context;
}