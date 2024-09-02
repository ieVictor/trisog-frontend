import axios, { AxiosResponse } from "axios";
import { api } from "./api";
import { Review, ReviewInsert } from "../../types/ReviewType";

interface ReviewsResponse extends Array<Review> {
  msg?: string
}

interface ReviewResponse extends Review {
  msg?: string
}


class ReviewService {
  async getReviewsByTourId(tour_id: string): Promise<AxiosResponse<ReviewsResponse> | null> {
    try {
      const response = await api.get(`reviews/${tour_id}`);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) return error.response;
    }
    return null
  }
  async getReviewsCounter(): Promise<AxiosResponse<number> | null> {
    try {
      const response = await api.get(`reviews/counter`);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) return error.response;
    }
    return null
  }
  async createReview(data: ReviewInsert, anonymous?: boolean): Promise<AxiosResponse<ReviewResponse> | null> {
    try {
      const response = await api.post(`reviews?anonymous=${anonymous}`, {...data})
      return response
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) { return error.response };
    }
    return null
  }
}

export default new ReviewService();