import axios, { AxiosResponse } from "axios";
import { api } from "./api";
import { Review } from "../../types/ReviewType";

class ReviewService {
  async getReviewsByTourId(tour_id: string): Promise<AxiosResponse<Review[]> | null> {
    try {
      const response = await api.get(`reviews/${tour_id}`);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) return error.response;
    }
    return null
  }
}

export default new ReviewService();