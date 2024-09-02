import axios, { AxiosResponse } from 'axios';
import { api } from './api';
import { User } from '../../types/UserType';

type RegisterUserParams = {
  user_id: string,
  user_email: string | null,
  user_name: string | null,
  user_image: string | null,
}

class UserService {
  async registerUser({user_id, user_email, user_name, user_image}: RegisterUserParams): Promise<AxiosResponse<unknown> | null> {
    try {
      const response = await api.post('/users', {  
        id: user_id,
        email: user_email,
        username: user_name,
        img: user_image
      });
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) return error.response
    }

    return null
  }

  async getUserById(user_id: string): Promise<AxiosResponse<User> | null> {
    try {
      const response = await api.get(`/users/${user_id}`) 
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response)  return error.response;
    }
    return null
  } 

  async getUsersCounter(): Promise<AxiosResponse<number> | null> {
    try {
      const response = await api.get(`/users/counter`) 
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response)  return error.response;
    }
    return null
  } 
}

export default new UserService();