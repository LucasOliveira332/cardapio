import axios, { AxiosResponse } from 'axios';

import { API_URL } from '../config/config';
import { FoodData } from '../interface/FoodData';

export class FoodService {
  static async get(): Promise<FoodData[]> {
    const response = await axios.get<FoodData[]>(API_URL + '/food');
    const json = response.data;
    return json;
  }

  static async post(foodData: SaveFood): Promise<AxiosResponse<FoodData[]>> {
    const response = await axios.post<FoodData[]>(API_URL + '/food', foodData);
    const json = response;
    return json;
  }
}
