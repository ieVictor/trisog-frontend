import axios, { AxiosError } from 'axios';
import { setLogLevel } from 'firebase/app';
import { getAuth } from 'firebase/auth';
setLogLevel("silent")

const baseURL = import.meta.env.VITE_BACKEND_URL;

export function createAPI() {
  const api = axios.create({
    baseURL,
  })

  api.interceptors.request.use(
    async (config) => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const token = await user.getIdToken();
        console.log(token);
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      if (error.response?.status === 401) {
        window.location.href = '/';
      }
      return Promise.reject(error);
    }
  );

  return api
}

export const api = createAPI()