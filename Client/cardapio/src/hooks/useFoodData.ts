import axios, { AxiosPromise } from 'axios';
import { FoodData } from '../interface/FoodData';

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<FoodData[]> => {
  const response = axios.get(API_URL + '/food');
  return response;
};

export function useFoodData() {}
