import { createContext, useEffect, useState } from "react";
import { CategoriesResponse } from "../services/api/categoryService";
import { fetchCategoryData } from "../utils/fetchCategoryData";

type CategoriesContextProps = {
  categories: CategoriesResponse | null;
}

type CategoriesProviderProps = {
  children: React.ReactNode;
}

export const CategoriesContext = 
  createContext<CategoriesContextProps | null>(null);

export function CategoriesProvider(props: CategoriesProviderProps) {
  const [categories, setCategories] = useState<CategoriesResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await fetchCategoryData();
      if (data) setCategories(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <CategoriesContext.Provider value={{categories}}>
      { !loading && props.children }
    </CategoriesContext.Provider>
  )
}
