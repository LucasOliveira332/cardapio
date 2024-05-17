import axios, { AxiosPromise, AxiosResponse } from 'axios';
import { FoodData } from '../interface/FoodData';
import { useEffect, useState } from 'react';
import { API_URL } from '../config/config';

const fetchData = async (): Promise<FoodData[]> => {
  const response = await axios.get<FoodData[]>(API_URL + '/food');
  const json = response.data;
  return json;
};

export const fetchSaveData = async (
  foodData: SaveFood,
): Promise<AxiosResponse<FoodData[]>> => {
  const response = await axios.post<FoodData[]>(API_URL + '/food', foodData);
  const json = response;
  return json;
};

export function useFoodData() {
  const [foodData, setFoodData] = useState<FoodData[] | null>(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetchData();
        setFoodData(response);
      } catch (error) {
        console.log('Error fetching food data', error);
      }
    };

    fetchFoodData();
  }, [foodData]);

  return foodData;
}
