import { toast } from 'react-toastify';
import tourService from '../services/api/tourService';
import { PaginationTourResponse } from '../types/TourType';

const DEFAULT_CATEGORIES = [1, 2, 3, 4, 5, 6, 7];

export async function fetchData(
  sortOption: Set<string> = new Set(['title']),
  sortDirection: string = 'asc',
  page: number = 1,
  limit: number = 9,
  categories?: number[],
  price?: number | number[],
  rating?: number,
  countries?: string[],
  search?: string | null,
  date?: string | null,
  guests?: number | null
): Promise<PaginationTourResponse | null> {
  try {
    const sortParam = Array.from(sortOption).join(',');
    const queryString = sortParam
      ? `?sortBy=${encodeURIComponent(sortParam)}&sortDirection=${
          sortDirection ? sortDirection : ''
        }&page=${page ? page : ''}&limit=${limit ? limit : ''}&categories=${
          categories ? categories.join(',') : DEFAULT_CATEGORIES.join(',')
        }&price=${price ? price : ''}&rating=${
          rating ? rating : ''
        }&countries=${
          countries ? countries.join(',') : '' 
        }&search=${encodeURIComponent(
          search ? search : ''
        )}&date=${encodeURIComponent(date ? date : '')}&guests=${
          guests ? guests : ''
        }`
      : '';

    const response = await tourService.getTours(queryString);
    if (response && response.status === 200) return response.data;

    toast.warning('Error fetching data!');
    return null;
  } catch (error) {
    console.error(error);
    toast.error('An error ocurred while fetching the data.');
  }

  return null;
}

export default fetchData;
