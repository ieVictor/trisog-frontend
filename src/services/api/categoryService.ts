import axios, { AxiosResponse } from 'axios';
import { api } from './api';
import { Category } from '../../types/CategoryType';

export interface CategoriesResponse extends Array<Category> {
  msg?: string;
}

class CategoryService {
  async getCategories(): Promise<AxiosResponse<CategoriesResponse> | null> {
    try {
      const response = await api.get(`categories/`);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) return error.response;
    }
    return null;
  }
}

export default new CategoryService();
