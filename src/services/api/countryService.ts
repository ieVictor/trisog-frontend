import axios, { AxiosResponse } from "axios";
import { api } from "./api";
import { Country } from "../../types/CountryType";

class CountryService {
  async getCountries(): Promise<AxiosResponse<Country[]> | null> {
    try {
      const response = await api.get(`/countries`);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) return error.response;
    }
    return null
  }

  async getCountryById(country_id: string): Promise<AxiosResponse<Country> | null> {
    try {
      const response = await api.get(`/countries/${country_id}`);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) return error.response
    }
    return null
  }
}

export default new CountryService();