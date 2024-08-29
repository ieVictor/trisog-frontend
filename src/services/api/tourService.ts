import axios, { AxiosResponse } from "axios";
import { api } from "./api";
import { Tour, UniqueTour } from "../../types/TourType";

class TourService {
  async getTours(): Promise<AxiosResponse<Tour[]> | null> {
    try {
      const response = await api.get('/tours');
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
}

export default new TourService();