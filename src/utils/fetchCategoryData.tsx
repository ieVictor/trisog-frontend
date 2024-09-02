import { toast } from 'react-toastify';
import categoryService from '../services/api/categoryService';

export async function fetchCategoryData(
) {
  try {
    const response = await categoryService.getCategories();
    if (response) {
      if (response.status !== 200) {
        toast.warning('Request Error!');
        return;
      }
      return response.data;
    }
  } catch (error) {
    console.error(error);
    toast.error('An error ocurred while fetching the data.');
  }
}

