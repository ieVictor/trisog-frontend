import { createContext, useEffect, useState } from 'react';
import { CategoriesResponse } from '../services/api/categoryService';
import { fetchCategoryData } from '../utils/fetchCategoryData';
import setupDataFetching from '../utils/fetchToursData';
import { PaginationTourResponse } from '../types/TourType';
import reviewService from '../services/api/reviewService';
import userService from '../services/api/userService';
import { Country } from '../types/CountryType';
import countryService from '../services/api/countryService';

type HomeContextProps = {
  categories: CategoriesResponse | null;
  tours: PaginationTourResponse | null;
  reviewsCounter: number | null;
  usersCounter: number | null;
  countriesCounter: Country[] | null;
};

type HomeDataProviderProps = {
  children: React.ReactNode;
};

export const HomeContext = createContext<HomeContextProps | null>(null);

export function HomeDataProvider(props: HomeDataProviderProps) {
  const [categories, setCategories] = useState<CategoriesResponse | null>(null);
  const [toursData, setToursData] = useState<PaginationTourResponse | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [reviewsCounter, setReviewsCounter] = useState<number | null>(null);
  const [usersCounter, setUsersCounter] = useState<number | null>(null);
  const [countriesData, setCountries] = useState<Country[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const tours = await setupDataFetching(new Set(['rating']), 'desc');
      if (tours) setToursData(tours);

      setLoading(false);

      const data = await fetchCategoryData();
      if (data) setCategories(data);

      const countries = await countryService.getCountries();
      if (countries) setCountries(countries.data);

      const reviews = await reviewService.getReviewsCounter();
      if (reviews) setReviewsCounter(reviews.data);

      const users = await userService.getUsersCounter();
      if (users) setUsersCounter(users.data);
    }
    fetchData();
  }, []);

  return (
    <HomeContext.Provider
      value={{ categories, tours: toursData, reviewsCounter, usersCounter, countriesCounter:  countriesData }}
    >
      {!loading && props.children}
    </HomeContext.Provider>
  );
}
