import axios, { AxiosResponse } from "axios";
import { api } from "./api";
import { PaginationTourResponse, Tour, UniqueTour } from "../../types/TourType";

class TourService {
  async getTours(queryString: string): Promise<AxiosResponse<PaginationTourResponse> | null> {
    try {
      const response = await api.get(`/tours${queryString}`);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) return error.response;
    }
    return null
  }

  async getTourById(tour_id: string): Promise<AxiosResponse<UniqueTour> | null> {
    try {
      const response = await api.get(`/tours/${tour_id}`);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) return error.response;
    }
    return null;
  };

  async getToursByCategory(category: number): Promise<AxiosResponse<Tour[]> | null> {
    try {
      const response = await api.get(`/tours/categories?categories=${category}`);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) return error.response;
    }
    return null
  }
}

export default new TourService();