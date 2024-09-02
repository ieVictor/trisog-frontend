import { useEffect, useReducer } from 'react';
import { PaginationTourResponse } from '../../../types/TourType';
import { CategoriesResponse } from '../../../services/api/categoryService';
import { SliderValue } from '@nextui-org/react';
import { fetchData } from '../../../utils/fetchToursData';

export const initialState = {
  tourData: null as PaginationTourResponse | null,
  categoryData: null as CategoriesResponse | null,
  direction: 'desc' as string,
  sortOption: new Set(['title']) as Set<string>,
  page: 0 as number,
  sliderValue: 2000 as SliderValue,
  catFilter: [] as number[],
  ratingFilter: 1 as number,
  countryFilter: [] as string[],
  search: null as string | null,
  destination: null as string | null,
  type: new Set([]) as Set<number>,
  date: null as string | null,
  guests: 0 as number | null,
};

const initialStateFactory = (INST: typeof initialState) => {
  return {
    ...INST,
    catFilter:
      INST?.type.size > 0 ? Array.from(INST.type).map(Number) : INST.catFilter,
    search: INST?.destination || INST.search,
    guests: INST?.guests || INST.guests,
    date: INST?.date || INST.date,
  };
};

type Action =
  | { type: 'SET_TOUR_DATA'; payload: PaginationTourResponse | null }
  | { type: 'SET_DIRECTION'; payload: string }
  | { type: 'SET_SORT_OPTION'; payload: Set<string> }
  | { type: 'SET_PAGE'; payload: number }
  | { type: 'SET_SLIDER_VALUE'; payload: SliderValue }
  | { type: 'SET_CAT_FILTER'; payload: number[] }
  | { type: 'SET_RATING_FILTER'; payload: number }
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_COUNTRY_FILTER'; payload: string[] }
  | { type: 'SET_DATE'; payload: string | null }
  | { type: 'SET_GUESTS'; payload: number | null };

function reducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case 'SET_TOUR_DATA':
      return { ...state, tourData: action.payload };
    case 'SET_DIRECTION':
      return { ...state, direction: action.payload };
    case 'SET_SORT_OPTION':
      return { ...state, sortOption: action.payload };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'SET_SLIDER_VALUE':
      return { ...state, sliderValue: action.payload };
    case 'SET_CAT_FILTER':
      return { ...state, catFilter: action.payload };
    case 'SET_RATING_FILTER':
      return { ...state, ratingFilter: action.payload };
    case 'SET_COUNTRY_FILTER':
      return { ...state, countryFilter: action.payload };
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'SET_DATE':
      return { ...state, date: action.payload };
    case 'SET_GUESTS':
      return { ...state, guests: action.payload };
    default:
      return state;
  }
}

export function useTourPackage(INST: typeof initialState) {
  const [state, dispatch] = useReducer(
    reducer,
    initialStateFactory(INST)
  );

  useEffect(() => {
    const fetchTourData = async () => {
      const tourData = await fetchData(
        state.sortOption,
        state.direction,
        state.page,
        9,
        state.catFilter.length > 0 ? state.catFilter : [1, 2, 3, 4, 5, 6, 7],
        state.sliderValue,
        state.ratingFilter,
        state.countryFilter.length > 0 ? state.countryFilter : [],
        state.search,
        state.date,
        state.guests
      );

      if (tourData) {
        dispatch({ type: 'SET_TOUR_DATA', payload: tourData });
      }
    };
    fetchTourData();
  }, [
    state.sortOption,
    state.direction,
    state.page,
    state.catFilter,
    state.sliderValue,
    state.ratingFilter,
    state.countryFilter,
    state.search,
    state.type,
    state.date,
    state.guests
  ]);

  return { state, dispatch };
}
